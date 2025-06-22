'use client'

import React from 'react'
import { t } from '@/lib/i18n'

interface TokenomicsSectionProps {
  lang?: 'en' | 'zh'
}

const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ lang = 'en' }) => {
  const tokenAllocation = [
    { category: t('tokenomics.allocation.gameRewards', lang), percentage: 40, color: 'bg-green-400' },
    { category: t('tokenomics.allocation.ecosystemFund', lang), percentage: 25, color: 'bg-blue-400' },
    { category: t('tokenomics.allocation.teamHoldings', lang), percentage: 15, color: 'bg-purple-400' },
    { category: t('tokenomics.allocation.marketing', lang), percentage: 10, color: 'bg-yellow-400' },
    { category: t('tokenomics.allocation.liquidity', lang), percentage: 10, color: 'bg-red-400' }
  ]

  const useCases = [
    {
      icon: '🎮',
      title: t('tokenomics.utility.hatching.title', lang),
      description: t('tokenomics.utility.hatching.description', lang)
    },
    {
      icon: '🏆',
      title: t('tokenomics.utility.pvp.title', lang),
      description: t('tokenomics.utility.pvp.description', lang)
    },
    {
      icon: '🛒',
      title: t('tokenomics.utility.trading.title', lang),
      description: t('tokenomics.utility.trading.description', lang)
    },
    {
      icon: '🗳️',
      title: t('tokenomics.utility.governance.title', lang),
      description: t('tokenomics.utility.governance.description', lang)
    }
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            {t('tokenomics.title', lang)}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mobile-text-sm text-body">
            {t('tokenomics.subtitle', lang)}
          </p>
        </div>

        {/* Token Overview */}
        <div className="p-6 md:p-12 mb-12 md:mb-16 mobile-card glass-card animate-fadeInScale">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center mobile-grid">
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-title">1,000,000</div>
              <div className="mobile-text-sm text-body">
                {t('tokenomics.token.info.supply', lang)}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-title">DINO</div>
              <div className="mobile-text-sm text-body">
                {t('tokenomics.token.info.symbol', lang)}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-title">BSC</div>
              <div className="mobile-text-sm text-body">
                {t('tokenomics.token.info.blockchain', lang)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mobile-grid">
          {/* Token Allocation */}
          <div>
            <h3 className="text-2xl md:text-3xl font-cute mb-6 md:mb-8 text-center lg:text-left mobile-title-sm text-title">
              {t('tokenomics.allocation.title', lang)}
            </h3>
            <div className="space-y-4 md:space-y-6 mobile-space-y">
              {tokenAllocation.map((item, index) => (
                <div key={index} className="p-4 md:p-6 mobile-card glass-card animate-fadeInScale" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <span className="font-semibold mobile-text-sm text-title">{item.category}</span>
                    <span className="font-bold text-lg mobile-stats text-title">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200/50 rounded-full h-2 md:h-3">
                    <div
                      className={`${item.color} h-2 md:h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-2xl md:text-3xl font-cute mb-6 md:mb-8 text-center lg:text-left mobile-title-sm text-title">
              {t('tokenomics.useCases.title', lang)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mobile-grid">
              {useCases.map((useCase, index) => (
                <div key={index} className="p-4 md:p-6 transition-shadow duration-300 mobile-card glass-card animate-fadeInScale" style={{ animationDelay: `${(index + tokenAllocation.length) * 100}ms` }}>
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">{useCase.icon}</div>
                  <h4 className="font-semibold mb-1 md:mb-2 mobile-title-sm text-title">{useCase.title}</h4>
                  <p className="text-sm mobile-text-sm text-body">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Economic Model */}
        <div className="mt-12 md:mt-16 bg-gradient-primary rounded-3xl p-6 md:p-12 text-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-cute mb-3 md:mb-4 mobile-title-sm text-readable">
              {t('tokenomics.economicModel.title', lang)}
            </h3>
            <p className="text-lg md:text-xl opacity-95 mobile-text-sm">
              {t('tokenomics.economicModel.subtitle', lang)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mobile-grid">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎮</div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 mobile-title-sm text-readable">
                {t('tokenomics.economicModel.generation.title', lang)}
              </h4>
              <p className="opacity-95 mobile-text-sm">
                {t('tokenomics.economicModel.generation.description', lang)}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">💎</div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 mobile-title-sm text-readable">
                {t('tokenomics.economicModel.capture.title', lang)}
              </h4>
              <p className="opacity-95 mobile-text-sm">
                {t('tokenomics.economicModel.capture.description', lang)}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔄</div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 mobile-title-sm text-readable">
                {t('tokenomics.economicModel.recycling.title', lang)}
              </h4>
              <p className="opacity-95 mobile-text-sm">
                {t('tokenomics.economicModel.recycling.description', lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TokenomicsSection 