import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,

} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type IncidentDetailsSheetProps = {
  incident?: {
    id: string;
    timestamp: string;
    severity: string;
    status: string;
    affectedSystem: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
};

export function IncidentDetailsSheet({
  incident,
  isOpen,
  onClose,
}: IncidentDetailsSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Incident Details</SheetTitle>
          <SheetDescription>
            Details for incident {incident?.id}
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4">
          <div>
            <strong>Incident ID:</strong> {incident?.id}
          </div>
          <div>
            <strong>Timestamp:</strong> {incident?.timestamp}
          </div>
          <div>
            <strong>Severity:</strong>{" "}
            <Badge
              variant={incident?.severity === "High" ? "destructive" : "outline"}
            >
              {incident?.severity}
            </Badge>
          </div>
          <div>
            <strong>Status:</strong> {incident?.status}
          </div>
          <div>
            <strong>Affected System:</strong> {incident?.affectedSystem}
          </div>
          <div>
            <strong>Description:</strong> {incident?.description}
          </div>
        </div>
        <Button variant="outline" className="mt-4" onClick={onClose}>
          Close
        </Button>
      </SheetContent>
    </Sheet>
  );
}
