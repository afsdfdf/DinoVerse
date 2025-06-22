'use client'

import React from 'react'
import { t } from '@/lib/i18n'

interface FeaturesSectionProps {
  lang?: 'en' | 'zh'
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang = 'en' }) => {
  const features = [
    {
      icon: '🦕',
      title: t('features.nft.title', lang),
      description: t('features.nft.description', lang)
    },
    {
      icon: '🥚',
      title: t('features.hatching.title', lang),
      description: t('features.hatching.description', lang)
    },
    {
      icon: '⚔️',
      title: t('features.pvp.title', lang),
      description: t('features.pvp.description', lang)
    },
    {
      icon: '🌍',
      title: t('features.world.title', lang),
      description: t('features.world.description', lang)
    },
    {
      icon: '💰',
      title: t('features.token.title', lang),
      description: t('features.token.description', lang)
    },
    {
      icon: '🎮',
      title: t('features.platform.title', lang),
      description: t('features.platform.description', lang)
    }
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            {t('features.title', lang)}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mobile-text-sm text-body">
            {t('features.subtitle', lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mobile-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 transition-all duration-300 transform hover:scale-105 mobile-card glass-card animate-fadeInScale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 animate-bounce">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 mobile-title-sm text-title">
                {feature.title}
              </h3>
              <p className="leading-relaxed mobile-text-sm text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 