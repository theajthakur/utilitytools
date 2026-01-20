import { toolsBySlug } from '@/data/tools';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tool = toolsBySlug[slug]

    if (!tool) {
        notFound()
    }
    return (
        <div className="text-center space-y-4">
            <div className="p-4 rounded-full bg-muted inline-flex">
                <tool.icon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold">Tool Implementation Coming Soon</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
                The {tool.title} is currently under development. Check back later!
            </p>
        </div>
    )
}
