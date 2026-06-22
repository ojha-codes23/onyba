import React from 'react'

const FinalAgenda = () => {
  return (
    <>
    <main className="gl-content-body">

            <div className="patients-profile-wrp">
                <div className="dbt-pcard-top-nav">
    <a href="#" className="dbt-pcard-back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
        Back to patients
    </a>
   <div className="patient-nav-container">
  
  <a href="#" className="patient-link-start-session">
    Start Session
  </a>

  <a href="#" className="patient-link-back-to-patients">
    <img src="images/reschedule.svg" alt=""/>
   Reschedule
  </a>

  <a href="#" className="patient-link-cancel-session">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
    Cancel
  </a>

</div>
</div>

<div className="dbt-pcard-container">
    
    <div className="dbt-pcard-section dbt-pcard-profile">
        <div className="dbt-pcard-avatar-wrapper">
            <img src="images/patientes-profile.svg" alt="John Doe Rodriguez" className="dbt-pcard-avatar-img"/>
        </div>
        <div className="dbt-pcard-meta-main">
            <h2 className="dbt-pcard-name">John Carter <a href="#"><img src="images/right-icon.svg" alt=""/></a></h2>
            <p className="dbt-pcard-age-gender">Age 15 <span className="dbt-pcard-bullet">•</span> Male</p>
            <div className="dbt-pcard-ids">
                <p>Patient ID: <span>PT-1245</span></p>
                {/* <!-- <p>DIN No.: <span>85486478</span></p>
                <p>D.O.B: <span>15 May 2011</span></p> --> */}
            </div>
        </div>
    </div>

    <div className="dbt-pcard-section dbt-pcard-details">
        <div className="dbt-pcard-info-row">Phone No.-: +1 (555) 123-4567</div>
        <div className="dbt-pcard-info-row">Occupation -: <span>Student</span></div>
        <div className="dbt-pcard-info-row">Marital Status -: <span>Single</span></div>
        <div className="dbt-pcard-info-row">Insurance -: <span>12/1234567890/12</span></div>
    </div>

    {/* <!-- <div className="dbt-pcard-section dbt-pcard-session-next">
        <div className="dbt-pcard-session-heading">Next Session Details:</div>
        <div className="dbt-pcard-info-row">Date -: <span>Apr 26, 2026</span></div>
        <div className="dbt-pcard-info-row">Time -: <span>10:30 AM - 11:20 AM</span></div>
    </div> --> */}

    <div className="dbt-pcard-section dbt-pcard-session-last">
        <div className="dbt-pcard-info-row">Session Mode -: <a href="#" className="session-mode"><span></span>Online</a></div>
        <div className="dbt-pcard-info-row">Last Session -: <span>May 20, 2026</span></div>
        <div className="dbt-pcard-info-row">Insurance No.-: <span>12/1234567890/12</span></div>
    </div>

</div>

       <div className="service-selection-card">

        <div className="container ps-sessions-page-container">
  
  <div className="accordion ps-sessions-accordion" id="accordionExample">
    
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          
          <div className="ps-sessions-header-main d-flex align-items-center">
            <div className="ps-sessions-header-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="ps-sessions-title">Previous Sessions</span>
          </div>

        </button>
      </h2>
      
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          
          <div className="ps-sessions-search-wrapper">
            <svg className="ps-sessions-search-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" className="ps-sessions-search-input" placeholder="Search"/>
          </div>

          <div className="ps-sessions-inner-box">
            
            <div className="ps-sessions-list-item">
              <div className="ps-sessions-col-name">
                <span className="ps-sessions-dot"></span> Session 1
              </div>
              <div className="ps-sessions-col-date">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                May 20, 2026
              </div>
              <div className="ps-sessions-col-details">
                <span className="ps-sessions-muted-prefix">Session Details -:</span> Anxiety & work stress
              </div>
            </div>

            <div className="ps-sessions-list-item">
              <div className="ps-sessions-col-name">
                <span className="ps-sessions-dot"></span> Session 2
              </div>
              <div className="ps-sessions-col-date">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                May 22, 2026
              </div>
              <div className="ps-sessions-col-details">
                <span className="ps-sessions-muted-prefix">Session Details -:</span> Anxiety & work stress
              </div>
            </div>

            <div className="ps-sessions-list-item">
              <div className="ps-sessions-col-name">
                <span className="ps-sessions-dot"></span> Session 3
              </div>
              <div className="ps-sessions-col-date">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                May 24, 2026
              </div>
              <div className="ps-sessions-col-details">
                <span className="ps-sessions-muted-prefix">Session Details -:</span> Anxiety & work stress
              </div>
            </div>

            <div className="ps-sessions-list-item">
              <div className="ps-sessions-col-name">
                <span className="ps-sessions-dot"></span> Session 4
              </div>
              <div className="ps-sessions-col-date">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                May 26, 2026
              </div>
              <div className="ps-sessions-col-details">
                <span className="ps-sessions-muted-prefix">Session Details -:</span> Anxiety & work stress
              </div>
            </div>

            <div className="ps-sessions-list-item">
              <div className="ps-sessions-col-name">
                <span className="ps-sessions-dot"></span> Session 5
              </div>
              <div className="ps-sessions-col-date">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                May 30, 2026
              </div>
              <div className="ps-sessions-col-details">
                <span className="ps-sessions-muted-prefix">Session Details -:</span> Depression
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</div>
  
  <div className="service-card-header choose">
    <div className="service-header-icon-wrapper">
    <img src="images/payment-profile-icon.svg" alt=""/>
    </div>
   <div>
     <h4 className="service-header-title choose">Choose a applicable service for Patient</h4>
    <p>Pre-filled information shared by the patient during booking.</p>
   </div>
  </div>

<div className="patient-faqs-accordion" id="patientFaqsAccordionContainer">
  
  <div className="patient-faqs-item">
    <h2 className="patient-faqs-header" id="patientFaqsHeadingOne">
      <button className="patient-faqs-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patientFaqsCollapseOne" aria-expanded="false" aria-controls="patientFaqsCollapseOne">
        1. Why are you booking this session?
      </button>
    </h2>
    <div id="patientFaqsCollapseOne" className="accordion-collapse collapse" aria-labelledby="patientFaqsHeadingOne" data-bs-parent="#patientFaqsAccordionContainer">
      <div className="patient-faqs-body">
        Answer text or content goes here for the first question.
      </div>
    </div>
  </div>

  <div className="patient-faqs-item">
    <h2 className="patient-faqs-header" id="patientFaqsHeadingTwo">
      <button className="patient-faqs-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patientFaqsCollapseTwo" aria-expanded="false" aria-controls="patientFaqsCollapseTwo">
        2. What are the main challenges you are facing?
      </button>
    </h2>
    <div id="patientFaqsCollapseTwo" className="accordion-collapse collapse" aria-labelledby="patientFaqsHeadingTwo" data-bs-parent="#patientFaqsAccordionContainer">
      <div className="patient-faqs-body">
        Answer text or content goes here for the second question.
      </div>
    </div>
  </div>

  <div className="patient-faqs-item">
    <h2 className="patient-faqs-header" id="patientFaqsHeadingThree">
      <button className="patient-faqs-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patientFaqsCollapseThree" aria-expanded="false" aria-controls="patientFaqsCollapseThree">
        3. How long have you been experiencing this?
      </button>
    </h2>
    <div id="patientFaqsCollapseThree" className="accordion-collapse collapse" aria-labelledby="patientFaqsHeadingThree" data-bs-parent="#patientFaqsAccordionContainer">
      <div className="patient-faqs-body">
        Answer text or content goes here for the third question.
      </div>
    </div>
  </div>

  <div className="patient-faqs-item">
    <h2 className="patient-faqs-header" id="patientFaqsHeadingFour">
      <button className="patient-faqs-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patientFaqsCollapseFour" aria-expanded="false" aria-controls="patientFaqsCollapseFour">
        4. Have you had any past therapy or similar experiences?
      </button>
    </h2>
    <div id="patientFaqsCollapseFour" className="accordion-collapse collapse" aria-labelledby="patientFaqsHeadingFour" data-bs-parent="#patientFaqsAccordionContainer">
      <div className="patient-faqs-body">
        Answer text or content goes here for the fourth question.
      </div>
    </div>
  </div>

  <div className="patient-faqs-item">
    <h2 className="patient-faqs-header" id="patientFaqsHeadingFive">
      <button className="patient-faqs-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#patientFaqsCollapseFive" aria-expanded="false" aria-controls="patientFaqsCollapseFive">
        5. Is there any past experience or event you’d like to share?
      </button>
    </h2>
    <div id="patientFaqsCollapseFive" className="accordion-collapse collapse" aria-labelledby="patientFaqsHeadingFive" data-bs-parent="#patientFaqsAccordionContainer">
      <div className="patient-faqs-body">
        Answer text or content goes here for the fifth question.
      </div>
    </div>
  </div>

</div>

</div>


<div className="ony-summary-v2-main-container">

  <div className="ony-summary-v2-ai-section">
    <div className="ony-summary-v2-header-wrapper">
      <div className="ony-summary-v2-icon-circle-maroon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8zm-7 14.5l1.8-1.8m11.4-9.4l1.8-1.8M4.2 7.2l1.8 1.8m10.4 7.6l1.8 1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
      <h3 className="ony-summary-v2-main-title">Patient's Ony AI Summary</h3>
    </div>

    <div className="ony-summary-v2-content-card">
      <ul className="ony-summary-v2-bullet-list">
        <li>
          <strong>Family & Emotional Pressure</strong>
          <p>The patient shared ongoing emotional pressure related to family expectations and personal responsibilities. They expressed feeling mentally exhausted from constantly trying to meet the expectations of others while neglecting personal emotional needs. The discussion highlighted feelings of guilt, fear of disappointing family members, and difficulty setting healthy boundaries in close relationships.</p>
        </li>
        <li>
          <strong>Work-Related Anxiety</strong>
          <p>The patient described recurring anxiety triggered by workplace stress, overthinking, and performance pressure. They mentioned experiencing racing thoughts, difficulty relaxing after work hours, and occasional emotional shutdown during overwhelming situations. Breathing exercises and journaling introduced in the previous session were reported to be somewhat helpful in reducing immediate stress res howed positive engagement with mindfulness techniques and a willingness to continue practicing healthier coping strategies.</p>
        </li>
      </ul>
    </div>
  </div>

  <div className="ony-summary-v2-service-section">
    <div className="ony-summary-v2-header-wrapper">
      <div className="ony-summary-v2-icon-circle-maroon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="currentColor"/>
        </svg>
      </div>
      <h3 className="ony-summary-v2-main-title">Choose a applicable service for Patient</h3>
    </div>

    <hr className="ony-summary-v2-divider"/>

    <div className="ony-summary-v2-input-block">
      <label className="ony-summary-v2-field-label">Service Name*</label>
      
      <div className="ony-summary-v2-select-box-wrapper">
        <div className="ony-summary-v2-selected-tag">
          <span className="ony-summary-v2-tag-text">1st Adult Session</span>
          <button type="button" className="ony-summary-v2-tag-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <div className="ony-summary-v2-dropdown-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

</div>

{/* <!-- Main Parent Wrapper Container --> */}
<div className="ony-dashboard-wrapper">
  
  {/* <!-- ================= LEFT COLUMN ================= --> */}
  <div className="ony-dashboard-col-left">
    
    {/* <!-- Part 1: AI Summary (Post-session) --> */}
    <div className="ps-part1-section-block">
      <div className="ps-part1-block-header">
        <div className="ps-part1-header-main">
          <div className="ps-part1-icon-circle ps-part1-bg-maroon">
            <svg viewBox="0 0 24 24"><path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="currentColor"/></svg>
          </div>
          <span className="ps-part1-title">AI Summary <span className="ps-part1-subtext">(Post-session)</span></span>
        </div>
        <a href="#" className="edit-icon-patients"><img src="images/edit-icon.svg" alt=""/>Edit</a>
      </div>
      
      <div className="ps-part1-card-body ps-part1-bg-grey-tint ps-part1-flex-center">
        <div className="ps-part1-card-body ps-part1-bg-grey-tint">
    
    <div className="ps-part1-summary-card">
      
      <h3 className="ps-part1-section-title">Session Overview</h3>
      <p className="ps-part1-paragraph">
        The patient discussed ongoing work-related stress, persistent overthinking, and disrupted sleep patterns that are affecting daily functioning and emotional well-being. The session focused on identifying anxiety triggers, understanding repetitive thought cycles, and introducing initial coping strategies to improve emotional regulation.
      </p>

      <h3 className="ps-part1-section-title">Key Observations</h3>
      <ul className="ps-part1-bullet-list">
        <li className="ps-part1-list-item">Mild to moderate anxiety symptoms observed</li>
        <li className="ps-part1-list-item">Frequent overthinking and anticipatory worry patterns</li>
        <li className="ps-part1-list-item">Difficulty maintaining focus due to intrusive thoughts</li>
        <li className="ps-part1-list-item">Reported irregular sleep schedule and mental fatigue</li>
        <li className="ps-part1-list-item">Signs of self-critical thinking and performance pressure</li>
        <li className="ps-part1-list-item">Patient demonstrated good emotional awareness</li>
        <li className="ps-part1-list-item">High engagement and willingness to participate in therapeutic discussion</li>
      </ul>

      <h3 className="ps-part1-section-title">Clinical Focus Areas</h3>
      <p className="ps-part1-sub-text">Areas requiring continued therapeutic attention:</p>
      <ul className="ps-part1-bullet-list">
        <li className="ps-part1-list-item">Anxiety management</li>
        <li className="ps-part1-list-item">Overthinking / rumination control</li>
        <li className="ps-part1-list-item">Sleep hygiene improvement</li>
        <li className="ps-part1-list-item">Stress trigger identification</li>
        <li className="ps-part1-list-item">Cognitive reframing of negative thoughts</li>
        <li className="ps-part1-list-item">Emotional resilience building</li>
      </ul>

      <h3 className="ps-part1-section-title">Therapist Interventions Used</h3>
      <p className="ps-part1-sub-text">During this session, the therapist applied:</p>
      <ul className="ps-part1-bullet-list">
        <li className="ps-part1-list-item">Guided reflective discussion</li>
        <li className="ps-part1-list-item">Basic breathing / grounding techniques</li>
      </ul>

    </div>

  </div>
      </div>
    </div>

       {/* <!-- Part 2: Documents & Attachments --> */}
    <div className="ps-part2-section-block">
      <div className="ps-part2-block-header">
        <div className="ps-part2-header-main">
          <div className="ps-part2-icon-circle ps-part2-bg-maroon">
            <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/></svg>
          </div>
          <span className="ps-part2-title">Documents & Attachments</span>
        </div>
      </div>

      <div className="ps-part2-tabs-row">
        <button type="button" className="ps-part2-tab ps-part2-tab-active">Shared by you <span className="ps-part2-tab-count">1</span></button>
        <button type="button" className="ps-part2-tab">Shared by Patient <span className="ps-part2-tab-count">0</span></button>
      </div>

      <div className="ps-part2-attachment-stack">
        <div className="ps-part2-doc-row">
          <div className="ps-part2-doc-left">
            <div className="ps-part2-pdf-icon-box">
              <span className="ps-part2-pdf-text">PDF</span>
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V7h2v2zm5 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" fill="currentColor"/></svg>
            </div>
            <div className="ps-part2-doc-meta">
              <span className="ps-part2-doc-name">Anxiety_Worksheet.pdf</span>
              <span className="ps-part2-doc-date">Uploaded on May 24, 2026</span>
            </div>
          </div>
          <a href="#" className="ps-part2-view-link">
            <span>View</span>
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/></svg>
          </a>
        </div>

        <div className="ps-part2-upload-zone">
          <svg className="ps-part2-upload-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" fill="currentColor"/></svg>
          <span className="ps-part2-upload-text">Upload Document</span>
          <span className="ps-part2-upload-hint">Allowed: PDF, DOC, DOCX, JPG, PNG (Max. 10MB)</span>
        </div>
      </div>
    </div>

  </div>

  {/* <!-- ================= RIGHT COLUMN ================= --> */}
  <div className="ony-dashboard-col-right">
    
   
  

    {/* <!-- Part 3: Private & Public Notes Component --> */}
    <div className="ps-part3-wrapper">
      {/* <!-- Private Notes --> */}
     <div className="ps-part3-section-block">
    
    <div className="ps-part3-block-header">
      <div className="ps-part3-header-main">
        <div className="ps-part3-icon-circle ps-part3-bg-maroon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925-3.546 5.974 5.974 0 0 0-2.133-1A3.75 3.75 0 0 0 4.5 9a3.75 3.75 0 0 0 .545 1.956 5.973 5.973 0 0 0-.27 1.411 3.75 3.75 0 0 0 5.225 3.738A3.75 3.75 0 0 0 12 18Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 1-.495-7.467 5.99 5.99 0 0 1 1.925-3.546 5.974 5.974 0 0 1 2.133-1A3.75 3.75 0 0 1 19.5 9a3.75 3.75 0 0 1-.545 1.956 5.973 5.973 0 0 1 .27 1.411 3.75 3.75 0 0 1-5.225 3.738A3.75 3.75 0 0 1 12 18Z" />
          </svg>
        </div>
        <span className="ps-part3-title">Parent Consent Required</span>
      </div>
    </div>

    <div className="ps-part3-inner-content-card">
      <p className="ps-part3-content-label">Consent Status</p>
      
      <div className="ps-part3-status-badge">
        <span className="ps-part3-badge-dot"></span>
        Consent form not sent yet
      </div>

      <p className="ps-part3-content-label">Action Required</p>
      <p className="ps-part3-description">Send parent/guardian consent form and collect digital signature</p>
    </div>

    <button className="ps-part3-action-btn">Send Parent Consent Form</button>

    <div className="ps-part3-footer-info">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>You will be notified once the consent is completed</span>
    </div>

  </div>


  
      {/* <!-- Public Notes --> */}
      <div className="ps-part3-section-block">
        <div className="ps-part3-block-header">
          <div className="ps-part3-header-main">
            <div className="ps-part3-icon-circle ps-part3-bg-maroon">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/></svg>
            </div>
            <span className="ps-part3-title">Private Notes <span className="ps-part3-subtext">(Only you)</span></span>
          </div>
          <a href="#" className="edit-icon-patients"><img src="images/edit-icon.svg" alt=""/>Edit</a>
        </div>
        <div className="ps-part3-textarea-container">
          <textarea placeholder="Write notes that you want to share with the patient after the session...&#10;(These notes will be visible to patient.)" className="ps-part3-input-field">
 Session Overview
Patient appeared slightly anxious at the beginning of the session but gradually became more comfortable while sharing concerns about work-related stress and overthinking patterns.

Key Observations
Mild signs of generalized anxiety
Difficulty in emotional regulation during stressful situations
          </textarea>
          <div className="ps-part3-corner-icon ps-part3-color-maroon">
            <svg viewBox="0 0 24 24"><path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="currentColor"/></svg>
          </div>
        </div>
      </div>


    </div>
    <div className="ps-part3-section-block">
        <div className="ps-part3-block-header">
          <div className="ps-part3-header-main">
            <div className="ps-part3-icon-circle ps-part3-bg-maroon">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/></svg>
            </div>
            <span className="ps-part3-title">Public Notes <span className="ps-part3-subtext">(To share with the patient)</span></span>
          </div>
          <a href="#" className="edit-icon-patients"><img src="images/edit-icon.svg" alt=""/>Edit</a>
        </div>
        <div className="ps-part3-textarea-container">
          <textarea placeholder="Write notes that you want to share with the patient after the session...&#10;(These notes will be visible to patient.)" className="ps-part3-input-field">
 Session Overview
Patient appeared slightly anxious at the beginning of the session but gradually became more comfortable while sharing concerns about work-related stress and overthinking patterns.

Key Observations
Mild signs of generalized anxiety
Difficulty in emotional regulation during stressful situations
          </textarea>
          <div className="ps-part3-corner-icon ps-part3-color-maroon">
            <svg viewBox="0 0 24 24"><path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="currentColor"/></svg>
          </div>
        </div>
      </div>

    {/* <!-- Part 4: Tasks & Next Steps --> */}
    <div className="ps-part4-section-block">
      <div className="ps-part4-block-header">
        <div className="ps-part4-header-main">
          <div className="ps-part4-icon-circle ps-part4-bg-maroon">
            <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/></svg>
          </div>
          <span className="ps-part4-title">Tasks & Next Steps</span>
          <button type="button" className="ps-part4-add-btn" aria-label="Add Task">
            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
          </button>
        </div>
        {/* <!-- <span className="ps-part4-badge ps-part4-badge-rose">Post-session</span> --> */}
      </div>
      
      <div className="ps-part4-list-box ps-part4-bg-grey-tint">
        <div className="ps-part4-row">
          <div className="ps-part4-row-left">
            <label className="ps-part4-checkbox-wrapper">
              <input type="checkbox"/>
              <span className="ps-part4-checkmark"></span>
            </label>
            <span className="ps-part4-desc">Practice 5-10 min breathing exercise daily</span>
          </div>
          <span className="ps-part4-date">May 24, 2026</span>
        </div>
        <div className="ps-part4-row">
          <div className="ps-part4-row-left">
            <label className="ps-part4-checkbox-wrapper">
              <input type="checkbox"/>
              <span className="ps-part4-checkmark"></span>
            </label>
            <span className="ps-part4-desc">Practice 5-10 min breathing exercise daily</span>
          </div>
          <span className="ps-part4-date">May 24, 2026</span>
        </div>
        <div className="ps-part4-row">
          <div className="ps-part4-row-left">
            <label className="ps-part4-checkbox-wrapper">
              <input type="checkbox" />
              <span className="ps-part4-checkmark"></span>
            </label>
            <span className="ps-part4-desc">Practice 5-10 min breathing exercise daily</span>
          </div>
          <span className="ps-part4-date">May 24, 2026</span>
        </div>
      </div>
    </div>

    <div className="ps-part4-section-block">
    
    <div className="ps-part4-block-header">
      <div className="ps-part4-header-main">
        <div className="ps-part4-icon-circle ps-part4-bg-maroon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925-3.546 5.974 5.974 0 0 0-2.133-1A3.75 3.75 0 0 0 4.5 9a3.75 3.75 0 0 0 .545 1.956 5.973 5.973 0 0 0-.27 1.411 3.75 3.75 0 0 0 5.225 3.738A3.75 3.75 0 0 0 12 18Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 1-.495-7.467 5.99 5.99 0 0 1 1.925-3.546 5.974 5.974 0 0 1 2.133-1A3.75 3.75 0 0 1 19.5 9a3.75 3.75 0 0 1-.545 1.956 5.973 5.973 0 0 1 .27 1.411 3.75 3.75 0 0 1-5.225 3.738A3.75 3.75 0 0 1 12 18Z" />
          </svg>
        </div>
        <span className="ps-part4-title">Patient Reflection</span>
        {/* <!-- <button type="button" className="ps-part4-add-btn" aria-label="Add Task">
          <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
        </button> --> */}
      </div>
    </div>

    <div className="ps-part4-content-group">
      <h4 className="ps-part4-section-subtitle">Mood after session</h4>
      <div className="ps-part4-mood-container">
        <span className="ps-part4-emoji-wrapper">😆</span>
        <span className="ps-part4-mood-status">Great</span>
      </div>
      <p className="ps-part4-reflection-text">
        I feel lighter after talking things through. It helped me clear my thoughts a bit.
      </p>
    </div>

    <hr className="ps-part4-divider" />

    <div className="ps-part4-content-group">
      <h4 className="ps-part4-section-subtitle">Patient Feedback</h4>
      
      <div className="ps-part4-rating-stars">
        <svg className="ps-part4-star" viewBox="0 0 24 24" fill="#F5C443"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="ps-part4-star" viewBox="0 0 24 24" fill="#F5C443"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="ps-part4-star" viewBox="0 0 24 24" fill="#F5C443"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="ps-part4-star" viewBox="0 0 24 24" fill="#F5C443"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <svg className="ps-part4-star" viewBox="0 0 24 24" fill="#E2E8F0"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </div>

      <p className="ps-part4-reflection-text">
        The session was really helpful. I liked how the therapist guided me through techniques. I'd like to explore more coping strategies next time.
      </p>
    </div>

  </div>
  </div>
</div>

<div className="pfd-wrapper-page">
    <div className="pfd-main-container">
      
      <div className="pfd-card-wrapper">
        
        <div className="pfd-card-header">
          <div className="pfd-icon-circle">
            <svg className="pfd-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
          </div>
          <h2 className="pfd-header-title">Payment & Financial Details</h2>
        </div>

        <div className="pfd-card-body">
          <div className="pfd-data-row">
            <span className="pfd-label-main">Session Type Price</span>
            <span className="pfd-value-text">$80.00 (Paid)</span>
          </div>
          
          <div className="pfd-data-row">
            <span className="pfd-label-main">Payment Method</span>
            <span className="pfd-value-text">Paypal</span>
          </div>
          
          <div className="pfd-data-row-align-start">
            <div className="pfd-text-column">
              <span className="pfd-label-main">Service Added</span>
              <span className="pfd-label-sub">-1st Free Adult Session</span>
            </div>
            <span className="pfd-value-text">+$50.00</span>
          </div>
        </div>

      </div>

      <div className="pfd-btn-area">
        <button className="pfd-action-trigger">Request Additional Payment</button>
      </div>

    </div>
  </div>


            </div>
        </main>
    </>
  )
}

export default FinalAgenda
