import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import GameplaySection from '@/components/gameplay-section'
import TokenomicsSection from '@/components/tokenomics-section'
import RoadmapSection from '@/components/roadmap-section'
import TeamSection from '@/components/team-section'

interface HomeProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  return (
    <>
      <HeroSection lang={lang} />
      <FeaturesSection lang={lang} />
      <GameplaySection lang={lang} />
      <TokenomicsSection lang={lang} />
      <RoadmapSection lang={lang} />
      <TeamSection lang={lang} />
    </>
  )
} 