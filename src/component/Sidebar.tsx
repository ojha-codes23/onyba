'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logout from './Logout'

const navItems = [
  { href: '/dashboard', icon: '/images/sidebar/1.svg', label: 'Dashboard' },
  { href: '/patient', icon: '/images/sidebar/2.svg', label: 'Patients' },
  { href: '/clinic-patients', icon: '/images/sidebar/3.svg', label: 'Clinic Patients' },
  { href: '/agenda', icon: '/images/sidebar/4.svg', label: 'Agenda' },
  { href: '/earning', icon: '/images/sidebar/5.svg', label: 'Earnings & Reports' },
  { href: '/personal-profile', icon: '/images/sidebar/6.svg', label: 'Profile' },
  {
    href: '#',
    icon: '/images/sidebar/7.svg',
    label: 'Logout',
    'data-bs-toggle': 'modal',
    'data-bs-target': '#onybaLogoutModal'
  }
  // {href: '#',icon: '/images/sidebar/7.svg', label: 'Logout','data-bs-toggle': 'modal','data-bs-target': '#logout'}
]


const Sidebar = () => {

  const pathname = usePathname()
  const hideSidebar = pathname.includes("/video-confrenece")

  return (

    <>

      <aside className="gl-sidebar">

        {/* Brand Block */}
        <div className="gl-brand-block">
          {/* Adjusted to absolute paths assuming they live in /public/images/ */}
          <img src="/images/inner-logo.svg" alt="GrantLink NC" className="gl-logo-full" />
          <img src="/images/inner-logo.svg" alt="GL" className="gl-logo-collapsed" />
        </div>

        {/* Navigation Wrapper */}
        <div className="gl-navigation-wrapper">
          <ul className="gl-sidebar-menu">

            {/* {navItems.map(({ href, icon, label,"data-bs-target" }) => (
                <li key={href} className={`gl-menu-item${pathname === href || pathname.startsWith(href + '/') ? ' active' : ''}`}>
                  <Link href={href} className="gl-menu-link"  data-bs-toggle={item['data-bs-toggle']}
                      data-bs-target={item['data-bs-target']}>
                    <img src={icon} className="gl-menu-icon" alt="" />
                    <span className="gl-menu-text">{label}</span>
                  </Link>
                </li>
              ))} */}


            {navItems.map(
              ({ href, icon, label, 'data-bs-toggle': dataBsToggle, 'data-bs-target': dataBsTarget }) => {
                // Prevents the '#' from triggering active states incorrectly
                const isActive = href !== '#' && (pathname === href || pathname.startsWith(href + "/"));

                return (
                  <li
                    key={label}
                    className={`gl-menu-item${isActive ? " active" : ""}`}
                  >
                    <Link
                      href={href}
                      className="gl-menu-link"
                      data-bs-toggle={dataBsToggle}
                      data-bs-target={dataBsTarget}
                      // FIX: Prevents Next.js from routing to "#" and breaking Bootstrap's click handler
                      onClick={(e) => {
                        if (href === '#') {
                          e.preventDefault();
                        }
                      }}
                    >
                      <img src={icon} className="gl-menu-icon" alt="" />
                      <span className="gl-menu-text">{label}</span>
                    </Link>
                  </li>
                );
              }
            )}

          </ul>
        </div>
      </aside>
      <Logout />

    </>
  )
}

export default Sidebar