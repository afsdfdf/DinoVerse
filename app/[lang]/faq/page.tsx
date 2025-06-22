import React from 'react'
import { t } from '@/lib/i18n'
import FAQClient from './faq-client'

interface FAQPageProps {
  params: Promise<{
    lang: 'en' | 'zh';
  }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { lang } = await params;
  
  return <FAQClient lang={lang} />
} 