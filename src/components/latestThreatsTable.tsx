"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Fake 15 threat records
const threatData = [
  {
    timestamp: "2025-04-18 10:34:22",
    sourceIP: "192.168.1.24",
    destinationIP: "10.0.0.5",
    type: "Brute Force Attempt",
    severity: "High",
    status: "Unresolved",
  },
  {
    timestamp: "2025-04-18 09:20:45",
    sourceIP: "8.8.8.8",
    destinationIP: "10.0.0.9",
    type: "Port Scanning",
    severity: "Medium",
    status: "Investigating",
  },
  {
    timestamp: "2025-04-18 08:50:12",
    sourceIP: "192.168.1.15",
    destinationIP: "10.0.0.12",
    type: "Suspicious Login",
    severity: "Low",
    status: "Resolved",
  },
  {
    timestamp: "2025-04-18 07:35:50",
    sourceIP: "203.0.113.100",
    destinationIP: "10.0.0.2",
    type: "Malware Activity",
    severity: "High",
    status: "Escalated",
  },
  {
    timestamp: "2025-04-17 22:44:10",
    sourceIP: "10.1.1.3",
    destinationIP: "10.0.0.15",
    type: "Unauthorized Access",
    severity: "High",
    status: "Unresolved",
  },
  {
    timestamp: "2025-04-17 20:19:31",
    sourceIP: "172.16.0.2",
    destinationIP: "10.0.0.18",
    type: "SQL Injection",
    severity: "High",
    status: "Escalated",
  },
  {
    timestamp: "2025-04-17 18:59:55",
    sourceIP: "192.168.100.100",
    destinationIP: "10.0.0.20",
    type: "Ransomware Attempt",
    severity: "High",
    status: "Investigating",
  },
  {
    timestamp: "2025-04-17 17:21:43",
    sourceIP: "198.51.100.50",
    destinationIP: "10.0.0.22",
    type: "Credential Stuffing",
    severity: "Medium",
    status: "Unresolved",
  },
  {
    timestamp: "2025-04-17 16:05:37",
    sourceIP: "203.0.113.120",
    destinationIP: "10.0.0.25",
    type: "XSS Attempt",
    severity: "Low",
    status: "Resolved",
  },
  {
    timestamp: "2025-04-17 14:48:12",
    sourceIP: "10.2.2.2",
    destinationIP: "10.0.0.28",
    type: "DDoS",
    severity: "High",
    status: "Escalated",
  },
  {
    timestamp: "2025-04-17 13:33:27",
    sourceIP: "8.8.4.4",
    destinationIP: "10.0.0.30",
    type: "Remote Code Execution",
    severity: "High",
    status: "Unresolved",
  },
  {
    timestamp: "2025-04-17 12:10:01",
    sourceIP: "192.0.2.1",
    destinationIP: "10.0.0.33",
    type: "Phishing Attempt",
    severity: "Medium",
    status: "Investigating",
  },
  {
    timestamp: "2025-04-17 10:55:14",
    sourceIP: "172.16.0.5",
    destinationIP: "10.0.0.36",
    type: "Spyware Alert",
    severity: "Low",
    status: "Resolved",
  },
  {
    timestamp: "2025-04-17 09:40:39",
    sourceIP: "198.51.100.75",
    destinationIP: "10.0.0.40",
    type: "Data Exfiltration",
    severity: "High",
    status: "Escalated",
  },
  {
    timestamp: "2025-04-17 08:12:17",
    sourceIP: "203.0.113.200",
    destinationIP: "10.0.0.44",
    type: "Backdoor Activity",
    severity: "High",
    status: "Unresolved",
  },
];

// Column definitions
const columns: ColumnDef<(typeof threatData)[number]>[] = [
  {
    header: "Timestamp",
    accessorKey: "timestamp",
  },
  {
    header: "Source IP",
    accessorKey: "sourceIP",
  },
  {
    header: "Destination IP",
    accessorKey: "destinationIP",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Severity",
    accessorKey: "severity",
    cell: ({ row }) => {
      const severity = row.getValue("severity") as string;
      const color =
        severity === "High"
          ? "destructive"
          : severity === "Medium"
          ? "outline"
          : "secondary";
      return <Badge variant={color}>{severity}</Badge>;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const color =
        status === "Unresolved"
          ? "destructive"
          : status === "Escalated"
          ? "secondary"
          : status === "Investigating"
          ? "outline"
          : "default";
      return <Badge variant={color}>{status}</Badge>;
    },
  },
];

export default function LatestThreatsTable() {
  const table = useReactTable({
    data: threatData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Threats</CardTitle>
      </CardHeader>
      <CardContent className="overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
