import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Premonad</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Decentralized prediction markets built on Monad blockchain. Create markets, make predictions, and earn
              rewards.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/markets" className="hover:text-foreground transition-colors">
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-foreground transition-colors">
                  Create Market
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-foreground transition-colors">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Monad
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Premonad. Built on Monad blockchain.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
