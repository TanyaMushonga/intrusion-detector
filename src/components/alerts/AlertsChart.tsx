"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const data = [
  { time: "00:00", threats: 1 },
  { time: "02:00", threats: 3 },
  { time: "04:00", threats: 6 },
  { time: "06:00", threats: 4 },
  { time: "08:00", threats: 7 },
  { time: "10:00", threats: 10 },
];

export function AlertsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>Threats Over Time</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="threats"
              stroke="#f43f5e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
