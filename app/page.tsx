import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedMarkets } from "@/components/featured-markets"
import { Stats } from "@/components/stats"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <FeaturedMarkets />
      <HowItWorks />
      <Footer />
    </div>
  )
}
