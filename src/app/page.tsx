import React from 'react'
import { ArrowRight, Code2, Calculator, RefreshCcw, Command, Zap, Search } from 'lucide-react'

export default function page() {
  const tools = [
    {
      title: "Developer Tools",
      description: "Formatters, validators, and generators for your daily workflow.",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      href: "#"
    },
    {
      title: "Calculators",
      description: "Complex math and financial calculations made simple.",
      icon: <Calculator className="h-6 w-6 text-primary" />,
      href: "#"
    },
    {
      title: "Converters",
      description: "Convert between various file formats and units instantly.",
      icon: <RefreshCcw className="h-6 w-6 text-primary" />,
      href: "#"
    },
    {
      title: "Command Palette",
      description: "Quickly find and execute any tool with powerful search.",
      icon: <Command className="h-6 w-6 text-primary" />,
      href: "#"
    },
    {
      title: "Instant Results",
      description: "Get answers immediately without page reloads.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      href: "#"
    },
    {
      title: "Smart Search",
      description: "Find exactly what you need with semantic search.",
      icon: <Search className="h-6 w-6 text-primary" />,
      href: "#"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 text-center min-h-[80vh] items-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
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

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Explore Tools
          </button>
          <a href="https://github.com/theajthakur/utilitytools" target="_blank">
            <button className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              GitHub Repo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 inline-block rounded-lg bg-secondary p-3">
                {tool.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {tool.title}
              </h3>
              <p className="text-muted-foreground">
                {tool.description}
              </p>
              <div className="absolute inset-0 border-2 border-transparent transition-colors group-hover:border-primary/5 pointer-events-none rounded-lg" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
