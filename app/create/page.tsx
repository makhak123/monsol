import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CreateMarketForm } from "@/components/create-market-form"

export default function CreatePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground text-balance mb-2">Create Market</h1>
            <p className="text-muted-foreground">Launch a new prediction market on Monad</p>
          </div>
          <CreateMarketForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
