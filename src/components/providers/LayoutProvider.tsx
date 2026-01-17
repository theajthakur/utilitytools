import React from 'react'
import { ThemeProvider } from "next-themes"
import { Navbar } from '../common/Navbar'
export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <Navbar />
            <div className='mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6'>
                {children}
            </div>
        </ThemeProvider>
    )
}
