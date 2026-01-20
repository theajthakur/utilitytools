import React from 'react'
import { categories } from '@/data/categories'
import Link from 'next/link'

export function Features() {
    return (
        <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
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
    )
}
