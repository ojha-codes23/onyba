import React from 'react'

const VideoConfrence = () => {
  return (
    <>
      <main className="gl-content-body">
        <div className="ps-session-page-grid">

          <div className="ps-session-video-panel">

            <div className="ps-session-video-viewport">

              <div className="ps-session-overlay-badge-top">
                <span className="ps-session-mic-active-waves">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v1a7 7 0 0 1-14 0v-1" /></svg>
                </span>
                John Carter
              </div>

              <div className="ps-session-volume-slider-container">
                <div className="ps-session-volume-track">
                  <div className="ps-session-volume-fill"></div>
                  <div className="ps-session-volume-handle"></div>
                </div>
                <svg className="ps-session-volume-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" /></svg>
              </div>

              <div className="ps-session-pip-doctor-box">
                <div className="ps-session-pip-label">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v1a7 7 0 0 1-14 0v-1" /></svg>
                  You (Dr. Rafael Costa)
                </div>
              </div>

            </div>

            <div className="ps-session-video-controls-dock">
              <button className="ps-session-dock-btn">
                <div className="ps-session-dock-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8" /></svg>
                </div>
                Mute
              </button>
              <button className="ps-session-dock-btn">
                <div className="ps-session-dock-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z" /></svg>
                </div>
                Camera
              </button>
              <button className="ps-session-dock-btn">
                <div className="ps-session-dock-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                Chat
              </button>
              <button className="ps-session-dock-btn ps-session-dock-btn-end">
                <div className="ps-session-dock-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a1 1 0 0 1 1-.27 11.28 11.28 0 0 0 3.51.56 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A16 16 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.28 11.28 0 0 0 .56 3.51 1 1 0 0 1-.27 1l-1.27 1.27a16 16 0 0 0 2.6 3.41z" /></svg>
                </div>
                End Call
              </button>
            </div>

          </div>

          <div className="ps-session-right-sidebar">

            <div className="ps-session-module-card">
              <div className="ps-session-card-head">
                <h3 className="ps-session-card-title">
                  <svg className="ps-session-head-icon-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3Z" /><path d="M12 14c-4.418 0-8 2.239-8 5v2h16v-2c0-2.761-3.582-5-8-5Z" /></svg>
                  Private Notes <span className="ps-session-title-aside">(Only you)</span>
                </h3>
                <button className="ps-session-btn-clear">Clear</button>
              </div>
              <textarea className="ps-session-notes-textarea" placeholder="Write your private observation during the session..."></textarea>
              <div className="ps-session-notes-toolbar">
                <div className="ps-session-toolbar-left-items">
                  <span>14 ▾</span>
                  <span>⚫ ▾</span>
                  <strong>B</strong>
                  <em>I</em>
                </div>
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </div>
              <button className="ps-session-btn-save-note">Save Notes</button>
            </div>

            <div className="ps-session-module-card">
              <div className="ps-session-card-head">
                <h3 className="ps-session-card-title">
                  <svg className="ps-session-head-icon-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  Live Chat
                </h3>
              </div>
              <div className="ps-session-chat-timeline">
                <div className="ps-session-chat-day-label">Today</div>

                <div className="ps-session-chat-msg-bubble-line">
                  <div className="ps-session-chat-sender-avatar"><img src="/images/header-user-right-profile.svg" alt="User Profile" style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden' }} /></div>
                  <div className="ps-session-msg-wrapper-inner">
                    <div className="ps-session-msg-text-bubble">Hey, glad you came back. How have things been since we last talked?</div>
                    <span className="ps-session-chat-time-text">10:32 AM</span>
                  </div>
                </div>

                <div className="ps-session-chat-msg-bubble-line ps-session-msg-row-user">
                  <div className="ps-session-chat-sender-avatar"><img src="/images/header-user-right-profile.svg" alt="User Profile" style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden' }} /></div>
                  <div className="ps-session-msg-wrapper-inner">
                    <div className="ps-session-msg-text-bubble">Hey, glad you came back. How have things been since we last talked?</div>
                    <span className="ps-session-chat-time-text">10:32 AM ✓</span>
                  </div>
                </div>
              </div>
              <div className="ps-session-chat-input-row">
                <input type="text" className="ps-session-chat-text-input" placeholder="Type a message..." />
                <button className="ps-session-chat-btn-send">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </div>

            <div className="ps-session-module-card">
              <div className="ps-session-card-head">
                <h3 className="ps-session-card-title">
                  <svg className="ps-session-head-icon-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  Documents & Attachments
                </h3>
              </div>
              <div className="ps-session-tabs-row">
                <div className="ps-session-tab ps-session-active-tab">Shared by you <span className="ps-session-badge-count">1</span></div>
                <div className="ps-session-tab">Shared by Patient <span className="ps-session-badge-count">0</span></div>
              </div>
              <div className="ps-session-file-attachment-row">
                <div>
                  <div className="ps-session-file-title">Anxiety_Worksheet.pdf</div>
                  <div className="ps-session-file-meta">Uploaded on May 24, 2026</div>
                </div>
                <a href="#" className="ps-session-view-link">View ▾</a>
              </div>
              <div className="ps-session-upload-dashed-dropzone">
                <p className="ps-session-upload-main-text">Upload Document</p>
                <p className="ps-session-upload-sub-text">Allowed: PDF, DOC, DOCX, JPG, PNG (Max: 10MB)</p>
              </div>
            </div>

            <div className="ps-session-module-card">
              <div className="ps-session-card-head">
                <h3 className="ps-session-card-title">
                  <svg className="ps-session-head-icon-plum" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  Participants <span className="ps-session-title-aside">(3)</span>
                </h3>
              </div>
              <div className="ps-session-participants-list-holder">

                <div className="ps-session-participant-line">
                  <div className="ps-session-participant-meta">
                    <div className="ps-session-chat-sender-avatar">
                      <img src="/images/header-user-right-profile.svg" alt="User Profile" style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden' }} />
                    </div>
                    <span>John Doe</span>
                  </div>
                  <svg className="ps-session-status-icon-right ps-session-mic-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="9" width="3" height="6" rx="1.5" /><rect x="10" y="5" width="3" height="14" rx="1.5" /><rect x="16" y="7" width="3" height="10" rx="1.5" /></svg>
                </div>

                <div className="ps-session-participant-line">
                  <div className="ps-session-participant-meta">
                    <div className="ps-session-chat-sender-avatar"> <img src="/images/header-user-right-profile.svg" alt="User Profile" style={{ width: '25px', height: '25px', borderRadius: '50%', overflow: 'hidden' }} /></div>
                    <span>Dr. Rafael Costa</span>
                  </div>
                  <svg className="ps-session-status-icon-right ps-session-mic-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" /></svg>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>

    </>
  )
}

export default VideoConfrence

