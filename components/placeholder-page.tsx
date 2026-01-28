import { Construction } from "lucide-react";

interface PlaceholderPageProps {
    title: string;
    description?: string;
}

export function PlaceholderPage({ title, description = "This module is currently under development." }: PlaceholderPageProps) {
    return (
        <div className="flex h-[60vh] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="mb-4 rounded-full bg-secondary p-4 text-muted-foreground">
                <Construction className="h-8 w-8" />
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}
