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

export function CommandSearch({
    open,
    setOpen,
}: {
    open: boolean
    setOpen: (v: boolean) => void
}) {
    const router = useRouter()

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

    const tools = [
        { name: "JSON Formatter", path: "/json-formatter" },
        { name: "Base64 Encode / Decode", path: "/base64" },
        { name: "Case Converter", path: "/case-converter" },
    ]

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0">
                <DialogTitle />
                <Command>
                    <CommandInput placeholder="Search tools..." />
                    <CommandList>
                        <CommandEmpty>No tools found.</CommandEmpty>

                        <CommandGroup heading="Tools">
                            {tools.map((tool) => (
                                <CommandItem
                                    key={tool.path}
                                    onSelect={() => {
                                        router.push(tool.path)
                                        setOpen(false)
                                    }}
                                >
                                    <Search className="mr-2 h-4 w-4" />
                                    {tool.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}
