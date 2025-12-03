"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = ["All", "Crypto", "Finance", "Technology", "DeFi", "NFTs", "Sports", "Politics"]

export function MarketFilters() {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search markets..." className="pl-10" />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
