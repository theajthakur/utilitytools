import Link from "next/link";
import { Star } from "lucide-react";

async function getStarCount() {
    try {
        const res = await fetch("https://api.github.com/repos/theajthakur/utilitytools", {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) return null;

        const data = await res.json();
        return data.stargazers_count;
    } catch (error) {
        console.error("Failed to fetch github stars:", error);
        return null;
    }
}

export async function GithubStars() {
    const stars = await getStarCount();

    // Even if we fail to fetch, we can still show the link without the count or return null
    // Let's return the link but maybe hide the count if null, or just not render the specific count part
    if (stars === null) return null;

    return (
        <Link
            href="https://github.com/theajthakur/utilitytools"
            target="_blank"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                Star on GitHub
            </span>
            <span className="h-4 w-px bg-border mx-1" />
            <span className="font-semibold">{stars}</span>
        </Link>
    );
}
