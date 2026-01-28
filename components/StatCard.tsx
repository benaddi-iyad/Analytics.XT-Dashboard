"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Minus, MoreVertical } from "lucide-react";
import { DashboardStat } from "@/lib/mockData";

export function StatCard({ stat }: { stat: DashboardStat }) {
    const Icon = stat.icon;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-xl backdrop-blur-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold tracking-tight text-white">
                            {stat.value}
                        </h3>
                    </div>
                </div>
                <div className={`rounded-xl bg-white/5 p-3 ${stat.color} shadow-lg ring-1 ring-white/10`}>
                    <Icon size={20} />
                </div>
            </div>

            <div className="relative z-10 mt-4 flex items-center gap-2">
                <div className={`flex items-center text-xs font-semibold ${stat.trend === 'up' ? 'text-green-400' : stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
                    {stat.trend === 'up' && <ArrowUpRight className="mr-1 h-3 w-3" />}
                    {stat.trend === 'down' && <ArrowDownRight className="mr-1 h-3 w-3" />}
                    {Math.abs(stat.change)}%
                </div>
                <span className="text-xs text-gray-500">vs last period</span>
            </div>
        </motion.div>
    );
}
