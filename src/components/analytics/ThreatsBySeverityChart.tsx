"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { severity: "High", value: 180 },
  { severity: "Medium", value: 390 },
  { severity: "Low", value: 670 },
];

const COLORS = ["#ef4444", "#facc15", "#10b981"];

export function ThreatsBySeverityChart() {
  return (
    <div className="bg-background border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Threats by Severity</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="severity" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
