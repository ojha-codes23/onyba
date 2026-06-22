import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react'
import EndSession from '../meetingmodal/EndSession';

const Header = () => {
   const pathname = usePathname()
   const route =useRouter()
   const [isNotiOpen, setIsNotiOpen] = useState(false);
   const notiRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (notiRef.current && !notiRef.current.contains(event.target as Node)) {
         setIsNotiOpen(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   const hideHeader= pathname.includes("/back-to-calendar") ||
  pathname.includes("/video-confrenece");

    return (
        <>
           {!hideHeader ?(

            <header className="gl-header">
                <div className="gl-header-left">

                    <button type="button" className="gl-sidebar-toggle" id="sidebarToggleBtn">
                        <img src="/images/header-toggle.svg" alt="Toggle" />
                    </button>
                    <div className="header-left-part">
                        <h1 className="gl-header-panel-title">Good morning, Dr. Rafael Costa <img src="/images/header-hand-icon.svg" alt="" /></h1>
                        <p className="header-left-text">Welcome back! Here's your overview for today.</p>
                    </div>
                </div>

                <div className="gl-header-right">

                    <div className="gl-notification-wrapper" ref={notiRef}>
                        <button type="button" className="gl-action-item gl-notification-trigger" id="notiTrigger" onClick={() => setIsNotiOpen(!isNotiOpen)}>
                            <img src="/images/notification-icon.svg" alt="Notifications" className="gl-header-icon" />
                            {/* <span className="gl-noti-badge">3</span> */}
                        </button>

                        <div className={`gl-notification-panel ${isNotiOpen ? 'show' : ''}`} id="notiPanel">
                            <div className="gl-noti-header">
                                <h3>Notifications</h3>
                            </div>

                            <div className="gl-noti-filters">
                                <button className="gl-filter-btn active">All</button>
                                <button className="gl-filter-btn outline">Unread (3)</button>
                            </div>

                            <div className="gl-noti-list">

                                <div className="gl-noti-item unread">
                                    <div className="gl-noti-content">
                                        <p className="gl-noti-title">Sanitas paid invoice INV-2838 <span className="gl-dot"></span></p>
                                        <span className="gl-noti-meta">Billing • 2h ago</span>
                                    </div>
                                    <button className="gl-mark-read">Mark as read</button>
                                </div>

                                <div className="gl-noti-item unread">
                                    <div className="gl-noti-content">
                                        <p className="gl-noti-title">New appointment scheduled for Dr. Ana Ruiz <span className="gl-dot"></span></p>
                                        <span className="gl-noti-meta">Appointments • 3h ago</span>
                                    </div>
                                    <button className="gl-mark-read">Mark as read</button>
                                </div>

                                <div className="gl-noti-item unread">
                                    <div className="gl-noti-content">
                                        <p className="gl-noti-title">Invoice INV-2839 is overdue (Lucia Hernández) <span className="gl-dot"></span></p>
                                        <span className="gl-noti-meta">Overdue • 5h ago</span>
                                    </div>
                                    <button className="gl-mark-read">Mark as read</button>
                                </div>

                                <div className="gl-noti-item">
                                    <div className="gl-noti-content">
                                        <p className="gl-noti-title">New appointment scheduled for Dr. Ana Ruiz</p>
                                        <span className="gl-noti-meta">Appointments • 1d ago</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <button type="button" className="gl-action-item">
                        <div className="inner-flag-drop-down">
                            <img src="/images/drop-down-header-flag.svg" alt="Language" className="gl-flag-icon" /><span>English</span> <img src="/images/drop-down-icon-flag.svg" alt="" />
                        </div>
                    </button>


                    <button type="button" className="gl-user-avatar-block">
                        <img src="/images/header-user-right-profile.svg" alt="User Profile" className="gl-user-avatar" />
                        <p className="profile-header-text">Dr. Rafael Costa <br /> <span>Stress Specialist</span></p>
                        <img src="/images/header-right-arrow.svg" alt="User Profile" className="gl-user-down-icon" />
                    </button>
                </div>

            </header>
           ):(
               <header className="gl-header">
            <div className="gl-header-left">
                {/* <!-- Smooth Modern Toggle Trigger Button --> */}

                <button type="button" className="gl-sidebar-toggle" id="sidebarToggleBtn">
                    <img src="images/header-toggle.svg" alt="Toggle"/>
                </button>
                <div className="header-left-part">
                    <h1 className="gl-header-panel-title">Back to calendar</h1>
                </div>
            </div>

            <div className="ps-session-info-block">
    <h2 className="ps-session-info-title">Session with John Carter</h2>
    
    <div className="ps-session-info-meta">
      <span className="ps-session-info-dot"></span>
      <span className="ps-session-info-text">
        Session Time: <span className="ps-session-info-duration">00:18:42</span>
      </span>
    </div>
  </div>
            {/* <!-- Header Right Actions (Search, Notification, Profile) --> */}
            <div className="gl-header-right">
                 <div className="action-btn-container">
{/*     
    <!-- Button 1: View Filled Form --> */}
    <button className="action-btn-base action-btn-filled">
      View Filled Form
    </button>

    {/* <!-- Button 2: End Session (With Calendar Check Icon) --> */}
    <button className="action-btn-base action-btn-outline"  data-bs-toggle="modal" data-bs-target="#endSessionModal">
      <span className="action-btn-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <polyline points="9 16 11 18 15 14"></polyline>
        </svg>
      </span>
      End Session
    </button>

  </div>
            </div>
        </header>
           )
            }


            <EndSession/>
        </>
    )
}

export default Header
