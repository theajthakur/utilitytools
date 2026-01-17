"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { CommandSearch } from "./command-search"

export function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
                <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex h-14 items-center gap-4">

                        {/* Logo */}
                        <div className="flex items-center gap-2 font-semibold">
                            <div className="h-7 w-7 rounded-md bg-primary" />
                            <span className="hidden sm:inline">UtilityTools</span>
                        </div>

                        {/* Search trigger */}
                        <button
                            onClick={() => setOpen(true)}
                            className="flex flex-1 items-center justify-center px-4"
                        >
                            <div className="flex w-full max-w-sm items-center rounded-md border border-muted/50 bg-muted/20 px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                                <Search className="mr-2 h-4 w-4 shrink-0" />
                                <span className="flex-1 text-left truncate">Search tools...</span>
                                <kbd className="hidden sm:inline-flex ml-auto items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </div>
                        </button>

                        {/* Theme toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            {/* Command palette */}
            <CommandSearch open={open} setOpen={setOpen} />
        </>
    )
}
