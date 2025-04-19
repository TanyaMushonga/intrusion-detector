"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
 
import { useState } from "react";
 
import { Threat } from "@/types";
import { AlertDetailSheet } from "./AlertDetailSheet";

export function AlertCard({ threat }: { threat: Threat }) {
  const [open, setOpen] = useState(false);

  const severityColor = {
    High: "border-red-600",
    Medium: "border-yellow-500",
    Low: "border-gray-400",
  };

  return (
    <>
      <Card
        className={`cursor-pointer border-l-4 ${
          severityColor[threat.severity]
        } bg-muted/50 hover:bg-muted transition`}
        onClick={() => setOpen(true)}
      >
        <CardHeader>
          <div className="flex justify-between">
            <p className="font-semibold">{threat.type}</p>
            <Badge variant="outline">{threat.severity}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {threat.destinationIP} targeted by {threat.sourceIP}
          </p>
        </CardHeader>
        <CardContent className="text-xs text-muted-foreground">
          Detected at {threat.timestamp} · Status: {threat.status}
        </CardContent>
      </Card>

      <AlertDetailSheet threat={threat} open={open} onOpenChange={setOpen} />
    </>
  );
}
