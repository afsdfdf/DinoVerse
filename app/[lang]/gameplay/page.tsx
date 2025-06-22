'use client'

import React from 'react'
import Image from 'next/image'
import { t } from '@/lib/i18n'

interface GameplayPageProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default function GameplayPage({ params }: GameplayPageProps) {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en')

  // 异步获取语言参数
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang))
  }, [params])

  const gameplayModes = [
    {
      title: t('gameplay.modes.hatching.title', lang),
      description: t('gameplay.modes.hatching.description', lang),
      details: [
        t('gameplay.modes.hatching.details.total', lang),
        t('gameplay.modes.hatching.details.price', lang),
        t('gameplay.modes.hatching.details.limit', lang),
        t('gameplay.modes.hatching.details.probability', lang)
      ],
      image: '/images/egg.png',
      background: '/backgrounds/eggs-nursery.jpg'
    },
    {
      title: t('gameplay.modes.hunting.title', lang),
      description: t('gameplay.modes.hunting.description', lang),
      details: [
        t('gameplay.modes.hunting.details.valley', lang),
        t('gameplay.modes.hunting.details.plains', lang),
        t('gameplay.modes.hunting.details.forest', lang),
        t('gameplay.modes.hunting.details.special', lang)
      ],
      image: '/images/velociraptor.png',
      background: '/backgrounds/forest-shadow.jpg'
    },
    {
      title: t('gameplay.modes.pvp.title', lang),
      description: t('gameplay.modes.pvp.description', lang),
      details: [
        t('gameplay.modes.pvp.details.matchmaking', lang),
        t('gameplay.modes.pvp.details.rules', lang),
        t('gameplay.modes.pvp.details.calculation', lang),
        t('gameplay.modes.pvp.details.evolution', lang)
      ],
      image: '/images/tyrannosaurus.png',
      background: '/backgrounds/pvp-arena.jpg'
    },
    {
      title: t('gameplay.modes.market.title', lang),
      description: t('gameplay.modes.market.description', lang),
      details: [
        t('gameplay.modes.market.details.sell', lang),
        t('gameplay.modes.market.details.buy', lang),
        t('gameplay.modes.market.details.fee', lang),
        t('gameplay.modes.market.details.bid', lang)
      ],
      image: '/images/triceratops.png',
      background: '/backgrounds/shop-marketplace.jpg'
    }
  ]

  const dinosaurTypes = [
    { name: t('dino.names.trex', lang), rarity: t('dino.rarities.S', lang), image: '/images/tyrannosaurus.png', stats: { attack: 95, health: 85, hunting: 80 } },
    { name: t('dino.names.triceratops', lang), rarity: t('dino.rarities.A', lang), image: '/images/triceratops.png', stats: { attack: 75, health: 90, hunting: 70 } },
    { name: t('dino.names.stegosaurus', lang), rarity: t('dino.rarities.B', lang), image: '/images/stegosaurus.png', stats: { attack: 60, health: 95, hunting: 65 } },
    { name: t('dino.names.pteranodon', lang), rarity: t('dino.rarities.A', lang), image: '/images/pteranodon.png', stats: { attack: 80, health: 70, hunting: 85 } },
    { name: t('dino.names.brontosaurus', lang), rarity: t('dino.rarities.B', lang), image: '/images/brontosaurus.png', stats: { attack: 65, health: 100, hunting: 60 } },
    { name: t('dino.names.velociraptor', lang), rarity: t('dino.rarities.C', lang), image: '/images/velociraptor.png', stats: { attack: 70, health: 60, hunting: 90 } }
  ]

  const gameTips = [
    {
      icon: '🎯',
      title: t('gameplay.tips.matching.title', lang),
      description: t('gameplay.tips.matching.description', lang)
    },
    {
      icon: '⚔️',
      title: t('gameplay.tips.pvp.title', lang),
      description: t('gameplay.tips.pvp.description', lang)
    },
    {
      icon: '💰',
      title: t('gameplay.tips.economy.title', lang),
      description: t('gameplay.tips.economy.description', lang)
    },
    {
      icon: '🔄',
      title: t('gameplay.tips.upgrade.title', lang),
      description: t('gameplay.tips.upgrade.description', lang)
    },
    {
      icon: '👥',
      title: t('gameplay.tips.teamwork.title', lang),
      description: t('gameplay.tips.teamwork.description', lang)
    },
    {
      icon: '📈',
      title: t('gameplay.tips.market.title', lang),
      description: t('gameplay.tips.market.description', lang)
    }
  ];

  return (
    <>
      <section className="pt-24 pb-16 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-cute gradient-text mb-6">
              {t('gameplay.page.title', lang)}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('gameplay.page.subtitle', lang)}
            </p>
          </div>
        </div>
      </section>

      {/* 游戏模式详解 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('gameplay.page.modes.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('gameplay.page.modes.subtitle', lang)}
            </p>
          </div>

          <div className="space-y-16">
            {gameplayModes.map((mode, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`relative animate-fadeIn${index % 2 === 0 ? 'Left' : 'Right'} ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={mode.image}
                    alt={mode.title}
                    width={400}
                    height={400}
                    className="drop-shadow-2xl mx-auto"
                  />
                </div>
                <div className={`animate-fadeIn${index % 2 === 0 ? 'Right' : 'Left'}`}>
                  <div className="glass-card p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-cute mb-4 text-title">
                      {mode.title}
                    </h3>
                    <p className="text-base md:text-lg text-body mb-6 leading-relaxed">
                      {mode.description}
                    </p>
                    <ul className="space-y-3">
                      {mode.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-body">
                          <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 恐龙图鉴 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('gameplay.page.dex.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('gameplay.page.dex.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dinosaurTypes.map((dino, index) => (
              <div
                key={index}
                className="p-6 text-center glass-card group hover:scale-105 transition-transform duration-300 animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <Image
                    src={dino.image}
                    alt={dino.name}
                    width={150}
                    height={150}
                    className="mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    {dino.rarity}
                  </div>
                </div>
                <h3 className="text-2xl font-cute mb-4 text-title">{dino.name}</h3>
                <div className="space-y-2 text-body">
                  <div className="flex justify-between items-center">
                    <span>{t('gameplay.dex.stats.attack', lang)}</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200/20 rounded-full h-2.5 mr-2">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${dino.stats.attack}%` }}></div>
                      </div>
                      <span className="font-bold">{dino.stats.attack}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('gameplay.dex.stats.health', lang)}</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200/20 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${dino.stats.health}%` }}></div>
                      </div>
                      <span className="font-bold">{dino.stats.health}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('gameplay.dex.stats.hunting', lang)}</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200/20 rounded-full h-2.5 mr-2">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${dino.stats.hunting}%` }}></div>
                      </div>
                      <span className="font-bold">{dino.stats.hunting}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 游戏技巧 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('gameplay.page.tips.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('gameplay.page.tips.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameTips.map((tip, index) => (
              <div
                key={index}
                className="dino-card p-6"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-cute mb-3">{tip.title}</h3>
                <p className="text-gray-600">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 