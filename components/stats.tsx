import { TrendingUp, Users, Coins, Clock } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      label: "High Throughput",
      value: "10,000 TPS",
      description: "Lightning-fast predictions with Monad's parallel execution",
    },
    {
      icon: Coins,
      label: "Low Fees",
      value: "<$0.01",
      description: "Minimal gas costs for all market interactions",
    },
    {
      icon: Users,
      label: "Community Driven",
      value: "100% Decentralized",
      description: "Permissionless market creation and resolution",
    },
    {
      icon: Clock,
      label: "Instant Finality",
      value: "1-2 Seconds",
      description: "Near-instant settlement on Monad blockchain",
    },
  ]

  return (
    <section className="border-b border-border/40 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Built for speed. Optimized for scale.
          </h2>
          <p className="mt-4 text-muted-foreground text-balance leading-relaxed">
            Leveraging Monad&apos;s cutting-edge architecture to deliver the best prediction market experience
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
