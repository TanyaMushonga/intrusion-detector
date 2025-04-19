import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function IncidentFilters() {
  return (
    <div className="flex space-x-4 mb-6">
      <Input placeholder="Search by incident ID" className="w-1/4" />

      <Select>
        <SelectTrigger className="w-1/4">
          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-1/4">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="resolved">Resolved</SelectItem>
          <SelectItem value="unresolved">Unresolved</SelectItem>
          <SelectItem value="investigating">Investigating</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-1/4">Apply Filters</Button>
    </div>
  );
}
