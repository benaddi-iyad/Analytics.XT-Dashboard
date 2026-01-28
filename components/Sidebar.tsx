"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BarChart2,
    FileText,
    Bell,
    Users,
    Settings,
    Shield,
    ChevronLeft,
    ChevronRight,
    LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/store/useDashboardStore";

const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Analytics", href: "/analytics", icon: BarChart2 },
    { label: "Alerts", href: "/alerts", icon: Bell },
    { label: "Reports", href: "/reports", icon: FileText },
    { label: "User Mgmt", href: "/users", icon: Users },
    { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const { sidebarOpen, toggleSidebar } = useDashboardStore();

    const sidebarVariants = {
        expanded: { width: "16rem" }, // w-64
        collapsed: { width: "5rem" }, // w-20
    };

    return (
        <motion.div
            initial={false}
            animate={sidebarOpen ? "expanded" : "collapsed"}
            variants={sidebarVariants}
            className="relative h-screen border-r border-white/10 bg-[#0B0F19] text-gray-300 flex flex-col z-20 shadow-2xl"
        >
            {/* Header */}
            <div className="flex h-20 items-center justify-between px-4 border-b border-white/5">
                <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                        <Shield size={20} />
                    </div>
                    <AnimatePresence>
                        {sidebarOpen && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="font-bold text-lg tracking-wide text-white"
                            >
                                ANALYTICS<span className="text-blue-500">.XT</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-24 z-30 rounded-full bg-blue-600 p-1.5 text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
                {sidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            </button>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={cn(
                                    "relative flex items-center gap-4 rounded-xl px-3.5 py-3 transition-all duration-300 group overflow-hidden",
                                    isActive
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {/* Active Indicator Line */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"
                                    />
                                )}

                                <Icon
                                    size={20}
                                    className={cn(
                                        "flex-shrink-0 transition-colors",
                                        isActive ? "text-blue-400" : "text-gray-400 group-hover:text-white"
                                    )}
                                />

                                <AnimatePresence>
                                    {sidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            className="whitespace-nowrap font-medium"
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/5">
                <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all">
                    <LogOut size={20} className="flex-shrink-0" />
                    <AnimatePresence>
                        {sidebarOpen && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="whitespace-nowrap font-medium overflow-hidden"
                            >
                                Sign Out
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>
        </motion.div>
    );
}
