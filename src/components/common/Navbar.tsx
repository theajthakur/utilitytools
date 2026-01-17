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
                            className="hidden md:flex flex-1 justify-center"
                        >
                            <div className="flex w-full max-w-md items-center rounded-md border border-muted/50 dark:border-muted px-3 py-2 text-sm text-muted-foreground">
                                <Search className="mr-2 h-4 w-4" />
                                Search tools…
                                <kbd className="ml-auto rounded border px-1.5 text-xs">
                                    Ctrl K
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
