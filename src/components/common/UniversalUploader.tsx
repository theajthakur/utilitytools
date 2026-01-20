"use client";

import React, { useCallback, useState } from "react";
import { useDropzone, DropzoneOptions, FileRejection } from "react-dropzone";
import { Upload, X, File as FileIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface UniversalUploaderProps {
    onFileSelect: (result: {
        file: File;
        content: string | ArrayBuffer | null;
        mimeType: string;
    }) => void;
    accept?: DropzoneOptions["accept"];
    maxSize?: number; // in bytes
    title?: string;
    description?: string;
    className?: string;
}

export const UniversalUploader: React.FC<UniversalUploaderProps> = ({
    onFileSelect,
    accept = {
        "image/*": [],
    },
    maxSize = 1024 * 1024 * 5, // 5MB default
    title = "Upload a file",
    description = "Drag & drop or click to upload",
    className,
}) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            setError(null);

            if (fileRejections.length > 0) {
                const rejection = fileRejections[0];
                if (rejection.errors[0].code === "file-too-large") {
                    setError(`File is too large. Max size is ${maxSize / 1024 / 1024}MB.`);
                } else if (rejection.errors[0].code === "file-invalid-type") {
                    setError("Invalid file type.");
                } else {
                    setError(rejection.errors[0].message);
                }
                return;
            }

            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                setFileName(file.name);

                const reader = new FileReader();
                reader.onabort = () => setError("File reading was aborted");
                reader.onerror = () => setError("File reading has failed");
                reader.onload = () => {
                    const content = reader.result;

                    if (file.type.startsWith('image/') && typeof content === 'string') {
                        setPreview(content);
                    } else {
                        setPreview(null);
                    }

                    onFileSelect({
                        file,
                        content,
                        mimeType: file.type,
                    });
                };
                reader.readAsDataURL(file);
            }
        },
        [maxSize, onFileSelect]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        maxSize,
        multiple: false,
    });

    const clearFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreview(null);
        setFileName(null);
        setError(null);
        // Optionally trigger onFileSelect with null/empty if parent expects it
        // onFileSelect({ file: null, content: null, mimeType: '' }); 
    };

    return (
        <div className={cn("w-full max-w-md mx-auto", className)}>
            <div
                {...getRootProps()}
                className={cn(
                    "relative group cursor-pointer flex flex-col items-center justify-center w-full h-64 rounded-xl border-2 border-dashed transition-all duration-300 ease-in-out bg-background/50 backdrop-blur-sm overflow-hidden",
                    isDragActive
                        ? "border-primary bg-primary/10 scale-[1.02] shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]"
                        : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30",
                    error ? "border-red-500/50 hover:border-red-500 bg-red-500/5" : ""
                )}
            >
                <input {...getInputProps()} />

                {/* Glow Effects */}
                <div className={cn("absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500", isDragActive && "opacity-100")} />

                {preview ? (
                    <div className="relative w-full h-full p-2">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-contain rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
                            <p className="text-white font-medium">Change file</p>
                        </div>
                        <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-lg hover:scale-105 transition-transform"
                            onClick={clearFile}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ) : fileName ? (
                    <div className="flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in-95 duration-200">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <FileIcon className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-foreground max-w-[200px] truncate">
                            {fileName}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">File selected</p>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="mt-4 hover:bg-destructive/10 hover:text-destructive"
                            onClick={clearFile}
                        >
                            Clear selection
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div
                            className={cn(
                                "mb-4 rounded-full p-4 transition-all duration-300",
                                isDragActive ? "bg-primary/20 scale-110" : "bg-muted scale-100 group-hover:scale-110 group-hover:bg-primary/10"
                            )}
                        >
                            <Upload
                                className={cn(
                                    "h-8 w-8 transition-colors duration-300",
                                    isDragActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                )}
                            />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold tracking-tight">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="absolute bottom-4 left-4 right-4 bg-destructive/10 border border-destructive/20 text-destructive text-xs p-2 rounded-md flex items-center gap-2 animate-in slide-in-from-bottom-2">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
