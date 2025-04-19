"use client";
import { useState } from "react";
import { IncidentFilters } from "@/components/incident-reports/IncidentFilters";
import { IncidentTable } from "@/components/incident-reports/IncidentTable";
import { IncidentDetailsSheet } from "@/components/incident-reports/IncidentDetailsSheet";

export default function IncidentReportPage() {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(
    null
  );
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  console.log("IncidentReportPage", selectedIncident);
  interface Incident {
    id: string;
    title: string;
    description: string;
    [key: string]: string | number | boolean;
  }

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setSelectedIncident(null);
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Incident Reports</h1>
      <IncidentFilters />
      <IncidentTable />
      <IncidentDetailsSheet isOpen={isSheetOpen} onClose={handleCloseSheet} />
    </main>
  );
}
