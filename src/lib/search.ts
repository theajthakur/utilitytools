import { categories, Category } from '@/data/categories'
import { tools, Tool } from '@/data/tools'

export interface SearchResult {
    type: 'category' | 'tool'
    item: Category | Tool
    score: number
    matches: string[]
}

export function searchItems(query: string): SearchResult[] {
    if (!query || query.trim().length === 0) return []

    const searchTerms = query.toLowerCase().trim().split(/\s+/)
    const results: SearchResult[] = []

    // Helper to calculate score
    const calculateScore = (text: string, terms: string[], weight: number): number => {
        const lowerText = text.toLowerCase()
        let score = 0
        terms.forEach(term => {
            if (lowerText === term) score += weight * 2 // Exact match
            else if (lowerText.includes(term)) score += weight // Partial match
        })
        return score
    }

    // Search Categories
    categories.forEach(category => {
        let score = 0
        const matches: string[] = []

        // Title match (High weight)
        const titleScore = calculateScore(category.title, searchTerms, 10)
        if (titleScore > 0) matches.push('Title')
        score += titleScore

        // Description match (Medium weight)
        const descScore = calculateScore(category.description, searchTerms, 5)
        if (descScore > 0) matches.push('Description')
        score += descScore

        // Keywords match (High weight)
        category.keywords.forEach(keyword => {
            const keywordScore = calculateScore(keyword, searchTerms, 8)
            if (keywordScore > 0) {
                score += keywordScore
                if (!matches.includes('Keyword')) matches.push('Keyword')
            }
        })

        if (score > 0) {
            results.push({
                type: 'category',
                item: category,
                score,
                matches
            })
        }
    })

    // Search Tools
    tools.forEach(tool => {
        let score = 0
        const matches: string[] = []

        // Title match
        const titleScore = calculateScore(tool.title, searchTerms, 10)
        if (titleScore > 0) matches.push('Title')
        score += titleScore

        // Description match
        const descScore = calculateScore(tool.description, searchTerms, 5)
        if (descScore > 0) matches.push('Description')
        score += descScore

        // Keywords match
        tool.keywords.forEach(keyword => {
            const keywordScore = calculateScore(keyword, searchTerms, 8)
            if (keywordScore > 0) {
                score += keywordScore
                if (!matches.includes('Keyword')) matches.push('Keyword')
            }
        })

        // Category match indirectly
        if (tool.categorySlug) {
            const category = categories.find(c => c.slug === tool.categorySlug)
            if (category) {
                const catScore = calculateScore(category.title, searchTerms, 2)
                if (catScore > 0) score += catScore
            }
        }

        if (score > 0) {
            results.push({
                type: 'tool',
                item: tool,
                score,
                matches
            })
        }
    })

    // Sort by score descending
    return results.sort((a, b) => b.score - a.score)
}
