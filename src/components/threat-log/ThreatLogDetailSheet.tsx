import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Threat } from "@/types";

export function ThreatLogDetailSheet({
  threat,
  open,
  onOpenChange,
}: {
  threat: Threat;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{threat.type} Details</SheetTitle>
        </SheetHeader>
        <div className="px-5 space-y-2 text-sm">
          <p>
            <strong>Time:</strong> {threat.timestamp}
          </p>
          <p>
            <strong>Source IP:</strong> {threat.sourceIP}
          </p>
          <p>
            <strong>Destination IP:</strong> {threat.destinationIP}
          </p>
          <p>
            <strong>Severity:</strong> {threat.severity}
          </p>
          <p>
            <strong>Status:</strong> {threat.status}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
