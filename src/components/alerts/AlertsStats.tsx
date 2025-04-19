import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AlertsStats() {
  const stats = [
    { label: "Total Alerts Today", value: 32 },
    { label: "Unresolved", value: 14 },
    { label: "Resolved", value: 10 },
    { label: "Investigating", value: 8 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="text-sm font-medium">{stat.label}</CardHeader>
          <CardContent className="text-2xl font-bold">{stat.value}</CardContent>
        </Card>
      ))}
    </div>
  );
}
