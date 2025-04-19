import { Threat } from "@/types";
import { AlertCard } from "./AlertCard";

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
  // add more if needed
];

export function AlertsFeed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dummyThreats.map((threat, index) => (
        <AlertCard key={index} threat={threat} />
      ))}
    </div>
  );
}
