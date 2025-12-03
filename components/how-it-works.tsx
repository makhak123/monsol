import { LineChart, Vote, Trophy } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: LineChart,
      title: "Browse Markets",
      description: "Explore prediction markets across crypto, finance, sports, politics, and more",
    },
    {
      icon: Vote,
      title: "Place Predictions",
      description: "Buy YES or NO shares based on your prediction of the outcome",
    },
    {
      icon: Trophy,
      title: "Earn Rewards",
      description: "Collect profits when your predictions are correct after market resolution",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground text-balance lg:text-4xl">How Premonad Works</h2>
          <p className="mt-4 text-muted-foreground text-balance leading-relaxed">
            Simple, transparent, and decentralized prediction markets
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
