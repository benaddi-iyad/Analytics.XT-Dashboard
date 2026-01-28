"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ShieldAlert,
    Siren,
    Bell,
    Users,
    FileText,
    BarChart,
    Settings,
    ShieldCheck,
} from "lucide-react";

const navItems = [
    { label: "Overview", href: "/", icon: LayoutDashboard },
    { label: "Threats", href: "/threats", icon: ShieldAlert },
    { label: "Incidents", href: "/incidents", icon: Siren },
    { label: "Alerts", href: "/alerts", icon: Bell },
    { label: "Users", href: "/users", icon: Users },
    { label: "Logs", href: "/logs", icon: FileText },
    { label: "Reports", href: "/reports", icon: BarChart },
    { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col border-r border-border bg-card text-card-foreground">
            {/* Logo Area */}
            <div className="flex h-16 items-center border-b border-border px-6">
                <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                <span className="text-lg font-bold tracking-wide">CYBER<span className="text-primary">.XT</span></span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-primary/15 text-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "")} />
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer / User Info could go here if not in Navbar */}
            <div className="p-4 border-t border-border">
                <div className="rounded-md bg-secondary/50 p-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">System Status</p>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs text-green-500 font-medium">Operational</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
