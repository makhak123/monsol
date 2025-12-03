import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react"

export function PortfolioStats() {
  const stats = [
    {
      label: "Total Value",
      value: "$12,847.32",
      change: "+18.2%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "Active Positions",
      value: "23",
      change: "+3",
      trend: "up",
      icon: Target,
    },
    {
      label: "Total Profit/Loss",
      value: "+$2,184.50",
      change: "+12.4%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      label: "Win Rate",
      value: "67.8%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up" ? "text-primary" : "text-destructive"
              }`}
            >
              {stat.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {stat.change}
            </div>
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </Card>
      ))}
    </div>
  )
}
