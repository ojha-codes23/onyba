'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Header from './common/Header'

// Pages that should display WITHOUT sidebar and header
const noShellRoutes = ['/profile', '/login', '/logout', '/otp']

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isNoShell = noShellRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  )

  if (isNoShell) {
    return <>{children}</>
  }

  return (
    <div className="gl-dashboard-layout" id="dashboardLayout">
      <Sidebar />
      <div className="gl-main-content-wrapper">
        <Header />
        {children}
      </div>
    </div>
  )
}
