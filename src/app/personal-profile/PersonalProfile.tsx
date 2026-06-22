import ReasonConsultationPopup from '@/src/component/personalprofilepopup/ReasonConsultationPopup';
import SpecializationPopup from '@/src/component/personalprofilepopup/SpecializationPopup';

import React from 'react'

const PersonalProfile = () => {
  return (
   <>
           <main className="gl-content-body">
           
<div className="onyba-prof-page-wrapper">
        
        <div className="onyba-prof-main-col">
            
            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/personal-profile-icon.svg" alt=""/></span>
                        <h2>Personal Profile</h2>
                    </div>
                    <button className="onyba-prof-btn-action">Edit Profile</button>
                </div>

                <div className="onyba-prof-user-card">
                    <div className="onyba-prof-avatar-wrap">
                        <img src="images/user-personal-profile.svg" alt="Dr. Sarah Johnson" className="onyba-prof-avatar-img" />
                       <label htmlFor="onyba-prof-avatar-upload" className="onyba-prof-upload-icon">
            <img src="images/upload-file-icon.svg" alt="Upload"/>
            <input type="file" id="onyba-prof-avatar-upload" accept="image/*"/>
        </label>
                    </div>
                    <div className="onyba-prof-user-details">
                        <h3>Dr. Sarah Johnson</h3>
                        <p className="onyba-prof-user-subtitle">Clinical Psychologist . RCI Registered</p>
                        <div className="onyba-prof-badge-row">
                            <span className="onyba-prof-badge onyba-prof-badge--exp">10 Years Exp.</span>
                            <span className="onyba-prof-badge onyba-prof-badge--status">Available</span>
                        </div>
                    </div>
                </div>

                <div className="onyba-prof-form-inline-row">
                    <div className="onyba-prof-field-box onyba-prof-w-50">
                        <label>Full Name*</label>
                        <input type="text" value="Dr. Sarah Johnson"/>
                    </div>
                    <div className="onyba-prof-field-box onyba-prof-w-25">
                        <label>Surname 1*</label>
                        <input type="text" value="Rodríguez"/>
                    </div>
                    <div className="onyba-prof-field-box onyba-prof-w-25">
                        <label>Surname 2 (Optional)</label>
                        <input type="text" value="Fernández"/>
                    </div>
                </div>

                <div className="onyba-prof-form-inline-row">
                    <div className="onyba-prof-field-box onyba-prof-w-33">
                        <label>Contact Number*</label>
                        <input type="text" value="+1234567890"/>
                    </div>
                    <div className="onyba-prof-field-box onyba-prof-w-33">
                        <label>Email*</label>
                        <input type="email" value="sarah@gmail.com"/>
                    </div>
                    <div className="onyba-prof-field-box onyba-prof-w-33">
                        <label>VAT Number*</label>
                        <input type="text" value="US12345678"/>
                    </div>
                </div>

                <div className="onyba-prof-field-box onyba-prof-w-100">
                    <label>Street-number-floor*</label>
                    <input type="text" value="350 Fifth Avenue, Suite 900"/>
                </div>

                <div className="onyba-prof-form-inline-row">
                    <div className="onyba-prof-field-box onyba-prof-w-50">
                        <label>City*</label>
                        <div className="onyba-prof-select-custom">
                            <select>
                                <option>New York</option>
                            </select>
                        </div>
                    </div>
                    <div className="onyba-prof-field-box onyba-prof-w-50">
                        <label>Postal Code*</label>
                        <input type="text" value="10118"/>
                    </div>
                </div>

                <div className="onyba-prof-form-inline-row">
                    <div className="onyba-prof-field-box onyba-prof-w-50">
                        <label>Province*</label>
                        <div className="onyba-prof-select-custom">
                            <select>
                                <option>New York</option>
                            </select>
                        </div>
                    </div>
                    <div className="onyba-prof-field-box onyba-prof-w-50">
                        <label>Country*</label>
                        <div className="onyba-prof-select-custom">
                            <select>
                                <option>United States</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="onyba-prof-field-box onyba-prof-w-100">
                    <label>Years of Experience</label>
                    <input type="text" value="10"/>
                </div>

                <div className="onyba-prof-field-box onyba-prof-w-100">
                    <label>Professional Bio</label>
                    <textarea rows={4}>I'm a clinical psychologist with 10 years of experience helping adults navigate anxiety, trauma, and relational challenges. My approach blends evidence-based modalities — CBT, EMDR, ACT — with a deeply human, collaborative stance. I believe therapy works best when it feels honest, warm, and a little brave.</textarea>
                </div>
            </div> <hr className="onyba-prof-separator"/>

            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/certificate-icon.svg" alt=""/></span>
                        <h2>Certifications</h2>
                    </div>
                    <button className="onyba-prof-btn-action">Upload</button>
                </div>

                <div className="onyba-prof-cert-stack">
                    <div className="onyba-prof-cert-card">
                        <div>
                            <h4>RCI Registration</h4>
                            <p>Valid till Dec 2026</p>
                        </div>
                        <span className="onyba-prof-status-tag">Verified</span>
                    </div>
                    <div className="onyba-prof-cert-card">
                        <div>
                            <h4>EMDR Certification</h4>
                            <p>Level 2 . 2022</p>
                        </div>
                        <span className="onyba-prof-status-tag">Verified</span>
                    </div>
                    <div className="onyba-prof-cert-card">
                        <div>
                            <h4>CBT Advanced Course</h4>
                            <p>NIMHANS . 2021</p>
                        </div>
                        <span className="onyba-prof-status-tag">Verified</span>
                    </div>
                </div>
            </div> </div>

        <div className="onyba-prof-side-col">
            
            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/category-selection.svg" alt=""/></span>
                        <h2>Category Selection</h2>
                    </div>
                    <button className="onyba-prof-btn-action">Add</button>
                </div>

                <p className="onyba-prof-sub-title-text">Select session mode</p>
                <div className="onyba-prof-mode-toggle-row">
                    <button className="onyba-prof-btn-mode onyba-prof-btn-mode--active"><img src="images/online-icon.svg" alt=""/>Online</button>
                    <button className="onyba-prof-btn-mode onyba-prof-btn-mode--inactive"><img src="images/hugeicons_location-05.svg" alt=""/> In-Person</button>
                </div>

                <p className="onyba-prof-sub-title-text">Clinic Address</p>
                <div className="onyba-prof-address-card">
                    <span className="onyba-prof-pin"><img src="images/location-profile-icon.svg" alt=""/></span>
                    <p>123 Healing Street, Los Angeles, CA 90001, United States</p>
                </div>
            </div> <hr className="onyba-prof-separator"/>

            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/star-icons.svg" alt=""/></span>
                        <h2>Specializations</h2>
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#specializationModal" className="onyba-prof-btn-action">Add</button>
                </div>

                <div className="onyba-prof-tag-cloud">
                    <span className="onyba-prof-chip">Sexology</span>
                    <span className="onyba-prof-chip">Addictions</span>
                    <span className="onyba-prof-chip">Eating Disorders</span>
                    <span className="onyba-prof-chip">CBT</span>
                    <span className="onyba-prof-chip">Psychosomatic Disorders</span>
                    <span className="onyba-prof-chip">Obsessive-Compulsive Disorder (OCD)</span>
                </div>
            </div> <hr className="onyba-prof-separator"/>

            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/star-icons.svg" alt=""/></span>
                        <h2>Reason for Consultation</h2>
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#reasonConsultation" className="onyba-prof-btn-action">Add</button>
                </div>

                <div className="onyba-prof-tag-cloud">
                    <span className="onyba-prof-chip">Anxiety</span>
                    <span className="onyba-prof-chip">Low Self-Esteem</span>
                    <span className="onyba-prof-chip">Suicidal Thoughts</span>
                    <span className="onyba-prof-chip">Depression</span>
                    <span className="onyba-prof-chip">Grief</span>
                </div>
            </div> <hr className="onyba-prof-separator"/>

            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/file-load-icon.svg" alt=""/></span>
                        <h2>Tax Edit</h2>
                    </div>
                    <button className="onyba-prof-btn-action">Edit</button>
                </div>

                <div className="onyba-prof-tax-bar">
                    <span className="onyba-prof-tax-text">Tax Bracket</span>
                    <div className="onyba-prof-tax-options-wrap">
                        <span className="onyba-prof-tax-item onyba-prof-tax-item--active">7%</span>
                        <span className="onyba-prof-tax-item">10%</span>
                        <span className="onyba-prof-tax-item">15%</span>
                    </div>
                </div>
            </div> <hr className="onyba-prof-separator"/>

            <div className="onyba-prof-section-container">
                <div className="onyba-prof-section-header">
                    <div className="onyba-prof-header-title-box">
                        <span className="onyba-prof-icon-badge"><img src="images/file-load-icon.svg" alt=""/></span>
                        <h2>Contact Admin</h2>
                    </div>
                </div>

                <div className="onyba-prof-admin-bar">
                    <span>Email Address</span>
                    <span className="onyba-prof-admin-email-pill">admin@onyba.com</span>
                </div>
            </div> </div>
    </div>

    <div className="onyba-avail-page-wrapper">
        
        <div className="onyba-avail-header-container">
            <div className="onyba-avail-title-box">
                <span className="onyba-avail-icon-circle"><img src="images/clock-avl-icon.svg" alt=""/></span>
                <h2>Availability Management</h2>
            </div>
        </div>

        <div className="onyba-avail-content-body">
            
            <div className="onyba-avail-calendar-section">
                
                <div className="onyba-avail-month-nav">
                    <span className="onyba-avail-month-title">May 2026</span>
                    <div className="onyba-avail-nav-arrows">
                        <button className="onyba-avail-arrow-btn">&#10094;</button>
                        <button className="onyba-avail-arrow-btn">&#10095;</button>
                    </div>
                </div>

                <div className="onyba-avail-weekdays-row">
                    <div className="onyba-avail-day-label">SUN</div>
                    <div className="onyba-avail-day-label">MON</div>
                    <div className="onyba-avail-day-label">TUE</div>
                    <div className="onyba-avail-day-label">WED</div>
                    <div className="onyba-avail-day-label">THU</div>
                    <div className="onyba-avail-day-label">FRI</div>
                    <div className="onyba-avail-day-label">SAT</div>
                </div>

                <div className="onyba-avail-days-stack">
                    <div className="onyba-avail-days-row">
                        <div className="onyba-avail-date-cell onyba-avail-date-empty"></div>
                        <div className="onyba-avail-date-cell onyba-avail-date-empty"></div>
                        <div className="onyba-avail-date-cell onyba-avail-date-empty"></div>
                        <div className="onyba-avail-date-cell onyba-avail-date-empty"></div>
                        <div className="onyba-avail-date-cell">1</div>
                        <div className="onyba-avail-date-cell">2</div>
                        <div className="onyba-avail-date-cell">3</div>
                    </div>
                    <div className="onyba-avail-days-row">
                        <div className="onyba-avail-date-cell">4</div>
                        <div className="onyba-avail-date-cell">5</div>
                        <div className="onyba-avail-date-cell onyba-avail-date--selected">6</div>
                        <div className="onyba-avail-date-cell">7</div>
                        <div className="onyba-avail-date-cell">8</div>
                        <div className="onyba-avail-date-cell">9</div>
                        <div className="onyba-avail-date-cell">10</div>
                    </div>
                    <div className="onyba-avail-days-row">
                        <div className="onyba-avail-date-cell">11</div>
                        <div className="onyba-avail-date-cell">12</div>
                        <div className="onyba-avail-date-cell">13</div>
                        <div className="onyba-avail-date-cell">14</div>
                        <div className="onyba-avail-date-cell">15</div>
                        <div className="onyba-avail-date-cell">16</div>
                        <div className="onyba-avail-date-cell">17</div>
                    </div>
                    <div className="onyba-avail-days-row">
                        <div className="onyba-avail-date-cell">18</div>
                        <div className="onyba-avail-date-cell">19</div>
                        <div className="onyba-avail-date-cell">20</div>
                        <div className="onyba-avail-date-cell">21</div>
                        <div className="onyba-avail-date-cell">22</div>
                        <div className="onyba-avail-date-cell">23</div>
                        <div className="onyba-avail-date-cell">24</div>
                    </div>
                    <div className="onyba-avail-days-row">
                        <div className="onyba-avail-date-cell">25</div>
                        <div className="onyba-avail-date-cell">26</div>
                        <div className="onyba-avail-date-cell">27</div>
                        <div className="onyba-avail-date-cell">28</div>
                        <div className="onyba-avail-date-cell">29</div>
                        <div className="onyba-avail-date-cell">30</div>
                        <div className="onyba-avail-date-cell">31</div>
                    </div>
                </div>

            </div>

            <div className="onyba-avail-slots-section">
                
                <h3 className="onyba-avail-section-title">Available Time Slots</h3>
                <p className="onyba-avail-selected-day-text" id="onyba-selected-date-label">May 6 (Sat)</p>

                <div className="onyba-avail-slots-vertical-list" id="onyba-slots-container">
                    
                    <div className="onyba-avail-slot-item-row">
                        <div className="onyba-avail-input-time-wrap">
                            <input type="text" className="onyba-avail-time-field" value="10:00"/>
                            <span className="onyba-avail-clock-icon">🕒</span>
                        </div>
                        <div className="onyba-avail-select-period-wrap">
                            <select className="onyba-avail-period-dropdown">
                                <option value="AM" selected>AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <button className="onyba-avail-btn-remove">&times;</button>
                        <button className="onyba-avail-btn-add-more" id="onyba-add-slot-btn">+</button>
                    </div>

                    <div className="onyba-avail-slot-item-row">
                        <div className="onyba-avail-input-time-wrap">
                            <input type="text" className="onyba-avail-time-field" value="11:00"/>
                            <span className="onyba-avail-clock-icon">🕒</span>
                        </div>
                        <div className="onyba-avail-select-period-wrap">
                            <select className="onyba-avail-period-dropdown">
                                <option value="AM" selected>AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <button className="onyba-avail-btn-remove">&times;</button>
                        <div className="onyba-avail-space-holder"></div>
                    </div>

                    <div className="onyba-avail-slot-item-row">
                        <div className="onyba-avail-input-time-wrap">
                            <input type="text" className="onyba-avail-time-field" value="12:00"/>
                            <span className="onyba-avail-clock-icon"><img src="images/clock-avl-icon.svg" alt=""/></span>
                        </div>
                        <div className="onyba-avail-select-period-wrap">
                            <select className="onyba-avail-period-dropdown">
                                <option value="AM">AM</option>
                                <option value="PM" selected>PM</option>
                            </select>
                        </div>
                        <button className="onyba-avail-btn-remove">&times;</button>
                        <div className="onyba-avail-space-holder"></div>
                    </div>

                </div>

                <div className="onyba-avail-footer-actions-row">
                    <button className="onyba-avail-btn-secondary">Save for May 6</button>
                    <button className="onyba-avail-btn-maroon">Save for all Saturdays</button>
                </div>

                <button className="onyba-avail-btn-block-submit">Save Availability</button>

            </div>

        </div>
    </div>
        </main>

        <ReasonConsultationPopup/>
        <SpecializationPopup/>
   
   </>
  )
}

export default PersonalProfile;
