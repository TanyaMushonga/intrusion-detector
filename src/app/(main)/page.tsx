import { SectionCards } from "@/components/section-cards";

import ThreatAreaChart from "@/components/chart-area-interactive";
import LatestThreatsTable from "@/components/latestThreatsTable";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ThreatAreaChart />
        </div>
        <div className="px-4 lg:px-6">
          <LatestThreatsTable />
        </div>
      </div>
    </>
  );
}
