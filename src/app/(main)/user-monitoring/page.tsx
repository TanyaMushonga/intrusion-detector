import { UserMonitoringHeader } from "@/components/user-monitoring/UserMonitoringHeader";
import { AccountActivitySummary } from "@/components/user-monitoring/AccountActivitySummary";
import { SuspiciousActivitiesTable } from "@/components/user-monitoring/SuspiciousActivitiesTable";
import { ActivityDetailsSheet } from "@/components/user-monitoring/ActivityDetailsSheet";
import { UserSearchBar } from "@/components/user-monitoring/UserSearchBar";
import { ActivityFilter } from "@/components/user-monitoring/ActivityFilter";

export default function UserMonitoringPage() {
  return (
    <main className="p-6 space-y-6">
      <UserMonitoringHeader />
      <UserSearchBar />
      <ActivityFilter />
      <AccountActivitySummary />
      <SuspiciousActivitiesTable />
      <ActivityDetailsSheet />
    </main>
  );
}
