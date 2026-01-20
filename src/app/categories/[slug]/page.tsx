import React from 'react'
import { getCategoryBySlug, categories } from '@/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { tools } from '@/data/tools'

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

    const categoryTools = tools.filter(tool => tool.categorySlug === slug)

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
                {categoryTools.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryTools.map((tool) => (
                            <Link href={`/tool/${tool.slug}`} key={tool.slug} className="group relative block h-full">
                                <span className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-lg" />
                                <div className="relative flex h-full items-start overflow-hidden rounded-lg border border-primary/10 bg-background/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
                                    <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-secondary/50 text-3xl transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                                        <tool.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                                            {tool.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {tool.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No tools found using this category.</p>
                    </div>
                )}
            </section>
        </div>
    )
}
