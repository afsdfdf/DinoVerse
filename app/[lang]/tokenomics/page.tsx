'use client'

import React from 'react'
import { t } from '@/lib/i18n'

interface TokenomicsPageProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default function TokenomicsPage({ params }: TokenomicsPageProps) {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en')

  // 异步获取语言参数
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang))
  }, [params])

  const tokenDetails = [
    {
      name: t('tokenomics.token.name', lang),
      symbol: 'DINO',
      description: t('tokenomics.token.description', lang),
      totalSupply: '1,000,000,000',
      allocation: [
        { label: t('tokenomics.allocation.gameRewards', lang), percentage: 35, color: 'bg-green-500' },
        { label: t('tokenomics.allocation.pvpRewards', lang), percentage: 25, color: 'bg-blue-500' },
        { label: t('tokenomics.allocation.huntingRewards', lang), percentage: 20, color: 'bg-orange-500' },
        { label: t('tokenomics.allocation.referralRewards', lang), percentage: 10, color: 'bg-purple-500' },
        { label: t('tokenomics.allocation.ecosystemFund', lang), percentage: 10, color: 'bg-gray-600' }
      ],
      useCases: [
        t('tokenomics.useCases.hatching', lang),
        t('tokenomics.useCases.pvp', lang),
        t('tokenomics.useCases.evolution', lang),
        t('tokenomics.useCases.trading', lang),
        t('tokenomics.useCases.items', lang),
        t('tokenomics.useCases.vip', lang),
        t('tokenomics.useCases.governance', lang)
      ]
    }
  ]

  const economicFeatures = [
    {
      icon: '💰',
      title: t('tokenomics.features.deflation.title', lang),
      description: t('tokenomics.features.deflation.description', lang),
      details: [
        t('tokenomics.features.deflation.details.pvp', lang),
        t('tokenomics.features.deflation.details.fees', lang),
        t('tokenomics.features.deflation.details.events', lang),
        t('tokenomics.features.deflation.details.buyback', lang),
        t('tokenomics.features.deflation.details.evolution', lang)
      ]
    },
    {
      icon: '🎯',
      title: t('tokenomics.features.fair.title', lang),
      description: t('tokenomics.features.fair.description', lang),
      details: [
        t('tokenomics.features.fair.details.noTeam', lang),
        t('tokenomics.features.fair.details.noInvestors', lang),
        t('tokenomics.features.fair.details.gameOnly', lang),
        t('tokenomics.features.fair.details.transparent', lang),
        t('tokenomics.features.fair.details.community', lang)
      ]
    },
    {
      icon: '🔒',
      title: t('tokenomics.features.security.title', lang),
      description: t('tokenomics.features.security.description', lang),
      details: [
        t('tokenomics.features.security.details.openSource', lang),
        t('tokenomics.features.security.details.audited', lang),
        t('tokenomics.features.security.details.transparent', lang),
        t('tokenomics.features.security.details.decentralized', lang),
        t('tokenomics.features.security.details.supervised', lang)
      ]
    },
    {
      icon: '📈',
      title: t('tokenomics.features.growth.title', lang),
      description: t('tokenomics.features.growth.description', lang),
      details: [
        t('tokenomics.features.growth.details.ecosystem', lang),
        t('tokenomics.features.growth.details.users', lang),
        t('tokenomics.features.growth.details.demand', lang),
        t('tokenomics.features.growth.details.scarcity', lang),
        t('tokenomics.features.growth.details.investment', lang)
      ]
    }
  ]

  const tokenUtility = [
    {
      icon: '🥚',
      title: t('tokenomics.utility.hatching.title', lang),
      description: t('tokenomics.utility.hatching.description', lang)
    },
    {
      icon: '⚔️',
      title: t('tokenomics.utility.pvp.title', lang),
      description: t('tokenomics.utility.pvp.description', lang)
    },
    {
      icon: '🏹',
      title: t('tokenomics.utility.hunting.title', lang),
      description: t('tokenomics.utility.hunting.description', lang)
    },
    {
      icon: '🛒',
      title: t('tokenomics.utility.trading.title', lang),
      description: t('tokenomics.utility.trading.description', lang)
    },
    {
      icon: '🌟',
      title: t('tokenomics.utility.evolution.title', lang),
      description: t('tokenomics.utility.evolution.description', lang)
    },
    {
      icon: '👥',
      title: t('tokenomics.utility.governance.title', lang),
      description: t('tokenomics.utility.governance.description', lang)
    }
  ]

  const economicMechanism = [
    {
      title: t('tokenomics.mechanism.earn.title', lang),
      items: [
        t('tokenomics.mechanism.earn.daily', lang),
        t('tokenomics.mechanism.earn.pvp', lang),
        t('tokenomics.mechanism.earn.hunting', lang),
        t('tokenomics.mechanism.earn.referral', lang),
        t('tokenomics.mechanism.earn.community', lang)
      ]
    },
    {
      title: t('tokenomics.mechanism.spend.title', lang),
      items: [
        t('tokenomics.mechanism.spend.eggs', lang),
        t('tokenomics.mechanism.spend.pvp', lang),
        t('tokenomics.mechanism.spend.evolution', lang),
        t('tokenomics.mechanism.spend.fees', lang),
        t('tokenomics.mechanism.spend.items', lang)
      ]
    },
    {
      title: t('tokenomics.mechanism.burn.title', lang),
      items: [
        t('tokenomics.mechanism.burn.pvp', lang),
        t('tokenomics.mechanism.burn.fees', lang),
        t('tokenomics.mechanism.burn.events', lang),
        t('tokenomics.mechanism.burn.buyback', lang),
        t('tokenomics.mechanism.burn.fund', lang)
      ]
    }
  ]

  return (
    <>
      <section className="pt-24 pb-16 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-cute gradient-text mb-6">
              {t('tokenomics.page.title', lang)}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('tokenomics.page.subtitle', lang)}
            </p>
          </div>
        </div>
      </section>

      {/* 代币详情 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('tokenomics.token.sectionTitle', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('tokenomics.token.sectionSubtitle', lang)}
            </p>
          </div>

          <div className="space-y-12">
            {tokenDetails.map((token, index) => (
              <div
                key={index}
                className="glass-card p-8 animate-fadeInUp"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-cute gradient-text mb-4">
                      {token.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {token.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{t('tokenomics.token.info.symbol', lang)}:</span>
                        <span className="text-2xl font-bold text-blue-600">{token.symbol}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{t('tokenomics.token.info.supply', lang)}:</span>
                        <span className="text-2xl font-bold text-green-600">{token.totalSupply}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{t('tokenomics.token.info.blockchain', lang)}:</span>
                        <span className="text-lg font-semibold">Ethereum</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{t('tokenomics.token.info.standard', lang)}:</span>
                        <span className="text-lg font-semibold">ERC-20</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-cute mb-4">{t('tokenomics.allocation.title', lang)}</h4>
                    <div className="space-y-3">
                      {token.allocation.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.label}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${item.color}`}
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold w-8">{item.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-cute mb-4">{t('tokenomics.useCases.title', lang)}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {token.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 经济特性 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('tokenomics.features.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('tokenomics.features.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {economicFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-cute mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代币用途 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('tokenomics.utility.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('tokenomics.utility.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenUtility.map((utility, index) => (
              <div
                key={index}
                className="dino-card p-6 text-center animate-fadeInScale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{utility.icon}</div>
                <h3 className="text-lg font-cute mb-3">{utility.title}</h3>
                <p className="text-gray-600 text-sm">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 经济机制 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('tokenomics.mechanism.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('tokenomics.mechanism.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {economicMechanism.map((mechanism, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-cute mb-4 text-center">{mechanism.title}</h3>
                <ul className="space-y-3">
                  {mechanism.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 