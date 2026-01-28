"use client";

import { Bell, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
            {/* Search Bar */}
            <div className="flex flex-1 items-center">
                <div className="relative w-96">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search IPs, domains, hashes..."
                        className="w-full rounded-md border border-input bg-secondary py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive border border-card"></span>
                </button>

                <div className="h-6 w-px bg-border"></div>

                <button className="flex items-center gap-3 rounded-full pl-2 pr-4 transition-colors hover:bg-secondary/50">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <User className="h-4 w-4" />
                    </div>
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-medium leading-none">Admin User</p>
                        <p className="text-xs text-muted-foreground">SOC Analyst</p>
                    </div>
                </button>
            </div>
        </header>
    );
}
