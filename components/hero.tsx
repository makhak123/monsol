import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-foreground">Powered by Monad&apos;s parallel execution</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance lg:text-7xl">
            Predict the future.
            <br />
            <span className="text-primary">Own the outcome.</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-balance leading-relaxed lg:text-xl">
            Decentralized prediction markets built on Monad. Create markets, place predictions, and earn rewards on the
            fastest EVM-compatible blockchain.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link href="/markets">
                Explore Markets
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <Link href="/create">Create Market</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground lg:text-4xl">$12.4M</div>
              <div className="mt-1 text-sm text-muted-foreground">Total Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground lg:text-4xl">1,247</div>
              <div className="mt-1 text-sm text-muted-foreground">Active Markets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground lg:text-4xl">8,392</div>
              <div className="mt-1 text-sm text-muted-foreground">Traders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
