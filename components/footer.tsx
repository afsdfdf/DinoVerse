'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/i18n'

interface FooterProps {
  lang?: 'en' | 'zh'
}

const Footer: React.FC<FooterProps> = ({ lang = 'en' }) => {
  const footerLinks = [
    { name: t('nav.about', lang), href: '/about' },
    { name: t('nav.gameplay', lang), href: '/gameplay' },
    { name: t('nav.tokenomics', lang), href: '/tokenomics' },
    { name: t('nav.roadmap', lang), href: '/roadmap' },
    { name: t('nav.team', lang), href: '/team' },
    { name: t('nav.faq', lang), href: '/faq' }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Discord', href: '#', icon: '🎮' },
    { name: 'Telegram', href: '#', icon: '📱' }
  ]

  return (
    <footer className="bg-gradient-dark text-white">
      {/* 移动端简洁页脚 */}
      <div className="md:hidden flex flex-col items-center py-4 px-4">
        <Link href="/" className="flex items-center space-x-2 mb-3">
          <Image
            src="/logo.png"
            alt="DinoVerse Logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-lg font-cute">
            {t('nav.logo', lang)}
          </span>
        </Link>
        <p className="text-gray-300 text-xs text-center mb-3 max-w-xs">
          {t('footer.description', lang)}
        </p>
        <div className="flex space-x-3 mb-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              title={item.name}
            >
              <span className="text-sm">{item.icon}</span>
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-xs mb-2">
            {t('footer.copyright', lang)}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-xs">{t('footer.online', lang)}</span>
          </div>
        </div>
      </div>

      {/* 桌面端完整页脚 */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-3 md:mb-4">
              <Image
                src="/logo.png"
                alt="DinoVerse Logo"
                width={32}
                height={32}
                className="rounded-full md:w-10 md:h-10"
              />
              <span className="text-xl md:text-3xl font-cute">
                {t('nav.logo', lang)}
              </span>
            </Link>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base max-w-md">
              {t('footer.description', lang)}
            </p>
            <div className="flex space-x-2 md:space-x-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-7 h-7 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  title={item.name}
                >
                  <span className="text-sm md:text-lg">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('footer.product', lang)}</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t('footer.support', lang)}</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.slice(3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 md:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm text-center sm:text-left">
              {t('footer.copyright', lang)}
            </p>
            <div className="flex items-center space-x-3 md:space-x-4">
              <span className="text-gray-400 text-xs md:text-sm">{t('footer.poweredBy', lang)}</span>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-xs md:text-sm">{t('footer.online', lang)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 