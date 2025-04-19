import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader";
import { ThreatOverviewCards } from "@/components/analytics/ThreatOverviewCards";
import { ThreatsByTypeChart } from "@/components/analytics/ThreatsByTypeChart";
import { ThreatsBySeverityChart } from "@/components/analytics/ThreatsBySeverityChart";
import { ThreatsOverTime } from "@/components/analytics/ThreatsOverTime";
import { MostTargetedAccounts } from "@/components/analytics/MostTargetedAccounts";
import { SuspiciousSourceIPs } from "@/components/analytics/SuspiciousSourceIPs";
import { AnalyticsFilters } from "@/components/analytics/AnalyticsFilters";

export default function AnalyticsPage() {
  return (
    <main className="p-6 space-y-6">
      <AnalyticsHeader />
      <AnalyticsFilters />
      <ThreatOverviewCards />
      <div className="grid md:grid-cols-2 gap-4">
        <ThreatsByTypeChart />
        <ThreatsBySeverityChart />
      </div>
      <ThreatsOverTime />
      <div className="grid md:grid-cols-2 gap-4">
        <MostTargetedAccounts />
        <SuspiciousSourceIPs />
      </div>
    </main>
  );
}
