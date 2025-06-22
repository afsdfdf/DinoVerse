'use client'

import React from 'react'
import { t } from '@/lib/i18n'

interface RoadmapPageProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default function RoadmapPage({ params }: RoadmapPageProps) {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en')

  // 异步获取语言参数
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang))
  }, [params])

  const roadmapData = [
    {
      phase: t('roadmap.phases.phase1.phase', lang),
      title: t('roadmap.phases.phase1.title', lang),
      period: t('roadmap.phases.phase1.period', lang),
      status: 'completed',
      items: [
        t('roadmap.phases.phase1.items.concept', lang),
        t('roadmap.phases.phase1.items.architecture', lang),
        t('roadmap.phases.phase1.items.contracts', lang),
        t('roadmap.phases.phase1.items.design', lang),
        t('roadmap.phases.phase1.items.community', lang),
        t('roadmap.phases.phase1.items.whitepaper', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase2.phase', lang),
      title: t('roadmap.phases.phase2.title', lang),
      period: t('roadmap.phases.phase2.period', lang),
      status: 'completed',
      items: [
        t('roadmap.phases.phase2.items.eggs', lang),
        t('roadmap.phases.phase2.items.hatching', lang),
        t('roadmap.phases.phase2.items.pvp', lang),
        t('roadmap.phases.phase2.items.hunting', lang),
        t('roadmap.phases.phase2.items.wallet', lang),
        t('roadmap.phases.phase2.items.ui', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase3.phase', lang),
      title: t('roadmap.phases.phase3.title', lang),
      period: t('roadmap.phases.phase3.period', lang),
      status: 'current',
      items: [
        t('roadmap.phases.phase3.items.market', lang),
        t('roadmap.phases.phase3.items.economy', lang),
        t('roadmap.phases.phase3.items.referral', lang),
        t('roadmap.phases.phase3.items.evolution', lang),
        t('roadmap.phases.phase3.items.mobile', lang),
        t('roadmap.phases.phase3.items.governance', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase4.phase', lang),
      title: t('roadmap.phases.phase4.title', lang),
      period: t('roadmap.phases.phase4.period', lang),
      status: 'upcoming',
      items: [
        t('roadmap.phases.phase4.items.crosschain', lang),
        t('roadmap.phases.phase4.items.dao', lang),
        t('roadmap.phases.phase4.items.integration', lang),
        t('roadmap.phases.phase4.items.esports', lang),
        t('roadmap.phases.phase4.items.metaverse', lang),
        t('roadmap.phases.phase4.items.vr', lang)
      ]
    },
    {
      phase: t('roadmap.phases.phase5.phase', lang),
      title: t('roadmap.phases.phase5.title', lang),
      period: t('roadmap.phases.phase5.period', lang),
      status: 'upcoming',
      items: [
        t('roadmap.phases.phase5.items.multilang', lang),
        t('roadmap.phases.phase5.items.marketing', lang),
        t('roadmap.phases.phase5.items.partners', lang),
        t('roadmap.phases.phase5.items.app', lang),
        t('roadmap.phases.phase5.items.vr', lang),
        t('roadmap.phases.phase5.items.alliance', lang)
      ]
    }
  ]

  const milestones = [
    {
      title: t('roadmap.milestones.contracts.title', lang),
      date: t('roadmap.milestones.contracts.date', lang),
      status: 'completed',
      description: t('roadmap.milestones.contracts.description', lang)
    },
    {
      title: t('roadmap.milestones.beta.title', lang),
      date: t('roadmap.milestones.beta.date', lang),
      status: 'completed',
      description: t('roadmap.milestones.beta.description', lang)
    },
    {
      title: t('roadmap.milestones.public.title', lang),
      date: t('roadmap.milestones.public.date', lang),
      status: 'current',
      description: t('roadmap.milestones.public.description', lang)
    },
    {
      title: t('roadmap.milestones.token.title', lang),
      date: t('roadmap.milestones.token.date', lang),
      status: 'upcoming',
      description: t('roadmap.milestones.token.description', lang)
    },
    {
      title: t('roadmap.milestones.mobile.title', lang),
      date: t('roadmap.milestones.mobile.date', lang),
      status: 'upcoming',
      description: t('roadmap.milestones.mobile.description', lang)
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'current':
        return 'bg-blue-500'
      case 'upcoming':
        return 'bg-gray-300'
      default:
        return 'bg-gray-300'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return t('roadmap.status.completed', lang)
      case 'current':
        return t('roadmap.status.current', lang)
      case 'upcoming':
        return t('roadmap.status.upcoming', lang)
      default:
        return t('roadmap.status.planned', lang)
    }
  }

  return (
    <>
      <section className="pt-24 pb-16 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-cute gradient-text mb-6">
              🗺️ {t('roadmap.page.title', lang)}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('roadmap.page.subtitle', lang)}
            </p>
          </div>
        </div>
      </section>

      {/* 路线图时间线 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('roadmap.phases.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('roadmap.phases.subtitle', lang)}
            </p>
          </div>

          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {roadmapData.map((phase, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* 时间线节点 */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full ${getStatusColor(phase.status)} border-4 border-white shadow-lg`}></div>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="glass-card p-8 max-w-lg mx-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-blue-500">
                          {phase.phase}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(phase.status)}`}>
                          {getStatusText(phase.status)}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-cute mb-2 text-title">
                        {phase.title}
                      </h3>
                      
                      <p className="text-gray-500 mb-4">
                        {phase.period}
                      </p>
                      
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-body">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 重要里程碑 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('roadmap.milestones.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('roadmap.milestones.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="glass-card p-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-cute text-title">
                    {milestone.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(milestone.status)}`}>
                    {getStatusText(milestone.status)}
                  </span>
                </div>
                
                <p className="text-sm text-blue-500 font-medium mb-3">
                  {milestone.date}
                </p>
                
                <p className="text-body text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展愿景 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cute gradient-text mb-4">
              {t('roadmap.vision.title', lang)}
            </h2>
            <p className="text-xl text-gray-600">
              {t('roadmap.vision.subtitle', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-cute mb-3">{t('roadmap.vision.global.title', lang)}</h3>
              <p className="text-gray-600">
                {t('roadmap.vision.global.description', lang)}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-cute mb-3">{t('roadmap.vision.ecosystem.title', lang)}</h3>
              <p className="text-gray-600">
                {t('roadmap.vision.ecosystem.description', lang)}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-cute mb-3">{t('roadmap.vision.innovation.title', lang)}</h3>
              <p className="text-gray-600">
                {t('roadmap.vision.innovation.description', lang)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 