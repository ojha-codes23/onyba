import React from 'react'
import CompleteSession from './CompleteSession'

const EndSession = () => {
  return (
   <>
   
   <div className="modal fade" id="endSessionModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered onyba-end-dialog">
            <div className="modal-content onyba-end-content">
                
                <button type="button" className="onyba-end-close-cross" data-bs-dismiss="modal" aria-label="Close">
                    <img src="images/close-btn-popup.svg" alt="&times;"/>
                </button>

                <div className="modal-body onyba-end-body">
                    
                    <div className="onyba-end-icon-circle">
                        <img src="images/call-cut.svg" alt="End Call"/>
                    </div>

                    <h5 className="onyba-end-title">End Session?</h5>
                    
                    <p className="onyba-end-desc">
                        Are you sure want to end this session?<br/>
                        The session recording will stop and you can proceed to add notes.
                    </p>

                    <div className="onyba-end-info-panel">
                        
                        <div className="onyba-end-log-row">
                            <span className="onyba-end-check-icon"><img src="images/check-icon-popup.svg" alt=""/></span>
                            <p>Audio/Video recording will be saved</p>
                        </div>

                        <div className="onyba-end-log-row">
                            <span className="onyba-end-check-icon"><img src="images/check-icon-popup.svg" alt=""/></span>
                            <p>AI summary will be generated shortly</p>
                        </div>

                        <div className="onyba-end-log-row">
                            <span className="onyba-end-check-icon"><img src="images/check-icon-popup.svg" alt=""/></span>
                            <p>You can add private & public notes after ending</p>
                        </div>

                    </div>

                    <div className="onyba-end-actions-row">
                        <button type="button" className="onyba-end-btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#sessionCompletedModal" className="onyba-end-btn-confirm">End Session</button>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <CompleteSession/>
   
   </>
  )
}

export default EndSession
