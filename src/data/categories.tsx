import {
    Code2,
    Calculator,
    RefreshCcw,
    Command,
    Zap,
    Search,
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

export interface Tool {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    slug: string
    categorySlug: string
    keywords: string[]
    isComingSoon?: boolean
}

export const tools: Tool[] = [
    // Text Tools
    {
        title: "Case Converter",
        description: "Convert text between upper case, lower case, title case, camelCase, and more.",
        icon: FileText,
        slug: "case-converter",
        categorySlug: "text-tools",
        keywords: ["case", "uppercase", "lowercase", "capital", "camelcase", "text", "convert"]
    },
    {
        title: "Word Counter",
        description: "Count words, characters, sentences, and paragraphs in real-time.",
        icon: FileText,
        slug: "word-counter",
        categorySlug: "text-tools",
        keywords: ["count", "word", "character", "length", "text", "stats"]
    },
    {
        title: "Lorem Ipsum Generator",
        description: "Generate placeholder text for your designs and mockups.",
        icon: FileText,
        slug: "lorem-ipsum-generator",
        categorySlug: "text-tools",
        keywords: ["lorem", "ipsum", "generator", "text", "placeholder", "dummy"]
    },

    // Developer Tools
    {
        title: "JSON Formatter",
        description: "Beautify and validate JSON data with syntax highlighting.",
        icon: Code2,
        slug: "json-formatter",
        categorySlug: "developer-tools",
        keywords: ["json", "format", "beautify", "validate", "lint", "code"]
    },
    {
        title: "URL Encoder/Decoder",
        description: "Encode or decode URLs to handle special characters safely.",
        icon: Code2,
        slug: "url-encoder-decoder",
        categorySlug: "developer-tools",
        keywords: ["url", "encode", "decode", "percent", "string"]
    },
    {
        title: "Base64 Converter",
        description: "Convert text and files to Base64 and vice versa.",
        icon: Code2,
        slug: "base64-converter",
        categorySlug: "developer-tools",
        keywords: ["base64", "encode", "decode", "string", "binary"]
    },

    // Image Tools
    {
        title: "Image Compressor",
        description: "Compress images (PNG, JPG, WEBP) to reduce file size without losing quality.",
        icon: ImageIcon,
        slug: "image-compressor",
        categorySlug: "image-tools",
        keywords: ["image", "compress", "optimize", "size", "reduce", "min"]
    },
    {
        title: "Image Format Converter",
        description: "Convert images between PNG, JPG, WEBP, and other formats.",
        icon: ImageIcon,
        slug: "image-converter",
        categorySlug: "image-tools",
        keywords: ["image", "convert", "format", "png", "jpg", "webp"]
    },

    // Color & UI Tools
    {
        title: "Color Picker",
        description: "Pick colors, convert between HEX, RGB, HSL, and generate palettes.",
        icon: Palette,
        slug: "color-picker",
        categorySlug: "color-and-ui-tools",
        keywords: ["color", "picker", "hex", "rgb", "hsl", "convert", "palette"]
    },
    {
        title: "Contrast Checker",
        description: "Check color contrast ratios for accessibility (WCAG).",
        icon: Palette,
        slug: "contrast-checker",
        categorySlug: "color-and-ui-tools",
        keywords: ["contrast", "accessibility", "wcag", "color", "checker", "ratio"]
    },

    // Converter Tools
    {
        title: "Unit Converter",
        description: "Convert between common units of length, weight, volume, and more.",
        icon: Calculator,
        slug: "unit-converter",
        categorySlug: "converter-tools",
        keywords: ["unit", "convert", "length", "weight", "volume", "imperial", "metric"]
    },

    // Security Tools
    {
        title: "Password Generator",
        description: "Generate strong, secure passwords with custom settings.",
        icon: Lock,
        slug: "password-generator",
        categorySlug: "security-and-encoding-tools",
        keywords: ["password", "generator", "secure", "random", "strong"]
    },
    {
        title: "UUID Generator",
        description: "Generate standard UUIDs (v4) for unique identifiers.",
        icon: Wrench,
        slug: "uuid-generator",
        categorySlug: "utility-tools",
        keywords: ["uuid", "guid", "generator", "id", "unique", "random"]
    },
    {
        title: "QR Code Generator",
        description: "Generate QR codes for URLs, text, Wi-Fi, and more.",
        icon: Zap,
        slug: "qr-code-generator",
        categorySlug: "utility-tools",
        keywords: ["qr", "code", "generator", "barcode", "scan", "link"]
    }
]
