'use client'

import React from 'react'
import { t } from '@/lib/i18n'

interface RoadmapSectionProps {
  lang?: 'en' | 'zh'
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ lang = 'en' }) => {
  const roadmapData = [
    {
      phase: t('roadmap.phases.phase1.title', lang),
      title: t('roadmap.phases.phase1.name', lang),
      period: 'Q1 2024',
      status: 'completed',
      items: [
        t('roadmap.phases.phase1.items.contract', lang),
        t('roadmap.phases.phase1.items.mechanics', lang),
        t('roadmap.phases.phase1.items.nft', lang),
        t('roadmap.phases.phase1.items.token', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase2.title', lang),
      title: t('roadmap.phases.phase2.name', lang),
      period: 'Q2 2024',
      status: 'in-progress',
      items: [
        t('roadmap.phases.phase2.items.hatching', lang),
        t('roadmap.phases.phase2.items.hunting', lang),
        t('roadmap.phases.phase2.items.pvp', lang),
        t('roadmap.phases.phase2.items.marketplace', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase3.title', lang),
      title: t('roadmap.phases.phase3.name', lang),
      period: 'Q3 2024',
      status: 'upcoming',
      items: [
        t('roadmap.phases.phase3.items.mobile', lang),
        t('roadmap.phases.phase3.items.social', lang),
        t('roadmap.phases.phase3.items.guild', lang),
        t('roadmap.phases.phase3.items.crosschain', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase4.title', lang),
      title: t('roadmap.phases.phase4.name', lang),
      period: 'Q4 2024',
      status: 'upcoming',
      items: [
        t('roadmap.phases.phase4.items.3d', lang),
        t('roadmap.phases.phase4.items.vr', lang),
        t('roadmap.phases.phase4.items.land', lang),
        t('roadmap.phases.phase4.items.creator', lang)
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-blue-500'
      case 'upcoming':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return t('roadmap.status.completed', lang)
      case 'in-progress':
        return t('roadmap.status.inProgress', lang)
      case 'upcoming':
        return t('roadmap.status.upcoming', lang)
      default:
        return t('roadmap.status.planned', lang)
    }
  }

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            {t('roadmap.title', lang)}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mobile-text-sm text-body">
            {t('roadmap.subtitle', lang)}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200/70"></div>

          <div className="space-y-8 md:space-y-12 mobile-space-y">
            {roadmapData.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-4 border-gray-300 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="p-4 md:p-6 transition-shadow duration-300 mobile-card glass-card animate-fadeInScale" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <span className="text-xs md:text-sm font-semibold text-purple-500 mobile-text-sm">
                        {phase.phase}
                      </span>
                      <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(phase.status)}`}>
                        {getStatusText(phase.status)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-cute mb-1 md:mb-2 mobile-title-sm text-title">
                      {phase.title}
                    </h3>
                    
                    <p className="mb-3 md:mb-4 mobile-text-sm text-body">
                      {phase.period}
                    </p>
                    
                    <ul className="space-y-1 md:space-y-2 mobile-space-y">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center mobile-text-sm text-body">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full mr-2 md:mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Summary */}
        <div className="mt-12 md:mt-20 bg-gradient-primary rounded-3xl p-6 md:p-12 text-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-cute mb-3 md:mb-4 mobile-title-sm text-readable">
              {t('roadmap.summary.title', lang)}
            </h3>
            <p className="text-lg md:text-xl opacity-95 mobile-text-sm">
              {t('roadmap.summary.subtitle', lang)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mobile-grid">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">4</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('roadmap.summary.phases', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">12</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('roadmap.summary.features', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">24/7</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('roadmap.summary.development', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">∞</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('roadmap.summary.possibilities', lang)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection 