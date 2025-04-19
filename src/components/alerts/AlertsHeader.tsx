import { Button } from "@/components/ui/button";

export function AlertsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-semibold">Real-Time Threat Alerts</h2>
        <p className="text-muted-foreground text-sm">
          Monitoring ongoing system threats in real time
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">Pause</Button>
        <Button variant="outline">Export</Button>
      </div>
    </div>
  );
}
