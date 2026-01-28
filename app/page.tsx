"use client";

import { motion } from "framer-motion";
import { Download, SlidersHorizontal, Calendar } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { RevenueChart } from "@/components/Charts/RevenueChart";
import { RecentActivityTable } from "@/components/Tables/RecentActivityTable";
import { stats } from "@/lib/mockData";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold tracking-tight text-white"
                    >
                        Dashboard
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400"
                    >
                        Real-time overview of system performance and business metrics.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                >
                    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">
                        <Calendar size={16} />
                        <span>Today</span>
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">
                        <SlidersHorizontal size={16} />
                        <span>Filters</span>
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95">
                        <Download size={16} />
                        <span>Export</span>
                    </button>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <StatCard stat={stat} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-7">
                {/* Main Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="col-span-4 rounded-2xl border border-white/5 bg-[#0B0F19]/50 p-6 backdrop-blur-xl"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Revenue & Traffic</h3>
                        <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400 focus:outline-none">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <RevenueChart />
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="col-span-3 flex flex-col rounded-2xl border border-white/5 bg-[#0B0F19]/50 backdrop-blur-xl"
                >
                    <div className="flex items-center justify-between p-6 border-b border-white/5">
                        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                        <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
                    </div>
                    <RecentlyActivityTableWrapper />
                </motion.div>
            </div>
        </div>
    );
}

function RecentlyActivityTableWrapper() {
    return (
        <div className="flex-1 overflow-hidden">
            <RecentActivityTable />
        </div>
    );
}
