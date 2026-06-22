import ProfileApproved from '@/src/component/createprofilepopups/ProfileApproved'
import ProfileRejected from '@/src/component/createprofilepopups/ProfileRejected'
import ProfileUnderReviewPopup from '@/src/component/createprofilepopups/ProfileUnderReviewPopup'
import SubmitProfile from '@/src/component/createprofilepopups/SubmitProfile'
import React from 'react'

const MyProfile = () => {
  return (
    <>
       <div className="therapist-profile-container py-5">
    <div className="container-fluid m-auto" style={{maxWidth:"1366px"}}>

      <header className="tp-header mb-5">
        <div className="tp-back-btn">
          <a href="#" className="tp-back-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </a>
          <span>Complete Your Profile</span>
        </div>
        <p className="tp-subtitle">Please provide your professional details</p>
      </header>

      <form id="profileForm" 
    //   onsubmit="event.preventDefault();"
      >

        <section className="tp-section mb-5">
          <h2 className="tp-section-title"><span className="icon"><img src="/images/personal-user-icon.svg" alt=""/></span> Personal Details</h2>

          <div className="tp-avatar-uploader mb-4">
            <div className="avatar-preview">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                className="text-muted">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <button type="button" className="tp-btn-secondary">Upload Photo</button>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <label className="tp-label">Full Name*</label>
              <input type="text" className="tp-input" placeholder="Enter your full name" required/>
            </div>
            <div className="col-md-4">
              <label className="tp-label">Surname 1*</label>
              <input type="text" className="tp-input" placeholder="Enter your surname 1" required/>
            </div>
            <div className="col-md-4">
              <label className="tp-label">Surname 2 (Optional)</label>
              <input type="text" className="tp-input" placeholder="Enter your surname 2"/>
            </div>

            <div className="col-md-4">
              <label className="tp-label">Contact Number*</label>
              <input type="tel" className="tp-input" placeholder="+1234567890" required/>
            </div>
            <div className="col-md-4">
              <label className="tp-label">Email*</label>
              <input type="email" className="tp-input" placeholder="Enter your email" required/>
            </div>
            <div className="col-md-4">
              <label className="tp-label">VAT Number*</label>
              <input type="text" className="tp-input" placeholder="Enter VAT number" required/>
            </div>

            <div className="col-md-4">
              <label className="tp-label">Type of Document*</label>
              <div className="tp-custom-select-wrapper">
                <div className="tp-select-trigger" 
                // onclick="toggleDropdown('docDropdown')"
                >
                  <span id="selectedDoc">DNI</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="arrow">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="tp-dropdown-menu" id="docDropdown">
                  <div className="tp-dropdown-item active" 
                //   onclick="selectDocument('DNI')"
                  >DNI</div>
                  <div className="tp-dropdown-item"
                //    onclick="selectDocument('NIE')"
                   >NIE</div>
                  <div className="tp-dropdown-item" 
                //   onclick="selectDocument('RESIDENCE PERMIT')"
                  >RESIDENCE PERMIT</div>
                  <div className="tp-dropdown-item" 
                //   onclick="selectDocument('PASSPORT')"
                  >PASSPORT</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <label className="tp-label">DNI Number</label>
              <input type="text" className="tp-input" value="55486478"/>
            </div>
            <div className="col-md-4">
              <label className="tp-label">Scholarship ID</label>
              <input type="text" className="tp-input" value="85486478"/>
            </div>

            <div className="col-md-4">
              <label className="tp-label">Street-number-floor*</label>
              <input type="text" className="tp-input" placeholder="350 Fifth Avenue, Suite 500" required/>
            </div>
            <div className="col-md-4">
              <label className="tp-label">City*</label>
              <div className="tp-custom-select-wrapper">
                <div className="tp-select-trigger">
                  <span>New York</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="arrow">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <label className="tp-label">Postal Code*</label>
              <input type="text" className="tp-input" placeholder="10118" required/>
            </div>

            <div className="col-md-4">
              <label className="tp-label">Province*</label>
              <div className="tp-custom-select-wrapper">
                <div className="tp-select-trigger">
                  <span>New York</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="arrow">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <label className="tp-label">Country*</label>
              <div className="tp-custom-select-wrapper">
                <div className="tp-select-trigger">
                  <span>United States</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="arrow">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tp-section mb-5">
          <h2 className="tp-section-title"><span className="icon">💼</span> Certificate</h2>
          <label className="tp-label mb-2">Upload your professional certifications*</label>

          <div className="tp-file-uploader-box mb-3">
            <input type="file" id="certFileInput" multiple style = {{display:"none"}}  />
            <button type="button" className="tp-btn-file-select"
            //   onclick="document.getElementById('certFileInput').click()"
              
              >Choose File</button>
            <span className="text-muted ms-3 fs-7">No File Chosen</span>
          </div>

          <div className="row g-2">
            <div className="col-sm-6 col-md-3">
              <div className="tp-file-badge">
                <div className="text-truncate flex-grow-1 me-2">
                  <span className="file-name d-block text-truncate">FileName.pdf</span>
                  <span className="file-size">1.2 MB</span>
                </div>
                <button type="button" className="btn-close-file">&times;</button>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="tp-file-badge">
                <div className="text-truncate flex-grow-1 me-2">
                  <span className="file-name d-block text-truncate">FileName.pdf</span>
                  <span className="file-size">1.2 MB</span>
                </div>
                <button type="button" className="btn-close-file">&times;</button>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="tp-file-badge">
                <div className="text-truncate flex-grow-1 me-2">
                  <span className="file-name d-block text-truncate">FileName.pdf</span>
                  <span className="file-size">1.2 MB</span>
                </div>
                <button type="button" className="btn-close-file">&times;</button>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="tp-file-badge">
                <div className="text-truncate flex-grow-1 me-2">
                  <span className="file-name d-block text-truncate">FileName.pdf</span>
                  <span className="file-size">1.2 MB</span>
                </div>
                <button type="button" className="btn-close-file">&times;</button>
              </div>
            </div>
          </div>
        </section>

        <section className="tp-section mb-5">
          <h2 className="tp-section-title"><span className="icon">📄</span> Category Selection</h2>

          <div className="tp-panel p-4 mb-4">
            <label className="tp-label mb-2">Select session mode</label>
            <div className="d-flex gap-2 mb-3 flex-wrap">
              <button type="button" className="tp-toggle-pill" id="mode-online"
                // onclick="toggleSessionMode('mode-online')"
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  className="me-1">
                  <path d="M23 7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7z"></path>
                  <polyline points="16 21 16 19 12 19"></polyline>
                </svg>
                Online
              </button>
              <button type="button" className="tp-toggle-pill" id="mode-inperson"
                // onclick="toggleSessionMode('mode-inperson')"
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  className="me-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                In-Person
              </button>
            </div>

            <label className="tp-label mb-2">Clinic Address</label>
            <div className="tp-input-icon-wrapper" id="clinic-address-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                className="icon-left">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input type="text" className="tp-input" value="123 Healing Street, Los Angeles, CA 90001, United States"/>
            </div>
          </div>

          <div className="mb-3">
            <label className="tp-label mb-2">Select the types of therapy you provide</label>
            <div className="d-flex gap-2 flex-wrap" id="therapy-types-container">
              <button type="button" className="tp-pill-outline"
            //    onclick="toggleTherapyType(this)"
               >Adult</button>
              <button type="button" className="tp-toggle-pill active" 
            //   onclick="toggleTherapyType(this)"
              >Child</button>
              <button type="button" className="tp-pill-outline" 
            //   onclick="toggleTherapyType(this)"
              >Family</button>
              <button type="button" className="tp-toggle-pill active" 
            //   onclick="toggleTherapyType(this)"
              >Couple</button>
              <button type="button" className="tp-pill-outline"
            //    onclick="toggleTherapyType(this)"
               >Coaching</button>
            </div>
          </div>
        </section>

        <section className="tp-section mb-5">
          <h2 className="tp-section-title"><span className="icon">💼</span> Professional Details</h2>

          <div className="mb-4 position-relative">
            <label className="tp-label">Specializations*</label>
            <div className="tp-multi-select-trigger" 
            // onclick="toggleDropdown('specializationDropdown')"
            >
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="tp-tag">Sexology <span className="tag-close">&times;</span></span>
                <span className="tp-tag">Eating Disorders <span className="tag-close">&times;</span></span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                className="arrow ms-auto">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            <div className="tp-dropdown-panel-box" id="specializationDropdown">
              <div className="p-3 border-bottom">
                <div className="tp-search-input-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="search-icon">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input type="text" placeholder="Search" className="tp-search-field"/>
                </div>
              </div>
              <div className="panel-options-list">
                <label className="tp-checkbox-item">
                  <span>Sexology</span>
                  <input type="checkbox" checked/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Addictions</span>
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Eating Disorders</span>
                  <input type="checkbox" checked/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Psychosomatic Disorders</span>
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Obsessive-Compulsive Disorder (OCCD)</span>
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="p-3 border-top d-flex justify-content-end gap-2">
                <button type="button" className="tp-panel-btn btn-clear">Clear</button>
                <button type="button" className="tp-panel-btn btn-apply">Apply</button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="tp-label">Can't find the specialization? Add it here.</label>
            <div className="d-flex gap-2">
              <input type="text" className="tp-input flex-grow-1" placeholder="Type your specialization and press enter"/>
              <button type="button" className="tp-btn-action-enter">Enter</button>
            </div>
          </div>

          <div className="mb-4 position-relative">
            <label className="tp-label">Reason for Consultation*</label>
            <div className="tp-multi-select-trigger" 
            // onclick="toggleDropdown('consultationDropdown')"
            >
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="tp-tag">Anxiety <span className="tag-close">&times;</span></span>
                <span className="tp-tag">Suicidal thoughts <span className="tag-close">&times;</span></span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                className="arrow ms-auto">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            <div className="tp-dropdown-panel-box" id="consultationDropdown">
              <div className="p-3 border-bottom">
                <div className="tp-search-input-wrapper">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="search-icon">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input type="text" placeholder="Search" className="tp-search-field"/>
                </div>
              </div>
              <div className="panel-options-list">
                <label className="tp-checkbox-item">
                  <span>Anxiety</span>
                  <input type="checkbox" checked/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Low self-esteem</span>
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Suicidal thoughts</span>
                  <input type="checkbox" checked/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Depression</span>
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <label className="tp-checkbox-item">
                  <span>Grief</span>
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="p-3 border-top d-flex justify-content-end gap-2">
                <button type="button" className="tp-panel-btn btn-clear">Clear</button>
                <button type="button" className="tp-panel-btn btn-apply">Apply</button>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <label className="tp-label">Experience (Years) *</label>
            <input type="text" className="tp-input" placeholder="Enter your years"/>
          </div>

          <div className="mb-4">
            <label className="tp-label">Bio / Description*</label>
            <textarea className="tp-textarea" rows={4}
              placeholder="Tell us about yourself and your approach to therapy..."></textarea>
          </div>
        </section>

        <div className="mt-5">
          <button type="submit" className="tp-btn-primary">Submit Profile for Review</button>
        </div>

      </form>
    </div>
  </div>



        <SubmitProfile/>
        <ProfileUnderReviewPopup/>
        <ProfileApproved/>
        <ProfileRejected/>
    </>
   
  )
}

export default MyProfile
