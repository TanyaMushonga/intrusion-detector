"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const threatData = [
  { date: "2024-04-01", phishing: 5, malware: 8 },
  { date: "2024-04-02", phishing: 3, malware: 4 },
  { date: "2024-04-03", phishing: 6, malware: 7 },
  { date: "2024-04-04", phishing: 2, malware: 6 },
  { date: "2024-04-05", phishing: 8, malware: 10 },
  { date: "2024-04-06", phishing: 4, malware: 5 },
  { date: "2024-04-07", phishing: 7, malware: 9 },
  { date: "2024-04-08", phishing: 9, malware: 6 },
  { date: "2024-04-09", phishing: 6, malware: 11 },
  { date: "2024-04-10", phishing: 2, malware: 4 },
  { date: "2024-04-11", phishing: 4, malware: 5 },
  { date: "2024-04-12", phishing: 3, malware: 7 },
  { date: "2024-04-13", phishing: 5, malware: 6 },
  { date: "2024-04-14", phishing: 8, malware: 12 },
  { date: "2024-04-15", phishing: 7, malware: 10 },
  { date: "2024-04-16", phishing: 4, malware: 9 },
  { date: "2024-04-17", phishing: 6, malware: 7 },
  { date: "2024-04-18", phishing: 9, malware: 13 },
  { date: "2024-04-19", phishing: 10, malware: 14 },
  { date: "2024-04-20", phishing: 5, malware: 6 },
  { date: "2024-04-21", phishing: 6, malware: 8 },
  { date: "2024-04-22", phishing: 8, malware: 11 },
  { date: "2024-04-23", phishing: 7, malware: 9 },
  { date: "2024-04-24", phishing: 4, malware: 5 },
  { date: "2024-04-25", phishing: 3, malware: 6 },
  { date: "2024-04-26", phishing: 2, malware: 4 },
  { date: "2024-04-27", phishing: 5, malware: 7 },
  { date: "2024-04-28", phishing: 6, malware: 8 },
  { date: "2024-04-29", phishing: 8, malware: 10 },
  { date: "2024-04-30", phishing: 10, malware: 12 },
];

export default function ThreatAreaChart() {
  const [range, setRange] = React.useState("30d");

  const filteredData = React.useMemo(() => {
    const days =
      {
        "7d": 7,
        "30d": 30,
        "90d": 90,
      }[range] || 30;

    return threatData.slice(-days);
  }, [range]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-bold">Threat Detections</CardTitle>
          <CardDescription className="text-muted-foreground">
            Breakdown of phishing and malware over time.
          </CardDescription>
        </div>
        <ToggleGroup
          type="single"
          value={range}
          onValueChange={(val) => setRange(val)}
          className="flex"
        >
          <ToggleGroupItem value="7d">7d</ToggleGroupItem>
          <ToggleGroupItem value="30d">30d</ToggleGroupItem>
          <ToggleGroupItem value="90d">90d</ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent className="p-0 pl-2 pb-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="colorPhishing" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMalware" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              stroke="var(--foreground)"
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12 }}
              stroke="var(--foreground)"
            />
            <CartesianGrid
              strokeDasharray="3 3"
              strokeOpacity={0.2}
              stroke="var(--foreground)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            />
            <Area
              type="monotone"
              dataKey="phishing"
              stroke="var(--chart-1)"
              fillOpacity={1}
              fill="url(#colorPhishing)"
            />
            <Area
              type="monotone"
              dataKey="malware"
              stroke="var(--chart-2)"
              fillOpacity={1}
              fill="url(#colorMalware)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
