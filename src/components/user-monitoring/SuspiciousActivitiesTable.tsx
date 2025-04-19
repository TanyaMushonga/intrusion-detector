import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const activities = [
  {
    account: "Acc#04324129",
    activity: "Multiple failed login attempts",
    timestamp: "2025-04-18 10:34:22",
    status: "Investigating",
  },
  {
    account: "Acc#98475102",
    activity: "Unusual transfer to unverified account",
    timestamp: "2025-04-18 09:20:45",
    status: "Resolved",
  },
  {
    account: "Acc#18920544",
    activity: "Suspicious IP login",
    timestamp: "2025-04-18 08:50:12",
    status: "Escalated",
  },
  {
    account: "Acc#55023948",
    activity: "Change of email address",
    timestamp: "2025-04-18 07:35:50",
    status: "Unresolved",
  },
];

export function SuspiciousActivitiesTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Activity</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.account}</TableCell>
              <TableCell>{item.activity}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
