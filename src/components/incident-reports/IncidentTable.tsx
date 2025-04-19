import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const dummyIncidents = [
  {
    id: "INC001",
    timestamp: "2025-04-18 10:34:22",
    severity: "High",
    status: "Unresolved",
    affectedSystem: "Firewall",
    description: "Brute force attempt detected",
  },
  {
    id: "INC002",
    timestamp: "2025-04-18 09:20:45",
    severity: "Medium",
    status: "Investigating",
    affectedSystem: "Web Server",
    description: "Port scanning detected",
  },
  {
    id: "INC003",
    timestamp: "2025-04-18 08:50:12",
    severity: "Low",
    status: "Resolved",
    affectedSystem: "Database",
    description: "Suspicious login attempt",
  },
  {
    id: "INC004",
    timestamp: "2025-04-18 07:35:50",
    severity: "High",
    status: "Escalated",
    affectedSystem: "Mail Server",
    description: "Malware detected",
  },
];

export function IncidentTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Incident ID</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Affected System</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyIncidents.map((incident) => (
          <TableRow key={incident.id}>
            <TableCell>{incident.id}</TableCell>
            <TableCell>{incident.timestamp}</TableCell>
            <TableCell>
              <Badge
                variant={incident.severity === "High" ? "destructive" : "outline"}
              >
                {incident.severity}
              </Badge>
            </TableCell>
            <TableCell>{incident.status}</TableCell>
            <TableCell>{incident.affectedSystem}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
