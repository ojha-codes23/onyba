import CancelSessionPopup from '@/src/component/CancelSessionPopup'
import React from 'react'
import agendaData from '@/src/data/backToAgendaData.json'
import Link from 'next/link'
import AgendaCalendarPopup from '@/src/component/AgendaCalendarPopup'

const BackToAgenda = () => {
    return (
        <>
            <main className="gl-content-body">

                <div className="patients-profile-wrp">
                    <div className="dbt-pcard-top-nav">
                        <Link href="/agenda" className="dbt-pcard-back-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                            Back to Agendas
                        </Link>
                        <div className="patient-nav-container">

                            {/* <Link href="/video-confrence" className="patient-link-start-session">
                                Start Session
                            </Link> */}

                            <Link href="#" className="patient-link-back-to-patients" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src="images/reschedule.svg" alt="" />
                                Reschedule
                            </Link>

                            <a href="#" className="patient-link-cancel-session" data-bs-toggle="modal" data-bs-target="#cancelSessionModal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                </svg>
                                Cancel
                            </a>

                        </div>
                    </div>

                    <div className="dbt-pcard-container">

                        <div className="dbt-pcard-section dbt-pcard-profile">
                            <div className="dbt-pcard-avatar-wrapper">
                                <img src={agendaData.patientInfo.avatar} alt={agendaData.patientInfo.name} className="dbt-pcard-avatar-img" />
                            </div>
                            <div className="dbt-pcard-meta-main">
                                <h2 className="dbt-pcard-name">{agendaData.patientInfo.name} <a href="#"><img src="images/right-icon.svg" alt="" /></a></h2>
                                <p className="dbt-pcard-age-gender">Age {agendaData.patientInfo.age} <span className="dbt-pcard-bullet">•</span> {agendaData.patientInfo.gender}</p>
                                <div className="dbt-pcard-ids">
                                    <p>Patient ID: <span>{agendaData.patientInfo.patientId}</span></p>
                                    {/* <!-- <p>DIN No.: <span>85486478</span></p>
                <p>D.O.B: <span>15 May 2011</span></p> --> */}
                                </div>
                            </div>
                        </div>

                        <div className="dbt-pcard-section dbt-pcard-details">
                            <div className="dbt-pcard-info-row">Phone No.-: {agendaData.patientInfo.phone}</div>
                            <div className="dbt-pcard-info-row">Occupation -: <span>{agendaData.patientInfo.occupation}</span></div>
                            <div className="dbt-pcard-info-row">Marital Status -: <span>{agendaData.patientInfo.maritalStatus}</span></div>
                            <div className="dbt-pcard-info-row">Insurance -: <span>{agendaData.patientInfo.insurance}</span></div>
                        </div>

                        {/* <!-- <div className="dbt-pcard-section dbt-pcard-session-next">
        <div className="dbt-pcard-session-heading">Next Session Details:</div>
        <div className="dbt-pcard-info-row">Date -: <span>Apr 26, 2026</span></div>
        <div className="dbt-pcard-info-row">Time -: <span>10:30 AM - 11:20 AM</span></div>
    </div> --> */}

                        <div className="dbt-pcard-section dbt-pcard-session-last">
                            <div className="dbt-pcard-info-row">Session Mode -: <a href="#" className="session-mode"><span></span>{agendaData.patientInfo.sessionMode}</a></div>
                            <div className="dbt-pcard-info-row">Last Session -: <span>{agendaData.patientInfo.lastSession}</span></div>
                            <div className="dbt-pcard-info-row">Insurance No.-: <span>{agendaData.patientInfo.insurance}</span></div>
                        </div>

                    </div>

                    <div className="service-selection-card">

                        <div className="service-card-header">
                            <div className="service-header-icon-wrapper">
                                <img src="images/payment-profile-icon.svg" alt="" />
                            </div>
                            <h3 className="service-header-title">Choose a applicable service for Patient</h3>
                        </div>

                        <hr className="service-card-divider" />

                        <div className="service-card-content">
                            <label className="service-input-label">Service Name*</label>

                            <div className="service-tags-wrapper">
                                {agendaData.services.map(service => (
                                    <div className="service-selected-tag" key={service.id}>
                                        <span className="service-tag-text">{service.name}</span>
                                        <button type="button" className="service-tag-remove-btn" aria-label="Remove service">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="financial-details-card">
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
                                                <input type="text" className="ps-sessions-search-input" placeholder="Search" />
                                            </div>

                                            <div className="ps-sessions-inner-box">
                                                {agendaData.previousSessions.map(session => (
                                                    <div className="ps-sessions-list-item" key={session.id}>
                                                        <div className="ps-sessions-col-name">
                                                            <span className="ps-sessions-dot"></span> {session.name}
                                                        </div>
                                                        <div className="ps-sessions-col-date">
                                                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                            {session.date}
                                                        </div>
                                                        <div className="ps-sessions-col-details">
                                                            <span className="ps-sessions-muted-prefix">Session Details -:</span> {session.details}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* </div> */}


                        {/* <div className="financial-details-card"> */}

                        <div className="financial-card-header">
                            <div className="financial-header-icon-box">
                                <img src="images/payment-profile-icon.svg" alt="" />
                            </div>
                            <h3 className="financial-header-title">Payment & Financial Details</h3>
                        </div>

                        <hr className="financial-card-divider" />

                        <div className="financial-card-content">

                            <div className="financial-info-row">
                                <span className="financial-row-label">Session Type Price</span>
                                <span className="financial-row-value">{agendaData.financialDetails.sessionTypePrice}</span>
                            </div>

                            <div className="financial-info-row">
                                <span className="financial-row-label">Payment Method</span>
                                <span className="financial-row-value">{agendaData.financialDetails.paymentMethod}</span>
                            </div>

                            <div className="financial-info-row financial-row-align-top">
                                <span className="financial-row-label">Service Added</span>
                                <div className="financial-row-value-group">
                                    <span className="financial-row-value">{agendaData.financialDetails.serviceAdded.amount}</span>
                                    <span className="financial-row-subtext">{agendaData.financialDetails.serviceAdded.subtext}</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="collect-payment-wrapper">

                        <div className="cp-header">
                            <div className="cp-header-left">
                                <div className="cp-icon-circle">
                                    <img src="images/collect-payment-icon.svg" alt="" />
                                </div>
                                <h2>Collect Payment</h2>
                            </div>
                            <div className="cp-remaining-badge">Remaining: {agendaData.collectPayment.remaining}</div>
                        </div>

                        <hr className="cp-divider" />

                        <div className="cp-body">

                            <div className="cp-total-row">
                                <span className="cp-total-label">Total Session Amount</span>
                                <span className="cp-total-val">{agendaData.collectPayment.totalSessionAmount}</span>
                            </div>

                            <div className="cp-grid">
                                <div className="cp-form-group">
                                    <label>Payment Mode</label>
                                    <div className="cp-select-wrapper">
                                        <select>
                                            <option>Cash</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cp-form-group">
                                    <label>Payment Type</label>
                                    <div className="cp-select-wrapper">
                                        <select>
                                            <option>Full Payment</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="cp-form-group">
                                    <label>Collected Amount</label>
                                    <input type="text" placeholder="Enter amount" />
                                </div>

                                <div className="cp-form-group">
                                    <label>Session</label>
                                    <div className="cp-select-wrapper">
                                        <select>
                                            <option>Choose Session</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="cp-checkbox-row">
                                <input type="checkbox" id="bonus-discount" />
                                <label htmlFor="bonus-discount">Add Bonus up to 10% OFF.</label>
                            </div>

                            <div className="cp-actions-row">
                                <a href="#" className="cp-btn-secondary">Save as Pending</a>
                                <a href="#" className="cp-btn-primary">Collect Payment</a>
                            </div>

                            <div className="cp-info-cards-stack">

                                <div className="cp-status-card cp-card-green">
                                    <div className="cp-status-card-header">
                                        <h4>Full Payment</h4>
                                        <span className="cp-dot"></span>
                                    </div>
                                    <p>Patient pays the complete session amount now.</p>
                                    <div className="cp-card-amount">$150</div>
                                </div>

                                <div className="cp-status-card cp-card-yellow">
                                    <div className="cp-status-card-header">
                                        <h4>Partial Payment</h4>
                                        <span className="cp-dot"></span>
                                    </div>
                                    <p>Collect a partial amount and carry forward remaining balance.</p>
                                    <div className="cp-card-amount">$50 Paid</div>
                                </div>

                                <div className="cp-status-card cp-card-red">
                                    <div className="cp-status-card-header">
                                        <h4>Pay Later</h4>
                                        <span className="cp-dot"></span>
                                    </div>
                                    <p>Entire payment will be collected in the next session.</p>
                                    <div className="cp-card-amount">$150 Pending</div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </main>

            <CancelSessionPopup />
            <AgendaCalendarPopup />
        </>
    )
}

export default BackToAgenda
