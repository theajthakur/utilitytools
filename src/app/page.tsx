import React from 'react'
import { Hero } from './_components/Hero'
import { Features } from './_components/Features'

export default function page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <Features />
    </div>
  )
}
