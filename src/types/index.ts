export interface Threat {
  timestamp: string;
  sourceIP: string;
  destinationIP: string;
  type: string;
  severity: "High" | "Medium" | "Low";
  status: "Unresolved" | "Investigating" | "Resolved" | "Escalated";
}
