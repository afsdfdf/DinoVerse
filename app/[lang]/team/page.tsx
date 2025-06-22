'use client'

import React from 'react'
import TeamSection from '@/components/team-section'
import { t } from '@/lib/i18n'

interface TeamPageProps {
  params: Promise<{
    lang: 'en' | 'zh'
  }>
}

const TeamValues = ({ lang }: { lang: 'en' | 'zh' }) => {
  const values = [
    {
      icon: '🎮',
      title: t('team.values.gameplay.title', lang),
      description: t('team.values.gameplay.description', lang)
    },
    {
      icon: '🔒',
      title: t('team.values.security.title', lang),
      description: t('team.values.security.description', lang)
    },
    {
      icon: '🌱',
      title: t('team.values.innovation.title', lang),
      description: t('team.values.innovation.description', lang)
    }
  ];

  return (
    <section className="py-12 md:py-20" style={{ background: 'linear-gradient(to bottom, #f0f4ff, #e6e9f0)'}}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-cute text-gray-800 mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl">💎</span> {t('team.values.title', lang)}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('team.values.subtitle', lang)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {values.map((value, index) => (
            <div key={index} className="p-8">
               <div className="text-6xl mb-4 flex justify-center items-center">
                <span className={`p-4 rounded-full bg-white shadow-lg`}>{value.icon}</span>
              </div>
              <h3 className="text-2xl font-cute mb-2 text-gray-700">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TeamPage({ params }: TeamPageProps) {
  const [lang, setLang] = React.useState<'en' | 'zh'>('en')

  // 异步获取语言参数
  React.useEffect(() => {
    params.then(({ lang }) => setLang(lang))
  }, [params])

  return (
    <>
      <TeamSection lang={lang} />
      <TeamValues lang={lang} />
    </>
  )
} 