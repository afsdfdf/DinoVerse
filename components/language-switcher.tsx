'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { t } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLang: 'en' | 'zh'
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLang)

  const handleLanguageChange = (newLang: 'en' | 'zh') => {
    setIsOpen(false)
    
    // 从当前路径中提取语言部分并替换
    const pathWithoutLang = pathname.replace(/^\/(en|zh)/, '') || '/'
    const newPath = `/${newLang}${pathWithoutLang}`
    
    router.push(newPath)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-medium"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code as 'en' | 'zh')}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  currentLang === language.code ? 'bg-primary-green/10 text-primary-green' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLang === language.code && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher 