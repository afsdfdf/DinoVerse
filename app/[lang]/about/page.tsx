'use client'

import React from 'react'
import Image from 'next/image'
import { t } from '@/lib/i18n'

interface AboutPageProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default function AboutPage({ params }: AboutPageProps) {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en')

  // 异步获取语言参数
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang))
  }, [params])

  const gameFeatures = [
    {
      title: t('about.features.nfts.title', lang),
      description: t('about.features.nfts.description', lang),
      icon: '🦕',
    },
    {
      title: t('about.features.hatching.title', lang),
      description: t('about.features.hatching.description', lang),
      icon: '🥚',
    },
    {
      title: t('about.features.pvp.title', lang),
      description: t('about.features.pvp.description', lang),
      icon: '⚔️',
    },
    {
      title: t('about.features.world.title', lang),
      description: t('about.features.world.description', lang),
      icon: '🌍',
    },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-cute mb-4 text-title">
            {t('about.title', lang)}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-body">
            {t('about.subtitle', lang)}
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-cute mb-6 text-title">
                {t('about.vision.title', lang)}
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4 text-body">
                {t('about.vision.paragraph1', lang)}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-body">
                {t('about.vision.paragraph2', lang)}
              </p>
            </div>
            <div className="relative animate-fadeInRight">
              <Image
                src="/images/tyrannosaurus.jpg"
                alt="T-Rex"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Game Features Section */}
        <section>
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-cute text-title">{t('about.features.title', lang)}</h2>
            <p className="text-lg md:text-xl text-body mt-2">{t('about.features.subtitle', lang)}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {gameFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 md:p-8 text-center glass-card animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl mb-4 animate-bounce">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-title">{feature.title}</h3>
                <p className="text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 