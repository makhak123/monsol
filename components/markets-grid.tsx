"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Clock } from "lucide-react"

const allMarkets = [
  {
    id: 1,
    title: "Will ETH reach $5,000 by end of Q1 2025?",
    category: "Crypto",
    yesPrice: 0.63,
    noPrice: 0.37,
    volume: "$284.5K",
    traders: 1247,
    endsIn: "14 days",
    trending: true,
  },
  {
    id: 2,
    title: "Will Bitcoin halving occur before April 2024?",
    category: "Crypto",
    yesPrice: 0.89,
    noPrice: 0.11,
    volume: "$156.2K",
    traders: 893,
    endsIn: "7 days",
    trending: false,
  },
  {
    id: 3,
    title: "Will Monad mainnet launch in Q2 2025?",
    category: "Technology",
    yesPrice: 0.72,
    noPrice: 0.28,
    volume: "$421.8K",
    traders: 2156,
    endsIn: "45 days",
    trending: true,
  },
  {
    id: 4,
    title: "Will AI tokens outperform DeFi in 2025?",
    category: "Crypto",
    yesPrice: 0.54,
    noPrice: 0.46,
    volume: "$198.3K",
    traders: 1092,
    endsIn: "120 days",
    trending: false,
  },
  {
    id: 5,
    title: "Will US approve spot ETH ETF by June 2025?",
    category: "Finance",
    yesPrice: 0.41,
    noPrice: 0.59,
    volume: "$312.7K",
    traders: 1823,
    endsIn: "89 days",
    trending: true,
  },
  {
    id: 6,
    title: "Will any L1 surpass Ethereum in TVL?",
    category: "DeFi",
    yesPrice: 0.28,
    noPrice: 0.72,
    volume: "$94.1K",
    traders: 567,
    endsIn: "180 days",
    trending: false,
  },
  {
    id: 7,
    title: "Will NFT trading volume exceed $1B in January?",
    category: "NFTs",
    yesPrice: 0.34,
    noPrice: 0.66,
    volume: "$67.2K",
    traders: 432,
    endsIn: "5 days",
    trending: false,
  },
  {
    id: 8,
    title: "Will Solana TVL surpass $10B by Q2?",
    category: "DeFi",
    yesPrice: 0.58,
    noPrice: 0.42,
    volume: "$203.4K",
    traders: 981,
    endsIn: "67 days",
    trending: true,
  },
  {
    id: 9,
    title: "Will gas fees on Ethereum average under 10 gwei?",
    category: "Technology",
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: "$112.8K",
    traders: 723,
    endsIn: "30 days",
    trending: false,
  },
]

export function MarketsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allMarkets.map((market) => (
        <Card key={market.id} className="p-6 hover:border-primary/50 transition-colors cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <Badge variant="secondary" className="text-xs">
              {market.category}
            </Badge>
            {market.trending && (
              <Badge className="gap-1 text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <TrendingUp className="h-3 w-3" />
                Trending
              </Badge>
            )}
          </div>

          <h3 className="text-base font-semibold text-foreground mb-4 leading-snug line-clamp-2">{market.title}</h3>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Yes</span>
              <span className="text-lg font-bold text-primary">{(market.yesPrice * 100).toFixed(0)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">No</span>
              <span className="text-lg font-bold text-destructive">{(market.noPrice * 100).toFixed(0)}%</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{market.traders}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{market.endsIn}</span>
            </div>
            <div className="ml-auto font-medium text-foreground">{market.volume}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
