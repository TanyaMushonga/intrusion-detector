import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ips = [
  { ip: "41.72.91.14", count: 20 },
  { ip: "156.223.45.87", count: 18 },
  { ip: "102.32.4.91", count: 16 },
  { ip: "81.92.14.29", count: 15 },
  { ip: "196.20.10.1", count: 14 },
];

export function SuspiciousSourceIPs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Suspicious Source IPs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {ips.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>{item.ip}</span>
            <span className="font-semibold">{item.count} attempts</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
