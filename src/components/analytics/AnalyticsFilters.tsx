import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AnalyticsFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <Input type="date" />
      <Input type="date" />
      <Button variant="outline">Apply Filters</Button>
    </div>
  );
}
