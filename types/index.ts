export type Severity = "critical" | "high" | "medium" | "low" | "info";
export type Status = "active" | "resolved" | "investigating" | "closed";

export interface KPIMetric {
    label: string;
    value: string | number;
    change: number;
    changeLabel: string;
    trend: "up" | "down" | "neutral";
}

export interface Incident {
    id: string;
    title: string;
    system: string;
    severity: Severity;
    status: Status;
    timestamp: string;
    assignee?: string;
}

export interface Threat {
    id: string;
    type: string;
    source: string;
    riskLevel: Severity;
    detectedAt: string;
    status: "blocked" | "monitored";
}

export interface ChartDataPoint {
    name: string;
    value: number;
    mobile?: number;
    desktop?: number;
    network?: number;
    [key: string]: string | number | undefined;
}

export interface NavItem {
    label: string;
    href: string;
    icon: React.ElementType;
}
