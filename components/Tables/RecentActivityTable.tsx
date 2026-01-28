"use client";

import { motion } from "framer-motion";
import { recentActivity } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

export function RecentActivityTable() {
    return (
        <div className="w-full overflow-hidden">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-white/5 bg-white/[0.02] text-gray-400">
                    <tr>
                        <th className="px-6 py-4 font-medium">User</th>
                        <th className="px-6 py-4 font-medium">Action</th>
                        <th className="px-6 py-4 font-medium">Target</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium text-right">Time</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {recentActivity.map((log, index) => (
                        <motion.tr
                            key={log.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group hover:bg-white/[0.02] transition-colors"
                        >
                            <td className="px-6 py-4 font-medium text-white">{log.user}</td>
                            <td className="px-6 py-4 text-gray-300">{log.action}</td>
                            <td className="px-6 py-4 text-gray-400 font-mono text-xs">{log.target}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={cn(
                                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
                                        log.status === "success" && "border-green-500/20 bg-green-500/10 text-green-400",
                                        log.status === "warning" && "border-amber-500/20 bg-amber-500/10 text-amber-400",
                                        log.status === "error" && "border-red-500/20 bg-red-500/10 text-red-500"
                                    )}
                                >
                                    {log.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right text-gray-500">{log.timestamp}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
