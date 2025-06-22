'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/i18n'

interface HeroSectionProps {
  lang?: 'en' | 'zh'
}

const HeroSection: React.FC<HeroSectionProps> = ({ lang = 'en' }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mobile-hero">
      {/* Floating Dinosaurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-fadeInUp">
          <Image
            src="/images/pteranodon.png"
            alt="Pteranodon"
            width={60}
            height={60}
            className="opacity-20 mobile-img md:w-20 md:h-20"
          />
        </div>
        <div className="absolute top-40 right-20 animate-fadeInLeft">
          <Image
            src="/images/triceratops.png"
            alt="Triceratops"
            width={70}
            height={70}
            className="opacity-20 mobile-img md:w-24 md:h-24"
          />
        </div>
        <div className="absolute bottom-20 left-20 animate-fadeInDown">
          <Image
            src="/images/stegosaurus.png"
            alt="Stegosaurus"
            width={65}
            height={65}
            className="opacity-20 mobile-img md:w-22 md:h-22"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mobile-container">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-7xl font-cute mb-4 md:mb-6 mobile-title-sm text-title">
            🦕 {t('hero.title', lang)}
          </h1>
          <p className="text-lg md:text-2xl mb-3 md:mb-4 font-medium mobile-text-sm text-body">
            {t('hero.subtitle', lang)}
          </p>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto mobile-text-sm text-body">
            {t('hero.description', lang)}
          </p>
        </div>

        <div className="animate-fadeInUp flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <Link
            href={`/${lang}/play`}
            className="text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mobile-btn btn-gradient"
          >
            {t('hero.playButton', lang)}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="bg-white/80 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mobile-btn border border-gray-200 text-body"
          >
            {t('hero.learnButton', lang)}
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fadeInUp mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mobile-grid">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text mobile-stats text-readable">1000+</div>
            <div className="text-gray-700 mt-1 md:mt-2 mobile-text-sm text-medium-contrast">
              {t('hero.stats.nftDinosaurs', lang)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text mobile-stats text-readable">5000+</div>
            <div className="text-gray-700 mt-1 md:mt-2 mobile-text-sm text-medium-contrast">
              {t('hero.stats.activePlayers', lang)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text mobile-stats text-readable">50+</div>
            <div className="text-gray-700 mt-1 md:mt-2 mobile-text-sm text-medium-contrast">
              {t('hero.stats.dailyBattles', lang)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold gradient-text mobile-stats text-readable">24/7</div>
            <div className="text-gray-700 mt-1 md:mt-2 mobile-text-sm text-medium-contrast">
              {t('hero.stats.onlineHunting', lang)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 