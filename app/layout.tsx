import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
  return (
    <html>
      <body className={`${inter.className} bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100`}>
        {children}
      </body>
    </html>
  )
} 