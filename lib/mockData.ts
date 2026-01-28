import { LucideIcon, ShieldAlert, UserCheck, Activity, DollarSign, Globe, Lock, Server, Wifi } from "lucide-react";

export interface DashboardStat {
    id: string;
    label: string;
    value: string;
    change: number;
    trend: "up" | "down" | "neutral";
    icon: any;
    color: string;
}

export interface ActivityLog {
    id: string;
    user: string;
    action: string;
    target: string;
    timestamp: string;
    status: "success" | "warning" | "error";
}

export interface ChartData {
    name: string;
    [key: string]: string | number;
}

export const stats: DashboardStat[] = [
    {
        id: "1",
        label: "Total Revenue",
        value: "$2.4M",
        change: 12.5,
        trend: "up",
        icon: DollarSign,
        color: "text-emerald-400",
    },
    {
        id: "2",
        label: "Active Threats",
        value: "24",
        change: -5.2,
        trend: "down",
        icon: ShieldAlert,
        color: "text-rose-500",
    },
    {
        id: "3",
        label: "System Uptime",
        value: "99.99%",
        change: 0.01,
        trend: "up",
        icon: Activity,
        color: "text-blue-400",
    },
    {
        id: "4",
        label: "Active Users",
        value: "12,450",
        change: 8.1,
        trend: "up",
        icon: UserCheck,
        color: "text-amber-400",
    },
];

export const revenueData: ChartData[] = [
    { name: "Jan", revenue: 4000, profit: 2400 },
    { name: "Feb", revenue: 3000, profit: 1398 },
    { name: "Mar", revenue: 2000, profit: 9800 },
    { name: "Apr", revenue: 2780, profit: 3908 },
    { name: "May", revenue: 1890, profit: 4800 },
    { name: "Jun", revenue: 2390, profit: 3800 },
    { name: "Jul", revenue: 3490, profit: 4300 },
];

export const trafficData: ChartData[] = [
    { name: "00:00", mobile: 400, desktop: 240 },
    { name: "04:00", mobile: 300, desktop: 139 },
    { name: "08:00", mobile: 200, desktop: 980 },
    { name: "12:00", mobile: 278, desktop: 390 },
    { name: "16:00", mobile: 189, desktop: 480 },
    { name: "20:00", mobile: 239, desktop: 380 },
    { name: "23:59", mobile: 349, desktop: 430 },
];

export const recentActivity: ActivityLog[] = [
    {
        id: "log-1",
        user: "Admin",
        action: "Updated Firewall Rules",
        target: "Gateway-01",
        timestamp: "2 mins ago",
        status: "success",
    },
    {
        id: "log-2",
        user: "System",
        action: "Blocked Suspicious IP",
        target: "192.168.1.45",
        timestamp: "5 mins ago",
        status: "warning",
    },
    {
        id: "log-3",
        user: "User_Dave",
        action: "Failed Login Attempt",
        target: "Auth Service",
        timestamp: "12 mins ago",
        status: "error",
    },
    {
        id: "log-4",
        user: "System",
        action: "Backup Completed",
        target: "DB-Share-02",
        timestamp: "1 hour ago",
        status: "success",
    },
    {
        id: "log-5",
        user: "Admin",
        action: "User Created",
        target: "Sarah Connor",
        timestamp: "2 hours ago",
        status: "success",
    },
];

export const alertsData = [
    { id: 1, type: "Critical", message: "High CPU Usage on Server-A", time: "10:42 AM" },
    { id: 2, type: "Warning", message: "Disk space running low (85%)", time: "10:30 AM" },
    { id: 3, type: "Info", message: "Scheduled maintenance in 24h", time: "09:00 AM" },
];
