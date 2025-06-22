'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { t } from '@/lib/i18n'
import LanguageSwitcher from './language-switcher'

interface NavigationProps {
  lang?: 'en' | 'zh'
}

const Navigation: React.FC<NavigationProps> = ({ lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: t('nav.home', lang), href: `/${lang}`, icon: '🏠' },
    { name: t('nav.about', lang), href: `/${lang}/about`, icon: '🎮' },
    { name: t('nav.gameplay', lang), href: `/${lang}/gameplay`, icon: '🎯' },
    { name: t('nav.tokenomics', lang), href: `/${lang}/tokenomics`, icon: '💰' },
    { name: t('nav.roadmap', lang), href: `/${lang}/roadmap`, icon: '🗺️' },
    { name: t('nav.team', lang), href: `/${lang}/team`, icon: '👥' },
    { name: t('nav.faq', lang), href: `/${lang}/faq`, icon: '❓' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg mobile-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-container">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="DinoVerse Logo"
              width={28}
              height={28}
              className="rounded-full md:w-10 md:h-10 mobile-icon"
            />
            <span className="text-lg md:text-2xl font-cute gradient-text mobile-title-sm">
              {t('nav.logo', lang)}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-green transition-colors duration-200 text-sm xl:text-base"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <Link
              href={`/${lang}/play`}
              className="bg-gradient-primary text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xl:text-base mobile-btn"
            >
              🚀 {t('nav.play', lang)}
            </Link>
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLang={lang} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-green transition-colors duration-200 p-1"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg mobile-compact">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 mobile-text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                href={`/${lang}/play`}
                className="block bg-gradient-primary text-white px-3 py-2 rounded-full font-medium text-center mt-4 text-sm mobile-btn"
                onClick={() => setIsOpen(false)}
              >
                🚀 {t('nav.play', lang)}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 