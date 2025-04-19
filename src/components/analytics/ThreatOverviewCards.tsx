import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ThreatOverviewCards() {
  const cards = [
    { title: "Total Threats", value: "1,248" },
    { title: "Accounts Targeted", value: "237" },
    { title: "Critical Threats", value: "56" },
    { title: "Resolved", value: "1,190" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {cards.map((card, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-base">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
