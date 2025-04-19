import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type UserActivityCardProps = {
  accountNumber: string;
  activityType: string;
  timestamp: string;
  status: string;
  suspiciousIP: string;
};

export function UserActivityCard({
  accountNumber,
  activityType,
  timestamp,
  status,
  suspiciousIP,
}: UserActivityCardProps) {
  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Account: {accountNumber}
        </CardTitle>
        <CardDescription>{activityType}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">Timestamp:</span> {timestamp}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">Suspicious IP:</span> {suspiciousIP}
        </div>
        <Badge variant={status === "Resolved" ? "outline" : "destructive"}>
          {status}
        </Badge>
      </CardContent>
      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </Card>
  );
}
