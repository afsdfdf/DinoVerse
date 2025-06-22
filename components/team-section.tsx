'use client'

import React from 'react'
import Image from 'next/image'
import { t } from '@/lib/i18n'

interface TeamSectionProps {
  lang?: 'en' | 'zh'
}

const TeamSection: React.FC<TeamSectionProps> = ({ lang = 'en' }) => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: t('team.members.alex.role', lang),
      description: t('team.members.alex.description', lang),
      avatar: '/images/brontosaurus.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Kim',
      role: t('team.members.sarah.role', lang),
      description: t('team.members.sarah.description', lang),
      avatar: '/images/pteranodon.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Mike Johnson',
      role: t('team.members.mike.role', lang),
      description: t('team.members.mike.description', lang),
      avatar: '/images/stegosaurus.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Wang',
      role: t('team.members.lisa.role', lang),
      description: t('team.members.lisa.description', lang),
      avatar: '/images/triceratops.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'David Lee',
      role: t('team.members.david.role', lang),
      description: t('team.members.david.description', lang),
      avatar: '/images/velociraptor.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emma Wilson',
      role: t('team.members.emma.role', lang),
      description: t('team.members.emma.description', lang),
      avatar: '/images/tyrannosaurus.png',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ]

  const advisors = [
    {
      name: 'Dr. Robert Smith',
      role: t('team.advisors.robert.role', lang),
      avatar: '/images/velociraptor.png',
      description: t('team.advisors.robert.description', lang)
    },
    {
      name: 'Emily Davis',
      role: t('team.advisors.emily.role', lang),
      avatar: '/images/tyrannosaurus.png',
      description: t('team.advisors.emily.description', lang)
    }
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            {t('team.title', lang)}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mobile-text-sm text-body">
            {t('team.subtitle', lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mobile-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 md:p-8 transition-all duration-300 transform hover:scale-105 text-center mobile-team-card glass-card animate-fadeInScale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 md:mb-6">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto border-4 border-white/50 mobile-avatar md:w-30 md:h-30"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2 mobile-title-sm text-title">
                {member.name}
              </h3>
              
              <p className="font-medium mb-3 md:mb-4 mobile-text-sm text-purple-500">
                {member.role}
              </p>
              
              <p className="text-sm leading-relaxed mb-4 md:mb-6 mobile-text-sm text-body">
                {member.description}
              </p>
              
              <div className="flex justify-center space-x-3 md:space-x-4">
                <a
                  href={member.social.twitter}
                  className="w-7 h-7 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200 mobile-icon"
                >
                  <span className="text-white text-xs md:text-sm">🐦</span>
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 mobile-icon"
                >
                  <span className="text-white text-xs md:text-sm">💼</span>
                </a>
                <a
                  href={member.social.github}
                  className="w-7 h-7 md:w-8 md:h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-200 mobile-icon"
                >
                  <span className="text-white text-xs md:text-sm">📝</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-12 md:mt-20 bg-gradient-primary rounded-3xl p-6 md:p-12 text-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-cute mb-3 md:mb-4 mobile-title-sm text-readable">
              {t('team.stats.title', lang)}
            </h3>
            <p className="text-lg md:text-xl opacity-95 mobile-text-sm">
              {t('team.stats.subtitle', lang)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mobile-grid">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">6</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('team.stats.members', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">50+</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('team.stats.experience', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">20+</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('team.stats.projects', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 mobile-stats text-readable">24/7</div>
              <div className="text-sm md:text-lg opacity-95 mobile-text-sm">
                {t('team.stats.support', lang)}
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            {t('team.join.title', lang)}
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto mobile-text-sm text-body">
            {t('team.join.subtitle', lang)}
          </p>
          <a
            href="/contact"
            className="text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block mobile-btn btn-gradient"
          >
            {t('team.join.button', lang)}
          </a>
        </div>

        {/* 顾问团队 */}
        <div className="mb-20">
          <h3 className="text-3xl font-cute gradient-text text-center mb-12">
            {t('team.advisors.title', lang)}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="dino-card p-6 flex items-center space-x-6 animate-fadeInUp"
              >
                <Image
                  src={advisor.avatar}
                  alt={advisor.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white/50"
                />
                <div>
                  <h4 className="text-xl font-cute text-gray-800 mb-2">{advisor.name}</h4>
                  <p className="font-medium text-purple-500 mb-2">{advisor.role}</p>
                  <p className="text-gray-600 text-sm">{advisor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 团队价值观 */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-cute mb-4">💎 {t('team.values.title', lang)}</h3>
            <p className="text-xl opacity-90">{t('team.values.subtitle', lang)}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-3">{t('team.values.gameplay.title', lang)}</h4>
              <p className="opacity-90">
                {t('team.values.gameplay.description', lang)}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-3">{t('team.values.security.title', lang)}</h4>
              <p className="opacity-90">
                {t('team.values.security.description', lang)}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-xl font-bold mb-3">{t('team.values.innovation.title', lang)}</h4>
              <p className="opacity-90">
                {t('team.values.innovation.description', lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection 