import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"

const positions = [
  {
    id: 1,
    market: "Will ETH reach $5,000 by end of Q1 2025?",
    position: "YES",
    shares: 250,
    avgPrice: 0.58,
    currentPrice: 0.63,
    value: "$157.50",
    pnl: "+$12.50",
    pnlPercent: "+8.6%",
    trend: "up",
  },
  {
    id: 2,
    market: "Will Monad mainnet launch in Q2 2025?",
    position: "YES",
    shares: 180,
    avgPrice: 0.68,
    currentPrice: 0.72,
    value: "$129.60",
    pnl: "+$7.20",
    pnlPercent: "+5.9%",
    trend: "up",
  },
  {
    id: 3,
    market: "Will US approve spot ETH ETF by June 2025?",
    position: "NO",
    shares: 320,
    avgPrice: 0.64,
    currentPrice: 0.59,
    value: "$188.80",
    pnl: "-$16.00",
    pnlPercent: "-7.8%",
    trend: "down",
  },
]

export function PortfolioPositions() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Active Positions</h2>

      {positions.map((position) => (
        <Card key={position.id} className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={position.position === "YES" ? "default" : "secondary"}>{position.position}</Badge>
                <h3 className="font-semibold text-foreground">{position.market}</h3>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>{position.shares} shares</span>
                <span>Avg: ${position.avgPrice.toFixed(2)}</span>
                <span>Current: ${position.currentPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-lg font-bold text-foreground">{position.value}</div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    position.trend === "up" ? "text-primary" : "text-destructive"
                  }`}
                >
                  {position.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {position.pnl} ({position.pnlPercent})
                </div>
              </div>

              <Button variant="outline" size="sm">
                Sell
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
