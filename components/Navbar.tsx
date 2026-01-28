"use client";

import { Bell, Search, User, Menu } from "lucide-react";
import { useDashboardStore } from "@/store/useDashboardStore";

export function Navbar() {
    const { toggleSidebar } = useDashboardStore();

    return (
        <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-white/10 bg-[#0B0F19]/80 px-6 backdrop-blur-xl">
            {/* Left: Mobile Toggle & Search */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="rounded-lg p-2 text-gray-400 hover:bg-white/5 lg:hidden"
                >
                    <Menu size={20} />
                </button>

                <div className="relative hidden w-96 md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Global search (Ctrl+M)..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-gray-200 placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative rounded-full p-2.5 text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0B0F19]"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pb-1 pl-1 pr-4 pt-1 hover:bg-white/10 cursor-pointer transition-colors">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px]">
                        <div className="h-full w-full rounded-full bg-[#0B0F19] flex items-center justify-center">
                            <User size={14} className="text-white" />
                        </div>
                    </div>
                    <div className="hidden text-left md:block">
                        <p className="text-xs font-semibold text-white">Benaddi-Iyad</p>
                        <p className="text-[10px] text-gray-400">SysAdmin</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
