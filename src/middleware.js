import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = request.cookies.get("token")?.value;    
    const pathname = request.nextUrl.pathname;

    const isprotected = pathname.startsWith("/admin/");
    const isApiProtected = pathname.startsWith("/api/");
    const isAdminRoot = pathname === '/admin';
    if (isAdminRoot && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }
//     if (isApiProtected && !token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
    if(isprotected && !token){
        return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher:["/admin", '/admin/:path*', '/api/:path*']
}