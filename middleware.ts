import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'zh']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 跳过静态资源
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/logo') ||
    pathname.startsWith('/backgrounds') ||
    pathname.includes('.') // 包含文件扩展名的路径
  ) {
    return NextResponse.next()
  }

  // 检查路径是否已经包含语言前缀
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}` && pathname !== `/${locale}/`
  )

  // 如果路径没有语言前缀，重定向到默认语言
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    const newPath = pathname === '/' ? `/${locale}/` : `/${locale}${pathname}`
    return NextResponse.redirect(
      new URL(newPath, request.url)
    )
  }
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next)、API 路由、静态资源等
    '/((?!_next|api|favicon.ico|images|logo|backgrounds|.*\\.).*)',
  ],
} 