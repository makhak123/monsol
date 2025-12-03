import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketsGrid } from "@/components/markets-grid"
import { MarketFilters } from "@/components/market-filters"

export default function MarketsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground text-balance mb-2">All Markets</h1>
          <p className="text-muted-foreground">Browse and trade on active prediction markets</p>
        </div>
        <MarketFilters />
        <MarketsGrid />
      </main>
      <Footer />
    </div>
  )
}
