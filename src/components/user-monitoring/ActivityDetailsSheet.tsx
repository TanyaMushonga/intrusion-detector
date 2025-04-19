import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function ActivityDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Activity Details</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Activity Details</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 px-5">
          <p>
            <strong>Account:</strong> Acc#04324129
          </p>
          <p>
            <strong>Activity:</strong> Multiple failed login attempts
          </p>
          <p>
            <strong>Timestamp:</strong> 2025-04-18 10:34:22
          </p>
          <p>
            <strong>Status:</strong> Investigating
          </p>
          <p>
            <strong>Suspicious IP:</strong> 41.72.91.14
          </p>
          <Button variant="destructive">Mark as Investigated</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
