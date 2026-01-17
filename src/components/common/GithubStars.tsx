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
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
        >
            <span className="flex items-center gap-1.5 text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                Star on GitHub
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="font-semibold">{stars}</span>
        </Link>
    );
}
