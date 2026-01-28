import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 rounded-full bg-red-500/10 p-6 text-red-500">
                <AlertTriangle className="h-12 w-12" />
            </div>
            <h2 className="mb-2 text-2xl font-bold">Page Not Found</h2>
            <p className="mb-6 max-w-md text-muted-foreground">
                The requested security module is currently unavailable or you do not have permission to access it.
            </p>
            <Link
                href="/"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
                Return to Dashboard
            </Link>
        </div>
    );
}
