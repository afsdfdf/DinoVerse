'use client'

import React from 'react'
import { useState } from 'react'
import { t } from '@/lib/i18n'

interface FAQClientProps {
  lang: 'en' | 'zh'
}

export default function FAQClient({ lang }: FAQClientProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      category: t('faq.categories.game', lang),
      questions: [
        {
          question: t('faq.items.whatIs.q', lang),
          answer: t('faq.items.whatIs.a', lang)
        },
        {
          question: t('faq.items.howToStart.q', lang),
          answer: t('faq.items.howToStart.a', lang)
        },
        {
          question: t('faq.items.requirements.q', lang),
          answer: t('faq.items.requirements.a', lang)
        }
      ]
    },
    {
      category: t('faq.categories.token', lang),
      questions: [
        {
          question: t('faq.items.whichTokens.q', lang),
          answer: t('faq.items.whichTokens.a', lang)
        },
        {
          question: t('faq.items.exchange.q', lang),
          answer: t('faq.items.exchange.a', lang)
        },
        {
          question: t('faq.items.supply.q', lang),
          answer: t('faq.items.supply.a', lang)
        },
        {
          question: t('faq.items.howToGet.q', lang),
          answer: t('faq.items.howToGet.a', lang)
        }
      ]
    },
    {
      category: t('faq.categories.dino', lang),
      questions: [
        {
          question: t('faq.items.rarityLevels.q', lang),
          answer: t('faq.items.rarityLevels.a', lang)
        },
        {
          question: t('faq.items.rarity.q', lang),
          answer: t('faq.items.rarity.a', lang)
        },
        {
          question: t('faq.items.getRare.q', lang),
          answer: t('faq.items.getRare.a', lang)
        }
      ]
    },
    {
      category: t('faq.categories.support', lang),
      questions: [
        {
          question: t('faq.items.wallets.q', lang),
          answer: t('faq.items.wallets.a', lang)
        },
        {
          question: t('faq.items.networks.q', lang),
          answer: t('faq.items.networks.a', lang)
        },
        {
          question: t('faq.items.security.q', lang),
          answer: t('faq.items.security.a', lang)
        },
        {
          question: t('faq.items.technicalIssues.q', lang),
          answer: t('faq.items.technicalIssues.a', lang)
        }
      ]
    }
  ]

  return (
    <>
      <section className="pt-24 pb-16 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-cute gradient-text mb-6">
              {t('faq.title', lang)}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq.subtitle', lang)}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ内容 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center">
                <h2 className="text-3xl font-cute gradient-text mb-8">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 4 + itemIndex
                    const isOpen = openItems.includes(globalIndex)
                    
                    return (
                      <div
                        key={itemIndex}
                        className="dino-card overflow-hidden animate-fadeInUp"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-cute text-gray-800 pr-4">
                            {item.question}
                          </h3>
                          <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        
                        <div
                          className={`overflow-hidden ${isOpen ? '' : 'hidden'}`}
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系支持 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-cute gradient-text mb-6">
              {t('faq.contact.title', lang)}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('faq.contact.subtitle', lang)}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="dino-card p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-cute mb-3">{t('faq.contact.discord.title', lang)}</h3>
                <p className="text-gray-600 mb-4">
                  {t('faq.contact.discord.description', lang)}
                </p>
                <a
                  href="#"
                  className="bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-primary-blue/90 transition-colors"
                >
                  {t('faq.contact.discord.button', lang)}
                </a>
              </div>
              
              <div className="dino-card p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-cute mb-3">{t('faq.contact.email.title', lang)}</h3>
                <p className="text-gray-600 mb-4">
                  {t('faq.contact.email.description', lang)}
                </p>
                <a
                  href="mailto:support@dinoverse.com"
                  className="bg-primary-green text-white px-6 py-2 rounded-full hover:bg-primary-green/90 transition-colors"
                >
                  {t('faq.contact.email.button', lang)}
                </a>
              </div>
              
              <div className="dino-card p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-cute mb-3">{t('faq.contact.docs.title', lang)}</h3>
                <p className="text-gray-600 mb-4">
                  {t('faq.contact.docs.description', lang)}
                </p>
                <a
                  href="#"
                  className="bg-primary-purple text-white px-6 py-2 rounded-full hover:bg-primary-purple/90 transition-colors"
                >
                  {t('faq.contact.docs.button', lang)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 