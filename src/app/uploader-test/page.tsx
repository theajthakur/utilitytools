"use client";

import { UniversalUploader } from "@/components/common/UniversalUploader";
import { useState } from "react";

export default function UploaderTestPage() {
    const [fileData, setFileData] = useState<{
        file: File;
        content: string | ArrayBuffer | null;
        mimeType: string;
    } | null>(null);

    const handleFileSelect = (data: {
        file: File;
        content: string | ArrayBuffer | null;
        mimeType: string;
    }) => {
        console.log("File Selected:", data);
        setFileData(data);
    };

    return (
        <div className="min-h-screen bg-background p-8 flex flex-col items-center gap-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter">
                    Universal Uploader Test
                </h1>
                <p className="text-muted-foreground">
                    Test the functionality of the Universal Uploader component.
                </p>
            </div>

            <UniversalUploader
                onFileSelect={handleFileSelect}
                title="Upload Image"
                description="Supports JPG, PNG, GIF"
                accept={{ "*": [] }}
            />

            {fileData && (
                <div className="w-full max-w-md p-4 rounded-lg border bg-card text-card-foreground shadow-sm animate-in slide-in-from-bottom-5">
                    <h2 className="text-lg font-semibold mb-2">Uploaded File Data</h2>
                    <div className="space-y-2 text-sm">
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="font-medium text-muted-foreground">Name:</span>
                            <span className="truncate">{fileData.file.name}</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="font-medium text-muted-foreground">Size:</span>
                            <span>{(fileData.file.size / 1024).toFixed(2)} KB</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="font-medium text-muted-foreground">Type:</span>
                            <span>{fileData.mimeType}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
