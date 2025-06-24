import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'zh']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname
    
    // Skip static resources and API routes
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/images') ||
      pathname.startsWith('/logo') ||
      pathname.startsWith('/backgrounds') ||
      pathname.startsWith('/favicon') ||
      pathname.includes('.') || // Files with extensions
      pathname.includes('mine-demo') // Skip the mine-demo directory
    ) {
      return NextResponse.next()
    }

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // If pathname doesn't have locale, redirect to default locale
    if (!pathnameHasLocale) {
      const locale = defaultLocale
      const newPath = pathname === '/' ? `/${locale}/` : `/${locale}${pathname}`
      const newUrl = new URL(newPath, request.url)
      return NextResponse.redirect(newUrl)
    }

    return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    // Fallback to next() if there's an error
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, static files
    '/((?!_next|api|favicon.ico|images|logo|backgrounds|.*\\.|mine-demo).*)',
  ],
} 