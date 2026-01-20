import {
    Code2,
    Calculator,
    Zap,
    FileText,
    Image as ImageIcon,
    Palette,
    Lock,
    Wrench
} from 'lucide-react'
import React from 'react'

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

export const toolsBySlug: Record<string, Tool> = tools.reduce((acc, tool) => {
    acc[tool.slug] = tool
    return acc
}, {} as Record<string, Tool>)
