import React from 'react'

const SpecializationPopup = () => {
  return (
   <>
   <div className="modal fade" id="specializationModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered onyba-spec-bootstrap-dialog">
        <div className="modal-content onyba-spec-bootstrap-content">
            
            <div className="onyba-spec-pop-header-row">
                <div className="onyba-spec-pop-title-box">
                    <span className="onyba-spec-pop-icon-badge"><img src="images/star-popup-icon.svg" alt=""/></span>
                    <h2>Specializations</h2>
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
                    <span>Choose your specializations</span>
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
                                <span>Sexology</span>
                                <input type="checkbox" checked />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Addictions</span>
                                <input type="checkbox" />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Eating Disorders</span>
                                <input type="checkbox" checked />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Psychosomatic Disorders</span>
                                <input type="checkbox" />
                                <span className="onyba-spec-pop-checkmark"></span>
                            </label>

                            <label className="onyba-spec-pop-checkbox-row">
                                <span>Obsessive-Compulsive Disorder (OCD)</span>
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

            <div className="onyba-spec-pop-custom-add-box">
                <p>Can't find the specialization? Add it here.</p>
                <div className="onyba-spec-pop-input-group">
                    <input type="text" placeholder="Type your specialization and press enter"/>
                    <button type="button">Enter</button>
                </div>
            </div>

        </div>
    </div>
</div>
   
   </>
  )
}

export default SpecializationPopup
