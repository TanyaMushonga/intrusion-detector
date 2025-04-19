"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Threat } from "@/types";
import { useState } from "react";
import { ThreatLogDetailSheet } from "./ThreatLogDetailSheet";

const dummyThreats: Threat[] = [
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
  // add more for table feel
];

export function ThreatLogTable() {
  const [selected, setSelected] = useState<Threat | null>(null);

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Source IP</TableHead>
              <TableHead>Destination IP</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyThreats.map((threat, i) => (
              <TableRow
                key={i}
                className="cursor-pointer hover:bg-muted"
                onClick={() => setSelected(threat)}
              >
                <TableCell>{threat.timestamp}</TableCell>
                <TableCell>{threat.type}</TableCell>
                <TableCell>{threat.sourceIP}</TableCell>
                <TableCell>{threat.destinationIP}</TableCell>
                <TableCell>{threat.severity}</TableCell>
                <TableCell>{threat.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selected && (
        <ThreatLogDetailSheet
          threat={selected}
          open={!!selected}
          onOpenChange={() => setSelected(null)}
        />
      )}
    </>
  );
}
