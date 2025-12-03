"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [walletConnected, setWalletConnected] = useState(false)

  const handleConnect = () => {
    setWalletConnected(!walletConnected)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Monsol</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/markets"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Markets
            </Link>
            <Link
              href="/create"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Create Market
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={handleConnect} className="hidden md:flex" variant={walletConnected ? "outline" : "default"}>
            {walletConnected ? "0x7a4f...3c2d" : "Connect Wallet"}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
