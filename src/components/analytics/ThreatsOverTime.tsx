"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Apr 1", threats: 15 },
  { date: "Apr 2", threats: 27 },
  { date: "Apr 3", threats: 22 },
  { date: "Apr 4", threats: 30 },
  { date: "Apr 5", threats: 35 },
  { date: "Apr 6", threats: 20 },
  { date: "Apr 7", threats: 28 },
];

export function ThreatsOverTime() {
  return (
    <div className="bg-background border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Threats Over Time</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="var(--foreground)" fontSize={12} />
          <YAxis stroke="var(--foreground)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          />
          <Line
            type="monotone"
            dataKey="threats"
            stroke="var(--chart-2)"
            strokeWidth={2}
            dot={{ fill: "var(--chart-2)", strokeWidth: 2 }}
            activeDot={{ r: 6, fill: "var(--chart-2)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
