import React from 'react'
import { GithubStars } from '@/components/common/GithubStars'

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div>
                <h1 className='text-6xl font-bold tracking-tight sm:text-8xl text-primary'>UTILITY TOOLS</h1>
                <p className='text-2xl tracking-tight text-foreground sm:text-4xl mt-4'>Solutions to your handy problems at a place.</p>
            </div>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                A collection of powerful utility tools designed for developers and power users.
                Fast, minimal, and open source.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center">
                <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    Explore Tools
                </button>
                <GithubStars />
            </div>
        </section>
    )
}
