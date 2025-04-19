import {
  IconTrendingDown,
  IconTrendingUp,
  IconShield,
  IconAlertTriangle,
  IconShieldOff,
  IconServerCog,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardData = [
  {
    description: "Total Threats Detected",
    value: "1,208",
    trend: "+8.2%",
    trendIcon: IconTrendingUp,
    icon: IconShield,
    trendDirection: "up",
    subtitle: "Last 24 hours - All severity levels",
  },
  {
    description: "Critical Alerts",
    value: "37",
    trend: "+15.6%",
    trendIcon: IconTrendingUp,
    icon: IconAlertTriangle,
    trendDirection: "up",
    subtitle: "Require immediate attention",
  },
  {
    description: "False Positives",
    value: "112",
    trend: "-4.3%",
    trendIcon: IconTrendingDown,
    icon: IconShieldOff,
    trendDirection: "down",
    subtitle: "Flagged & dismissed today",
  },
  {
    description: "System Uptime",
    value: "99.98%",
    trend: "+0.01%",
    trendIcon: IconTrendingUp,
    icon: IconServerCog,
    trendDirection: "up",
    subtitle: "Last 30 days",
  },
];

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cardData.map((card, index) => {
        const TrendIcon = card.trendIcon;
        return (
          <Card className="@container/card" key={index}>
            <CardHeader>
              <CardDescription>{card.description}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {card.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <TrendIcon className="mr-1 h-4 w-4" />
                  {card.trend}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {card.trendDirection === "up" ? "Trending up" : "Trending down"}{" "}
                this period <TrendIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">{card.subtitle}</div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
