import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { KPIMetric } from "@/types";

interface KPICardProps {
    data: KPIMetric;
}

export function KPICard({ data }: KPICardProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">{data.label}</h3>
                {/* Optional Icon could go here */}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">{data.value}</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
                <div
                    className={cn(
                        "flex items-center text-xs font-medium px-2 py-0.5 rounded-full",
                        data.trend === "up" && "text-green-500 bg-green-500/10",
                        data.trend === "down" && "text-red-500 bg-red-500/10",
                        data.trend === "neutral" && "text-muted-foreground bg-muted"
                    )}
                >
                    {data.trend === "up" && <ArrowUpRight className="mr-1 h-3 w-3" />}
                    {data.trend === "down" && <ArrowDownRight className="mr-1 h-3 w-3" />}
                    {data.trend === "neutral" && <Minus className="mr-1 h-3 w-3" />}
                    {Math.abs(data.change)}%
                </div>
                <span className="text-xs text-muted-foreground">{data.changeLabel}</span>
            </div>
        </div>
    );
}
