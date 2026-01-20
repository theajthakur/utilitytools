import { Construction } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function ToolsComingSoon({ categoryName }: { categoryName: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 rounded-full bg-secondary/50 p-6">
                <Construction className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Tools Coming Soon</h2>
            <p className="mt-2 text-muted-foreground max-w-md">
                We are working hard to build the best {categoryName.toLowerCase()}.
                Check back soon for updates!
            </p>
            <div className="mt-8">
                <Link
                    href="/categories"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Categories
                </Link>
            </div>
        </div>
    )
}
