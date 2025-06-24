import { NextRequest, NextResponse } from 'next/server'

// 简化的中间件，只处理根路径
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 只处理根路径，其他所有路径都直接通过
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en/', request.url))
  }
  
  // 所有其他请求直接通过
  return NextResponse.next()
}

// 只匹配根路径
export const config = {
  matcher: ['/'],
} 