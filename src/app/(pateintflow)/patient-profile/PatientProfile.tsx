import ViewSummaryChatModal from '@/src/component/ViewSummaryChatModal'
import React from 'react'

const PatientProfile = () => {
    return (
        <>



            <main className="gl-content-body">

                <div className="patients-profile-wrp">
                    <div className="dbt-pcard-top-nav">
                        <a href="#" className="dbt-pcard-back-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                            Back to patients
                        </a>
                        <button type="button" className="dbt-pcard-action-top" data-bs-toggle="modal" data-bs-target="#aiSummaryModal">View AI Chat Summary</button>
                    </div>

                    <div className="dbt-pcard-container">

                        <div className="dbt-pcard-section dbt-pcard-profile">
                            <div className="dbt-pcard-avatar-wrapper">
                                <img src="/images/patientes-profile.svg" alt="John Doe Rodriguez" className="dbt-pcard-avatar-img" />
                            </div>
                            <div className="dbt-pcard-meta-main">
                                <h2 className="dbt-pcard-name">John Doe Rodriguez</h2>
                                <p className="dbt-pcard-age-gender">Age 15 <span className="dbt-pcard-bullet">•</span> Male</p>
                                <div className="dbt-pcard-ids">
                                    <p>Patient ID: <span>PT-1245</span></p>
                                    <p>DIN No.: <span>85486478</span></p>
                                    <p>D.O.B: <span>15 May 2011</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="dbt-pcard-section dbt-pcard-details">
                            <div className="dbt-pcard-info-row">Phone No.-: +1 (555) 123-4567</div>
                            <div className="dbt-pcard-info-row">Email -: example@gmail.com</div>
                            <div className="dbt-pcard-info-row">Occupation -: <span>Student</span></div>
                            <div className="dbt-pcard-info-row">Marital Status -: <span>Single</span></div>
                            <div className="dbt-pcard-info-row">Insurance -: <span>12/1234567890/12</span></div>
                        </div>

                        <div className="dbt-pcard-section dbt-pcard-session-next">
                            <div className="dbt-pcard-session-heading">Next Session Details:</div>
                            <div className="dbt-pcard-info-row">Date -: <span>Apr 26, 2026</span></div>
                            <div className="dbt-pcard-info-row">Time -: <span>10:30 AM - 11:20 AM</span></div>
                        </div>

                        <div className="dbt-pcard-section dbt-pcard-session-last">
                            <div className="dbt-pcard-info-row">Last Session -: <span>May 20, 2026</span></div>
                            <div className="dbt-pcard-info-row">Insurance No.-: <span>12/1234567890/12</span></div>
                        </div>

                    </div>

                    <div className="dbt-main-wrapper-patients">

                        <div className="dbt4-filter-bar">
                            <div className="dbt4-search-box">
                                <span className="dbt4-search-icon"><img src="/images/search-icon.svg" alt="" /></span>
                                <input type="text" placeholder="Search" className="dbt4-search-input" />
                            </div>
                            <div className="dbt4-right-filters">
                                <button className="dbt4-filter-dropdown">Date Range <span className="dbt4-cal-icon"><img src="/images/date-icon.svg" alt="" /></span></button>
                                <div className="dropdown dbt4-bs-dropdown-wrapper">
                                    <button className="dbt4-filter-dropdown dropdown-toggle dbt4-remove-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Session Type <span className="dbt4-arrow-icon"><img src="/images/dropdown-icon.svg" alt="" /></span>
                                    </button>
                                    <ul className="dropdown-menu dbt4-bs-menu-custom">
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">Active</a></li>
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">Inactive</a></li>
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">All</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dbt4-bs-dropdown-wrapper">
                                    <button className="dbt4-filter-dropdown dropdown-toggle dbt4-remove-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Session Mode <span className="dbt4-arrow-icon"><img src="/images/dropdown-icon.svg" alt="" /></span>
                                    </button>
                                    <ul className="dropdown-menu dbt4-bs-menu-custom">
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">Active</a></li>
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">Inactive</a></li>
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">All</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dbt4-bs-dropdown-wrapper">
                                    <button className="dbt4-filter-dropdown dropdown-toggle dbt4-remove-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Status <span className="dbt4-arrow-icon"><img src="/images/dropdown-icon.svg" alt="" /></span>
                                    </button>
                                    <ul className="dropdown-menu dbt4-bs-menu-custom">
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">Active</a></li>
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">Inactive</a></li>
                                        <li><a className="dropdown-item dbt4-bs-item" href="#">All</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="dbt-main-wrapper patients">
                            <table className="dbt-data-table dbt4-full-patients-table">
                                <thead>
                                    <tr className="dbt3-th-row">
                                        <th className="dbt3-th-cell dbt4-pad-left">History No.</th>
                                        <th className="dbt3-th-cell">Date & Time</th>
                                        <th className="dbt3-th-cell">Mode</th>
                                        <th className="dbt3-th-cell">Session Status</th>
                                        <th className="dbt3-th-cell">AI Summary</th>
                                        <th className="dbt3-th-cell">Notes Status</th>
                                        <th className="dbt3-th-cell dbt4-pad-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="dbt-table-row">
                                        <td className="dbt4-pad-left dbt-history-text">25021</td>
                                        <td>
                                            <div className="dbt-datetime-block">
                                                <span className="dbt-date-main"><img src="/images/table-date-inner-icon.svg" alt="" className="dbt-table-inline-icon" /> May 20, 2026</span>
                                                <span className="dbt-time-sub">10:00 AM - 10:50 AM</span>
                                            </div>
                                        </td>
                                        <td><span className="dbt-badge-mode mode-online">Online</span></td>
                                        <td><span className="dbt-badge-status status-progress">In Progress</span></td>
                                        <td className="dbt-empty-cell">--</td>
                                        <td className="dbt-empty-cell">--</td>
                                        <td className="dbt4-pad-right"><a href="#" className="dbt-action-btn">View Details</a></td>
                                    </tr>

                                    <tr className="dbt-table-row">
                                        <td className="dbt4-pad-left dbt-history-text">25021-002</td>
                                        <td>
                                            <div className="dbt-datetime-block">
                                                <span className="dbt-date-main"><img src="/images/table-date-inner-icon.svg" alt="" className="dbt-table-inline-icon" /> May 20, 2026</span>
                                                <span className="dbt-time-sub">10:00 AM - 10:50 AM</span>
                                            </div>
                                        </td>
                                        <td><span className="dbt-badge-mode mode-person">In-Person</span></td>
                                        <td><span className="dbt-badge-status status-completed">Completed</span></td>
                                        <td><span className="dbt-state-text text-generating"><img src="/images/generating-icon.svg" alt="" className="dbt-table-inline-icon" /> Generating</span></td>
                                        <td>
                                            <div className="dbt-state-notes">
                                                <span className="dbt-state-text text-pending">Pending</span>
                                                <span className="dbt-notes-time-left">Time Left 20h 58m 55s</span>
                                            </div>
                                        </td>
                                        <td className="dbt4-pad-right"><a href="#" className="dbt-action-btn">View Details</a></td>
                                    </tr>

                                    <tr className="dbt-table-row">
                                        <td className="dbt4-pad-left dbt-history-text">25021-004</td>
                                        <td>
                                            <div className="dbt-datetime-block">
                                                <span className="dbt-date-main"><img src="/images/table-date-inner-icon.svg" alt="" className="dbt-table-inline-icon" /> May 20, 2026</span>
                                                <span className="dbt-time-sub">10:00 AM - 10:50 AM</span>
                                            </div>
                                        </td>
                                        <td><span className="dbt-badge-mode mode-online">Online</span></td>
                                        <td><span className="dbt-badge-status status-completed">Completed</span></td>
                                        <td><span className="dbt-state-text text-ready"><img src="/images/ready-icon.svg" alt="" className="dbt-table-inline-icon" /> Ready</span></td>
                                        <td>
                                            <div className="dbt-state-notes">
                                                <span className="dbt-state-text text-overdue">Overdue</span>
                                                <span className="dbt-notes-time-left">Overdue by 6h 20m 15s</span>
                                            </div>
                                        </td>
                                        <td className="dbt4-pad-right"><a href="#" className="dbt-action-btn">View Details</a></td>
                                    </tr>

                                    <tr className="dbt-table-row">
                                        <td className="dbt4-pad-left dbt-history-text">25021-005</td>
                                        <td>
                                            <div className="dbt-datetime-block">
                                                <span className="dbt-date-main"><img src="/images/table-date-inner-icon.svg" alt="" className="dbt-table-inline-icon" /> May 20, 2026</span>
                                                <span className="dbt-time-sub">10:00 AM - 10:50 AM</span>
                                            </div>
                                        </td>
                                        <td><span className="dbt-badge-mode mode-online">Online</span></td>
                                        <td><span className="dbt-badge-status status-cancelled">Cancelled</span></td>
                                        <td className="dbt-empty-cell">--</td>
                                        <td className="dbt-empty-cell">--</td>
                                        <td className="dbt4-pad-right"><a href="#" className="dbt-action-btn">View Details</a></td>
                                    </tr>

                                    <tr className="dbt-table-row">
                                        <td className="dbt4-pad-left dbt-history-text">25021-006</td>
                                        <td>
                                            <div className="dbt-datetime-block">
                                                <span className="dbt-date-main"><img src="/images/table-date-inner-icon.svg" alt="" className="dbt-table-inline-icon" /> May 20, 2026</span>
                                                <span className="dbt-time-sub">10:00 AM - 10:50 AM</span>
                                            </div>
                                        </td>
                                        <td><span className="dbt-badge-mode mode-online">Online</span></td>
                                        <td><span className="dbt-badge-status status-completed">Completed</span></td>
                                        <td><span className="dbt-state-text text-ready"><img src="/images/ready-icon.svg" alt="" className="dbt-table-inline-icon" /> Ready</span></td>
                                        <td>
                                            <div className="dbt-state-notes">
                                                <span className="dbt-state-text text-ready"><img src="/images/ready-icon.svg" alt="" className="dbt-table-inline-icon" /> Ready</span>
                                                <span className="dbt-notes-time-left grey-sub">May 21, 2026</span>
                                            </div>
                                        </td>
                                        <td className="dbt4-pad-right"><a href="#" className="dbt-action-btn">View Details</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="dbt4-pagination-container">
                            <div className="dbt4-pagination-list">
                                <span className="dbt4-page-num">01</span>
                                <span className="dbt4-page-num dbt4-page-active">02</span>
                                <span className="dbt4-page-num">03</span>
                                <span className="dbt4-page-dots">...</span>
                                <span className="dbt4-page-num">04</span>
                                <span className="dbt4-page-num">05</span>
                                <span className="dbt4-page-num">06</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <ViewSummaryChatModal />

        </>
    )
}

export default PatientProfile
