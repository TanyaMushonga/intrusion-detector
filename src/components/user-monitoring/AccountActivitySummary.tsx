import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AccountActivitySummary() {
  const data = [
    { title: "Total Accounts Monitored", value: "1,532" },
    { title: "Suspicious Activities Detected", value: "320" },
    { title: "Accounts with Alerts", value: "45" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {data.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-base">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
