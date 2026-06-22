import React from 'react'

const CancelSessionPopup = () => {
  return (
    <>
    <div className="modal fade" id="cancelSessionModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered onyba-cancel-dialog">
            <div className="modal-content onyba-cancel-content">
                
                <button type="button" className="onyba-cancel-close-cross" data-bs-dismiss="modal" aria-label="Close">
                    <img src="images/close-btn-popup.svg" alt="&times;"/>
                </button>

                <div className="modal-body onyba-cancel-body">
                    
                    <div className="onyba-cancel-icon-circle">
                        <img src="images/cross-session-icon.svg" alt="&times;"/>
                    </div>

                    <h5 className="onyba-cancel-title">Cancel Session?</h5>
                    
                    <p className="onyba-cancel-desc">
                        Are you sure you want to cancel this session?<br/>
                        The patient will be notified and any applicable policies will apply.
                    </p>

                    <div className="onyba-cancel-patient-chip">
                        <div className="onyba-cancel-meta-profile">
                            <img src="images/user-sesion-profile.svg" alt="John Doe" className="onyba-cancel-avatar"/>
                            <div className="onyba-cancel-profile-text">
                                <h6>John Doe</h6>
                                <span>18 yrs</span>
                            </div>
                        </div>
                        
                        <div className="onyba-cancel-meta-item">
                            <span className="onyba-cancel-meta-icon"><img src="images/session-date-time.svg" alt=""/></span>
                            <div className="onyba-cancel-meta-text">
                                <strong>Date & Time</strong>
                                <span>Apr 26, 2026</span>
                                <span>2:00 PM (50 Minutes)</span>
                            </div>
                        </div>

                        <div className="onyba-cancel-meta-item">
                            <span className="onyba-cancel-meta-icon"><img src="images/session-type.svg" alt=""/></span>
                            <div className="onyba-cancel-meta-text">
                                <strong>Session Type</strong>
                                <span className="onyba-cancel-type-badge">In-Person</span>
                            </div>
                        </div>
                    </div>

                    <div className="onyba-cancel-input-block">
                        <label className="onyba-cancel-label">Reason for cancellation</label>
                        <textarea className="onyba-cancel-textarea" placeholder="Share the reason for cancellation..."></textarea>
                    </div>

                    <div className="onyba-cancel-notice-banner">
                        <span className="onyba-cancel-notice-icon"><img src="images/note-icon.svg" alt=""/></span>
                        <p>
                            This session will be marked as cancelled. 
                            The patient may be eligible for a refund based on our cancellation policy.
                        </p>
                    </div>

                    <div className="onyba-cancel-actions-row">
                        <button type="button" className="onyba-cancel-btn-keep" data-bs-dismiss="modal">Keep Session</button>
                        <button type="button" className="onyba-cancel-btn-confirm">Yes, Cancel Session</button>
                    </div>

                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default CancelSessionPopup
