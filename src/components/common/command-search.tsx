"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { searchItems, SearchResult } from "@/lib/search"
import { Category, Tool } from "@/data/categories"

export function CommandSearch({
    open,
    setOpen,
}: {
    open: boolean
    setOpen: (v: boolean) => void
}) {
    const router = useRouter()
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState<SearchResult[]>([])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setOpen(true)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [setOpen])

    React.useEffect(() => {
        setResults(searchItems(query))
    }, [query])

    const handleSelect = (result: SearchResult) => {
        if (result.type === 'category') {
            const category = result.item as Category
            router.push(`/categories/${category.slug}`)
        } else {
            const tool = result.item as Tool
            // Navigate to category for now, or specific tool route if/when available
            router.push(`/categories/${tool.categorySlug}`)
        }
        setOpen(false)
        setQuery("") // Reset query
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 overflow-hidden max-w-2xl">
                <DialogTitle className="hidden" />
                <Command shouldFilter={false}>
                    <div className="flex items-center border-b px-3 w-full">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <CommandInput
                            placeholder="Search tools, categories, keywords..."
                            value={query}
                            onValueChange={setQuery}
                            className="flex h-11 rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 w-full"
                        />
                    </div>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>

                        {results.length > 0 && (
                            <CommandGroup heading="Suggestions">
                                {results.map((result, index) => {
                                    const isTool = result.type === 'tool'
                                    const item = result.item

                                    return (
                                        <CommandItem
                                            key={`${result.type}-${item.slug}-${index}`}
                                            onSelect={() => handleSelect(result)}
                                            className="flex items-center px-4 py-2"
                                        >
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-secondary/50">
                                                <item.icon className="h-4 w-4 text-primary" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.title}</span>
                                                <span className="text-xs text-muted-foreground line-clamp-1">
                                                    {item.description}
                                                </span>
                                            </div>
                                            {isTool && (
                                                <div className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                                    Tool
                                                </div>
                                            )}
                                            {!isTool && (
                                                <div className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                                    Category
                                                </div>
                                            )}
                                        </CommandItem>
                                    )
                                })}
                            </CommandGroup>
                        )}

                        {query === "" && (
                            <div className="py-6 text-center text-sm text-muted-foreground">
                                Start typing to search...
                            </div>
                        )}
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}
