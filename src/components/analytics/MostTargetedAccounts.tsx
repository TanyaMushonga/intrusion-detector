import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const accounts = [
  { account: "Acc#04324129", threats: 12 },
  { account: "Acc#98475102", threats: 10 },
  { account: "Acc#18920544", threats: 8 },
  { account: "Acc#55023948", threats: 7 },
  { account: "Acc#77894210", threats: 6 },
];

export function MostTargetedAccounts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Targeted Bank Accounts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {accounts.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>{item.account}</span>
            <span className="font-semibold">{item.threats} threats</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
