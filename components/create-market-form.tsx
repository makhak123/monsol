"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info } from "lucide-react"

export function CreateMarketForm() {
  return (
    <Card className="p-8">
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="question">Market Question</Label>
          <Input id="question" placeholder="e.g., Will ETH reach $5,000 by end of Q1 2025?" className="text-base" />
          <p className="text-sm text-muted-foreground">Ask a clear yes/no question with a specific timeframe</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Provide additional context and resolution criteria..."
            className="min-h-32 text-base"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="crypto">Crypto</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="defi">DeFi</SelectItem>
                <SelectItem value="nfts">NFTs</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="politics">Politics</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input id="endDate" type="date" className="text-base" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="liquidity">Initial Liquidity (MONAD)</Label>
          <Input id="liquidity" type="number" placeholder="100" className="text-base" />
          <p className="text-sm text-muted-foreground">Add initial liquidity to bootstrap your market</p>
        </div>

        <div className="rounded-lg bg-primary/10 border border-primary/20 p-4">
          <div className="flex gap-3">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-foreground mb-1">Market Creation Fee</p>
              <p className="text-muted-foreground leading-relaxed">
                A small fee of 0.1 MONAD is required to create a market. This helps prevent spam and ensures quality
                markets.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button size="lg" className="flex-1">
            Create Market
          </Button>
          <Button size="lg" variant="outline">
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}
