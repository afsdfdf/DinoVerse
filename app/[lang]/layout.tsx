import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export const metadata: Metadata = {
  title: 'DinoVerse - 恐龙世界',
  description: 'A Web3 NFT game featuring dinosaurs',
}

export default async function RootLayout({
  children,
  params
}: Readonly<RootLayoutProps>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100`}>
        <Navigation lang={lang} />
        <main className="pt-14 md:pt-16">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  )
} 