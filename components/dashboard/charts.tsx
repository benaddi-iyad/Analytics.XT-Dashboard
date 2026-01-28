"use client";

import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar,
    PieChart, Pie, Cell, Legend
} from 'recharts';
import { incidentTrendData, alertsBySeverityData, threatTrendsData, attackVectorsData } from "@/lib/data";

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border border-border bg-popover p-2 shadow-sm">
                <p className="text-sm font-medium text-popover-foreground">{label}</p>
                <p className="text-sm text-primary">
                    {payload[0].value}
                </p>
            </div>
        );
    }
    return null;
};

export function IncidentTrendsChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={incidentTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#0f172a" }}
                    activeDot={{ r: 6, fill: "#3b82f6" }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}

export function ThreatTrendsChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={threatTrendsData}>
                <defs>
                    <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                    type="monotone"
                    dataKey="mobile"
                    name="External"
                    stackId="1"
                    stroke="#8b5cf6"
                    fill="url(#colorMobile)"
                />
                <Area
                    type="monotone"
                    dataKey="desktop"
                    name="Internal"
                    stackId="1"
                    stroke="#10b981"
                    fill="url(#colorDesktop)"
                />
                <Legend verticalAlign="top" height={36} iconType="circle" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export function SeverityBarChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={alertsBySeverityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis
                    dataKey="name"
                    type="category"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    width={60}
                />
                <Tooltip
                    cursor={{ fill: '#1e293b' }}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {alertsBySeverityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export function AttackVectorsChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={attackVectorsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {attackVectorsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} stroke="rgba(0,0,0,0)" />
                    ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
        </ResponsiveContainer>
    );
}
