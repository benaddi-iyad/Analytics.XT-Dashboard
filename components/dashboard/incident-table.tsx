"use client";

import { incidentsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

export function RecentIncidentsTable() {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground">
            <div className="border-b border-border p-4 flex items-center justify-between">
                <h3 className="font-semibold">Recent Incidents</h3>
                <button className="text-xs text-primary hover:underline">View All</button>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-secondary/50 text-muted-foreground">
                        <tr>
                            <th className="px-4 py-3 font-medium">ID</th>
                            <th className="px-4 py-3 font-medium">Title</th>
                            <th className="px-4 py-3 font-medium">System</th>
                            <th className="px-4 py-3 font-medium">Severity</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="text-right px-4 py-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {incidentsData.map((incident) => (
                            <tr key={incident.id} className="group hover:bg-muted/50 transition-colors">
                                <td className="px-4 py-3 font-medium">{incident.id}</td>
                                <td className="px-4 py-3">{incident.title}</td>
                                <td className="px-4 py-3 text-muted-foreground">{incident.system}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={cn(
                                            "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                                            incident.severity === "critical" && "bg-red-500/10 text-red-500",
                                            incident.severity === "high" && "bg-orange-500/10 text-orange-500",
                                            incident.severity === "medium" && "bg-yellow-500/10 text-yellow-500",
                                            incident.severity === "low" && "bg-blue-500/10 text-blue-500"
                                        )}
                                    >
                                        {incident.severity}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={cn(
                                        "text-xs capitalize",
                                        incident.status === 'active' ? "text-red-400" : "text-muted-foreground"
                                    )}>
                                        {incident.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button className="rounded px-2 py-1 hover:bg-muted text-muted-foreground hover:text-foreground">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
