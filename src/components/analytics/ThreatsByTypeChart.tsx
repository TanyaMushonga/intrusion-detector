"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { type: "Phishing", count: 320 },
  { type: "Brute Force", count: 180 },
  { type: "Account Hijack", count: 95 },
  { type: "SQL Injection", count: 60 },
  { type: "Malware", count: 43 },
];

export function ThreatsByTypeChart() {
  return (
    <div className="bg-background border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Threats by Type</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <XAxis 
            dataKey="type" 
            stroke="var(--foreground)"
            fontSize={12}
          />
          <YAxis 
            stroke="var(--foreground)"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)'
            }}
          />
          <Bar 
            dataKey="count" 
            fill="var(--chart-2)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}