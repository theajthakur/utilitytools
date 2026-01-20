import React from 'react'
import { getCategoryBySlug, categories } from '@/data/categories'
import { notFound } from 'next/navigation'
import { ToolsComingSoon } from '@/components/common/ToolsComingSoon'

export function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }))
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug)

    if (!category) {
        notFound()
    }

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <section className="relative flex py-20 flex-col items-center justify-center px-4 text-center">
                <div className="mb-6 inline-block rounded-lg bg-secondary p-4">
                    <category.icon className="h-10 w-10 text-primary" />
                </div>
                <h1 className='text-4xl font-bold tracking-tight sm:text-6xl text-primary'>{category.title}</h1>
                <p className='text-xl tracking-tight text-muted-foreground sm:text-2xl mt-4 max-w-2xl'>
                    {category.description}
                </p>
            </section>

            <section className="container mx-auto px-4 py-8">
                <ToolsComingSoon categoryName={category.title} />
            </section>
        </div>
    )
}
