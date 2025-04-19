import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export function ActivityFilter() {
  return (
    <div className="flex gap-4 mb-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Filter by activity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="failed_login">Failed Login</SelectItem>
          <SelectItem value="suspicious_transfer">Suspicious Transfer</SelectItem>
          <SelectItem value="email_change">Email Change</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="unresolved">Unresolved</SelectItem>
          <SelectItem value="investigating">Investigating</SelectItem>
          <SelectItem value="resolved">Resolved</SelectItem>
          <SelectItem value="escalated">Escalated</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}