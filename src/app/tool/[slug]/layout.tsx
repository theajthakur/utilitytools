import React from 'react'
import { toolsBySlug } from '@/data/tools'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
    return Object.keys(toolsBySlug).map((slug) => ({
        slug,
    }))
}

export default async function ToolPage({
    params, children
}: {
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
}) {
    const { slug } = await params;
    const tool = toolsBySlug[slug]

    if (!tool) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link href={`/categories/${tool.categorySlug}`}>
                        <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                            <ArrowLeft className="h-4 w-4" />
                            Back to {tool.categorySlug.replace(/-/g, ' ')}
                        </Button>
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-start gap-6">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <tool.icon className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{tool.title}</h1>
                            <p className="text-lg text-muted-foreground">{tool.description}</p>
                        </div>
                    </div>

                    <div className="rounded-xl border text-card-foreground shadow-sm p-8 min-h-[400px] flex items-center justify-center bg-muted/20 border-dashed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
