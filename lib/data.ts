import { KPIMetric, Incident, Threat, ChartDataPoint } from "@/types";

export const kpiData: KPIMetric[] = [
    {
        label: "Active Threats",
        value: "24",
        change: 12,
        changeLabel: "vs last hour",
        trend: "up",
    },
    {
        label: "Open Incidents",
        value: "7",
        change: -5,
        changeLabel: "vs yesterday",
        trend: "down",
    },
    {
        label: "Security Score",
        value: "84%",
        change: 2,
        changeLabel: "improved",
        trend: "up",
    },
    {
        label: "MTTR (Avg)",
        value: "45m",
        change: 0,
        changeLabel: "stable",
        trend: "neutral",
    },
];

export const incidentsData: Incident[] = [
    {
        id: "INC-2024-001",
        title: "Unauthorized Access Attempt",
        system: "Firewall Gateway A",
        severity: "high",
        status: "investigating",
        timestamp: "2024-02-14T10:30:00Z",
        assignee: "Alex S.",
    },
    {
        id: "INC-2024-002",
        title: "Malware Detected",
        system: "Workstation-402",
        severity: "critical",
        status: "active",
        timestamp: "2024-02-14T09:15:00Z",
        assignee: "Unassigned",
    },
    {
        id: "INC-2024-003",
        title: "Data Exfiltration Flag",
        system: "Database Server Primary",
        severity: "critical",
        status: "resolved",
        timestamp: "2024-02-13T22:45:00Z",
        assignee: "Sarah K.",
    },
    {
        id: "INC-2024-004",
        title: "DDoS Pattern Detected",
        system: "Load Balancer",
        severity: "medium",
        status: "closed",
        timestamp: "2024-02-13T18:20:00Z",
        assignee: "System",
    },
    {
        id: "INC-2024-005",
        title: "Suspicious Login Location",
        system: "VPN Node EU",
        severity: "low",
        status: "closed",
        timestamp: "2024-02-13T14:10:00Z",
        assignee: "Auto-Bot",
    },
];

export const incidentTrendData: ChartDataPoint[] = [
    { name: "00:00", value: 4 },
    { name: "04:00", value: 2 },
    { name: "08:00", value: 12 },
    { name: "12:00", value: 18 },
    { name: "16:00", value: 14 },
    { name: "20:00", value: 8 },
    { name: "23:59", value: 5 },
];

export const alertsBySeverityData: ChartDataPoint[] = [
    { name: "Critical", value: 12, fill: "#ef4444" },
    { name: "High", value: 25, fill: "#f97316" },
    { name: "Medium", value: 45, fill: "#eab308" },
    { name: "Low", value: 80, fill: "#3b82f6" },
];

export const threatTrendsData: ChartDataPoint[] = [
    { name: "Mon", mobile: 4000, desktop: 2400 },
    { name: "Tue", mobile: 3000, desktop: 1398 },
    { name: "Wed", mobile: 2000, desktop: 9800 },
    { name: "Thu", mobile: 2780, desktop: 3908 },
    { name: "Fri", mobile: 1890, desktop: 4800 },
    { name: "Sat", mobile: 2390, desktop: 3800 },
    { name: "Sun", mobile: 3490, desktop: 4300 },
];

export const attackVectorsData: ChartDataPoint[] = [
    { name: "Phishing", value: 45, fill: "#8b5cf6" },
    { name: "Malware", value: 25, fill: "#ec4899" },
    { name: "DDoS", value: 15, fill: "#ef4444" },
    { name: "Injection", value: 10, fill: "#f59e0b" },
    { name: "Other", value: 5, fill: "#64748b" },
];
