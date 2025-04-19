import { AlertsHeader } from "@/components/alerts/AlertsHeader";
import { AlertsStats } from "@/components/alerts/AlertsStats";
import { AlertsChart } from "@/components/alerts/AlertsChart";
import { AlertsFeed } from "@/components/alerts/AlertsFeed";

export default function RealTimeAlertsPage() {
  return (
    <main className="p-6 space-y-6">
      <AlertsHeader />
      <AlertsStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AlertsFeed />
        <AlertsChart />
      </div>
    </main>
  );
}
