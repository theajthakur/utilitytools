import {
    Code2,
    Calculator,
    RefreshCcw,
    FileText,
    Image as ImageIcon,
    Palette,
    Clock,
    Lock,
    Wrench
} from 'lucide-react'
import React from 'react'

export interface Category {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    slug: string
    keywords: string[]
}

export const categories: Category[] = [
    {
        title: "Text Tools",
        description: "Quick utilities to edit, format, and analyze text instantly.",
        icon: FileText,
        slug: "text-tools",
        keywords: ["text", "format", "analyze", "edit", "string", "word count", "case converter"]
    },
    {
        title: "Developer Tools",
        description: "Essential tools for developers to encode, decode, validate, and debug data.",
        icon: Code2,
        slug: "developer-tools",
        keywords: ["developer", "code", "debug", "json", "xml", "formatter", "validator", "base64"]
    },
    {
        title: "Image Tools",
        description: "Simple browser-based tools to compress, resize, and convert images.",
        icon: ImageIcon,
        slug: "image-tools",
        keywords: ["image", "picture", "photo", "resize", "compress", "convert", "png", "jpg", "webp"]
    },
    {
        title: "File & Data Tools",
        description: "Lightweight tools to convert and process files directly in your browser.",
        icon: RefreshCcw,
        slug: "file-and-data-tools",
        keywords: ["file", "data", "convert", "process", "csv", "pdf", "export"]
    },
    {
        title: "Color & UI Tools",
        description: "Handy tools for colors, gradients, contrast, and UI design tasks.",
        icon: Palette,
        slug: "color-and-ui-tools",
        keywords: ["color", "ui", "design", "gradient", "contrast", "hex", "rgb", "picker"]
    },
    {
        title: "Converter Tools",
        description: "Fast converters for numbers, units, time, and formats.",
        icon: Calculator,
        slug: "converter-tools",
        keywords: ["convert", "unit", "number", "format", "length", "weight", "currency"]
    },
    {
        title: "Date & Time Tools",
        description: "Tools to calculate dates, timestamps, age, and time differences.",
        icon: Clock,
        slug: "date-and-time-tools",
        keywords: ["date", "time", "timestamp", "age", "calculate", "duration", "timezone"]
    },
    {
        title: "Security & Encoding Tools",
        description: "Privacy-first tools for hashing, encoding, and secure data handling.",
        icon: Lock,
        slug: "security-and-encoding-tools",
        keywords: ["security", "hash", "encode", "decode", "md5", "sha", "password", "encrypt"]
    },
    {
        title: "Utility Tools",
        description: "Small but useful tools for random generation and everyday needs.",
        icon: Wrench,
        slug: "utility-tools",
        keywords: ["utility", "random", "generator", "tools", "misc", "uuid"]
    }
]

// Search Dictionary Helper
export const searchDictionary = categories.reduce((acc, category) => {
    category.keywords.forEach(keyword => {
        if (!acc[keyword]) {
            acc[keyword] = []
        }
        acc[keyword].push(category.slug)
    })
    return acc
}, {} as Record<string, string[]>)

export function getCategoryBySlug(slug: string) {
    return categories.find(c => c.slug === slug)
}


