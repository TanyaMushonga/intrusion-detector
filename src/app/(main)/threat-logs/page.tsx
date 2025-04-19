import { ThreatLogHeader } from "@/components/threat-log/ThreatLogHeader";
import { ThreatLogFilters } from "@/components/threat-log/ThreatLogFilters";
import { ThreatLogTable } from "@/components/threat-log/ThreatLogTable";

export default function ThreatLogPage() {
  return (
    <main className="p-6 space-y-6">
      <ThreatLogHeader />
      <ThreatLogFilters />
      <ThreatLogTable />
    </main>
  );
}
