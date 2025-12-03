import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioStats } from "@/components/portfolio-stats"
import { PortfolioPositions } from "@/components/portfolio-positions"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground text-balance mb-2">Portfolio</h1>
          <p className="text-muted-foreground">Track your positions and earnings</p>
        </div>
        <PortfolioStats />
        <PortfolioPositions />
      </main>
      <Footer />
    </div>
  )
}
