'use client'

import React from 'react'
import Image from 'next/image'
import { t } from '@/lib/i18n'

interface GameplaySectionProps {
  lang?: 'en' | 'zh'
}

const GameplaySection: React.FC<GameplaySectionProps> = ({ lang = 'en' }) => {
  const gameplayFeatures = [
    {
      icon: '🥚',
      title: t('gameplay.features.hatching.title', lang),
      description: t('gameplay.features.hatching.description', lang),
      image: '/images/egg.png'
    },
    {
      icon: '🏹',
      title: t('gameplay.features.hunting.title', lang),
      description: t('gameplay.features.hunting.description', lang),
      image: '/images/velociraptor.png'
    },
    {
      icon: '⚔️',
      title: t('gameplay.features.pvp.title', lang),
      description: t('gameplay.features.pvp.description', lang),
      image: '/images/tyrannosaurus.png'
    },
    {
      icon: '🛒',
      title: t('gameplay.features.marketplace.title', lang),
      description: t('gameplay.features.marketplace.description', lang),
      image: '/images/triceratops.png'
    }
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            {t('gameplay.title', lang)}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mobile-text-sm text-body">
            {t('gameplay.subtitle', lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mobile-grid">
          {gameplayFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 transition-all duration-300 transform hover:scale-105 mobile-card glass-card animate-fadeInScale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-3xl md:text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 mobile-title-sm text-title">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed mb-3 md:mb-4 mobile-text-sm text-body">
                    {feature.description}
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="rounded-lg mobile-img md:w-15 md:h-15"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Stats */}
        <div className="mt-12 md:mt-20 bg-gradient-primary rounded-3xl p-6 md:p-12 text-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-cute mb-3 md:mb-4 mobile-title-sm text-readable">
              {t('gameplay.stats.title', lang)}
            </h3>
            <p className="text-lg md:text-xl opacity-95 mobile-text-sm">
              {t('gameplay.stats.subtitle', lang)}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mobile-grid">
            <div className="text-center">
              <div className="text-2xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">1,000</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('gameplay.stats.eggs', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">5</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('gameplay.stats.rarity', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">3</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('gameplay.stats.grounds', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">24/7</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('gameplay.stats.online', lang)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameplaySection 