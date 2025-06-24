import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'zh']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  // Get the pathname from the request
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/logo') ||
    pathname.startsWith('/backgrounds') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') ||
    pathname.includes('mine-demo')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If no locale is present, redirect to the default locale
  if (!hasLocale) {
    const newPath = pathname === '/' ? `/${defaultLocale}/` : `/${defaultLocale}${pathname}`
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (static images)
     * - logo (logo files)
     * - backgrounds (background images)
     * - mine-demo (demo directory)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|logo|backgrounds|mine-demo|.*\\.).*)',
  ],
} 