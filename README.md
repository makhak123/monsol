# Monsol

Decentralized prediction market platform built on Monad blockchain.

## Overview

Monsol is a theoretical prediction market DEX that leverages Monad's high-performance EVM-compatible blockchain to provide lightning-fast, low-cost prediction markets. Users can create markets, place predictions, and earn rewards based on outcomes.

## Features

- **High Performance**: Built on Monad's parallel execution architecture for 10,000+ TPS
- **Low Fees**: Minimal gas costs (<$0.01) for all market interactions
- **Decentralized**: Permissionless market creation and resolution
- **Instant Finality**: 1-2 second settlement times
- **Multiple Categories**: Markets across crypto, finance, technology, DeFi, NFTs, and more

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Blockchain**: Monad (EVM-compatible)
- **Wallet Connection**: Web3 wallet integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Web3 wallet (MetaMask, WalletConnect, etc.)
- Monad testnet tokens (for testing)

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/monsol.git
cd monsol
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
monsol/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── markets/            # Markets listing page
│   ├── create/             # Create market page
│   └── portfolio/          # Portfolio page
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── featured-markets.tsx # Featured markets grid
│   ├── stats.tsx           # Platform statistics
│   ├── how-it-works.tsx    # How it works section
│   └── footer.tsx          # Footer
└── README.md
\`\`\`

## Smart Contract Integration

This is a theoretical implementation. To connect to actual Monad blockchain:

1. Add Monad network configuration
2. Implement smart contract interactions for:
   - Market creation
   - Buying/selling shares
   - Market resolution
   - Liquidity provision
3. Integrate Web3 wallet connection (e.g., wagmi, ethers.js)
4. Add transaction signing and confirmation flows

## Features to Implement

- [ ] Smart contract deployment for prediction markets
- [ ] Wallet connection with Monad network
- [ ] Real-time market data updates
- [ ] Market resolution mechanism
- [ ] Liquidity pool management
- [ ] Advanced charting and analytics
- [ ] User reputation system
- [ ] Market commenting and discussion
- [ ] Mobile responsive optimizations
- [ ] Dark/light theme toggle

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Disclaimer

This is a theoretical implementation for demonstration purposes. Not financial advice. Prediction markets may be subject to local regulations.

## Built With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Monad](https://monad.xyz/)
