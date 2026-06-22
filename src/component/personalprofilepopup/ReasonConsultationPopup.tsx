import React from 'react'

const ReasonConsultationPopup = () => {
  return (
    <>
      <div className="modal fade" id="reasonConsultation" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered onyba-spec-bootstrap-dialog">
        <div className="modal-content onyba-spec-bootstrap-content">
            
            <div className="onyba-spec-pop-header-row">
                <div className="onyba-spec-pop-title-box">
                    <span className="onyba-spec-pop-icon-badge"><img src="images/star-popup-icon.svg" alt=""/></span>
                    <h2>Reason for Consultation</h2>
                </div>
                <button type="button" className="onyba-spec-pop-close-btn" data-bs-dismiss="modal" aria-label="Close">
                    <img src="images/close-btn-popup.svg" alt="&times;"/>
                </button>
            </div>

            <div className="onyba-spec-pop-main-card">
                
                <div className="onyba-spec-pop-accordion-bar" 
                     data-bs-toggle="collapse" 
                     data-bs-target="#onybaSpecDropdownContent" 
                     aria-expanded="true" 
                     aria-controls="onybaSpecDropdownContent">
                    <span>Choose diseases which you cure</span>
                    <span className="onyba-spec-pop-arrow"><img src="images/drop-down-icon-s.svg" alt=""/></span>
                </div>

                <div className="collapse show" id="onybaSpecDropdownContent">
                    <div className="onyba-spec-pop-dropdown-body">
                        
                        <div className="onyba-spec-pop-search-wrap">
                            <span className="onyba-spec-pop-search-icon"><img src="images/search-icon-popup.svg" alt=""/></span>
                            <input type="text" className="onyba-spec-pop-search-field" placeholder="Search"/>
                        </div>

                        <div className="onyba-spec-pop-scroll-stack">
                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Anxiety</span>
                                <input type="checkbox" checked />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Low self-esteem</span>
                                <input type="checkbox"/>
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Suicidal thoughts</span>
                                <input type="checkbox" checked />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Depression</span>
                                <input type="checkbox"/>
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Grief</span>
                                <input type="checkbox" />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>
                        </div>

                        <div className="onyba-spec-pop-actions-box">
                            <button type="button" className="onyba-spec-pop-btn-clear">Clear</button>
                            <button type="button" className="onyba-spec-pop-btn-apply" data-bs-dismiss="modal">Apply</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</div>
    
    </>
  )
}

export default ReasonConsultationPopup
