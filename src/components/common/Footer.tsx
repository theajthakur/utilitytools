import React from 'react'
import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} UtilityTools.tech. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <a href="https://github.com/theajthakur/utilitytools" target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </a>
                </div>
            </div>
        </footer>
    )
}
