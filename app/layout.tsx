import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DinoVerse - Web3 NFT Dinosaur Game',
  description: 'Enter the world of dinosaurs! Collect, hatch, and battle with unique dinosaur NFTs. Experience the infinite fun of blockchain gaming with your own dinosaurs, PVP battles, and explore the mysterious prehistoric world.',
  keywords: 'NFT Game, Web3 Game, Dinosaur, Blockchain Game, Cryptocurrency, Metaverse',
  authors: [{ name: 'DinoVerse Team' }],
  openGraph: {
    title: 'DinoVerse - Web3 NFT Dinosaur Game',
    description: 'The cutest Web3 NFT dinosaur game',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DinoVerse - Web3 NFT Dinosaur Game',
    description: 'The cutest Web3 NFT dinosaur game',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 