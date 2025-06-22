'use client'

import React from 'react'
import Image from 'next/image'
import { t } from '@/lib/i18n'

interface PlayPageProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default function PlayPage({ params }: PlayPageProps) {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en')

  // 异步获取语言参数
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang))
  }, [params])

  const gameFeatures = [
    {
      icon: '🥚',
      title: t('play.features.hatching.title', lang),
      description: t('play.features.hatching.description', lang),
      color: 'bg-green-500'
    },
    {
      icon: '⚔️',
      title: t('play.features.pvp.title', lang),
      description: t('play.features.pvp.description', lang),
      color: 'bg-blue-500'
    },
    {
      icon: '🏹',
      title: t('play.features.hunting.title', lang),
      description: t('play.features.hunting.description', lang),
      color: 'bg-orange-500'
    },
    {
      icon: '🛒',
      title: t('play.features.market.title', lang),
      description: t('play.features.market.description', lang),
      color: 'bg-purple-500'
    }
  ]

  const requirements = [
    {
      icon: '💼',
      title: t('play.requirements.wallet.title', lang),
      description: t('play.requirements.wallet.description', lang)
    },
    {
      icon: '💰',
      title: t('play.requirements.funds.title', lang),
      description: t('play.requirements.funds.description', lang)
    },
    {
      icon: '🌐',
      title: t('play.requirements.network.title', lang),
      description: t('play.requirements.network.description', lang)
    },
    {
      icon: '📱',
      title: t('play.requirements.device.title', lang),
      description: t('play.requirements.device.description', lang)
    }
  ]

  const steps = [
    {
      step: '1',
      title: t('play.steps.connect.title', lang),
      description: t('play.steps.connect.description', lang),
      icon: '🔗'
    },
    {
      step: '2',
      title: t('play.steps.purchase.title', lang),
      description: t('play.steps.purchase.description', lang),
      icon: '🥚'
    },
    {
      step: '3',
      title: t('play.steps.hatch.title', lang),
      description: t('play.steps.hatch.description', lang),
      icon: '🦕'
    },
    {
      step: '4',
      title: t('play.steps.adventure.title', lang),
      description: t('play.steps.adventure.description', lang),
      icon: '🎮'
    }
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-cute mb-4 text-title">
            {t('play.title', lang)}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-body mb-8">
            {t('play.subtitle', lang)}
          </p>

          <div className="text-center">
            <a
              href="#"
              className="btn-gradient px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 inline-block rounded-full"
            >
              🚀 {t('play.startButton', lang)}
            </a>
          </div>
        </div>

        {/* Game Features */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-cute text-title">
              {t('play.features.title', lang)}
            </h2>
            <p className="text-lg md:text-xl text-body mt-2">
              {t('play.features.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {gameFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center glass-card group hover:scale-105 transition-transform duration-300 animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${feature.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-cute mb-3 text-title">
                  {feature.title}
                </h3>
                <p className="text-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Start Steps */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-cute text-title">
              {t('play.steps.title', lang)}
            </h2>
            <p className="text-lg md:text-xl text-body mt-2">
              {t('play.steps.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 text-center relative glass-card animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-cute mb-3 text-title">
                  {step.title}
                </h3>
                <p className="text-body text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-cute text-title">
              {t('play.requirements.title', lang)}
            </h2>
            <p className="text-lg md:text-xl text-body mt-2">
              {t('play.requirements.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="p-6 text-center glass-card animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{requirement.icon}</div>
                <h3 className="text-xl font-cute mb-3 text-title">
                  {requirement.title}
                </h3>
                <p className="text-body text-sm">
                  {requirement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass-card p-8 md:p-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-cute mb-4 text-title">
              {t('play.cta.title', lang)}
            </h2>
            <p className="text-lg md:text-xl text-body mb-8">
              {t('play.cta.description', lang)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="btn-gradient px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 inline-block rounded-full"
              >
                🚀 {t('play.cta.startButton', lang)}
              </a>
              <a
                href="/gameplay"
                className="bg-white text-gray-800 px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 inline-block rounded-full border-2 border-gray-200"
              >
                📖 {t('play.cta.learnButton', lang)}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 