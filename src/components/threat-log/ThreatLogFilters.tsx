"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ThreatLogFilters() {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Unresolved">Unresolved</SelectItem>
          <SelectItem value="Resolved">Resolved</SelectItem>
          <SelectItem value="Investigating">Investigating</SelectItem>
        </SelectContent>
      </Select>

      <Input type="date" className="w-[180px]" />
      <Input type="date" className="w-[180px]" />
      <Button variant="secondary">Filter</Button>
    </div>
  );
}
