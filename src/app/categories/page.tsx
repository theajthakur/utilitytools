import React from 'react'
import { categories } from '@/data/categories'
import Link from 'next/link'

export default function CategoriesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">All Categories</h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Explore our collection of powerful utility tools organized by category.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <Link
                            href={`/categories/${category.slug}`}
                            key={index}
                            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-md block"
                        >
                            <div className="mb-4 inline-block rounded-lg bg-secondary p-3">
                                <category.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                                {category.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {category.description}
                            </p>
                            <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-primary/5 pointer-events-none rounded-lg" />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
