import React from 'react'

const AgendaCalendarPopup = () => {
  return (
    <>
      {/* <div classNameName="modal fade" id="onybaAgendaModal" tabIndex={-1}aria-hidden="true">
        <div classNameName="modal-dialog modal-dialog-centered modal-dialog-scrollable onyba-agenda-dialog">
            <div classNameName="modal-content onyba-agenda-content">
                
                <button type="button" classNameName="onyba-agenda-close-cross" data-bs-dismiss="modal" aria-label="Close">
                    <img src="images/close-btn-popup.svg" alt="&times;"/>
                </button>

                <div classNameName="modal-body onyba-agenda-body">
                    
                    <div classNameName="onyba-agenda-header-box">
                        <h4 classNameName="onyba-agenda-main-title">Agenda</h4>
                        <p classNameName="onyba-agenda-subtitle">Book the agenda for the user.</p>
                    </div>

                    <div classNameName="onyba-agenda-form-group">
                        <label classNameName="onyba-agenda-field-label">Patient Name*</label>
                        <div classNameName="onyba-agenda-select-wrapper">
                            <select classNameName="onyba-agenda-custom-select">
                                <option value="john_carter" selected>John Carter</option>
                                <option value="other">Jane Doe</option>
                            </select>
                        </div>
                    </div>

                    <div classNameName="onyba-agenda-split-row">
                        
                        <div classNameName="onyba-agenda-calendar-card">
                            <div classNameName="onyba-agenda-cal-nav-bar">
                                <span classNameName="onyba-agenda-cal-month-title">April 2026</span>
                                <div classNameName="onyba-agenda-cal-arrows">
                                    <button type="button" classNameName="onyba-agenda-arrow-btn">&lt;</button>
                                    <button type="button" classNameName="onyba-agenda-arrow-btn">&gt;</button>
                                </div>
                            </div>
                            
                            <div classNameName="onyba-agenda-cal-weeks-strip">
                                <span>MON</span><span>TUE</span><span>WED</span><span>THUR</span><span>FRI</span><span>SAT</span><span>SUN</span>
                            </div>

                            <div classNameName="onyba-agenda-cal-days-wrap">
                                <span classNameName="onyba-agenda-cal-day onyba-agenda-day-active">1</span>
                                <span classNameName="onyba-agenda-cal-day">2</span>
                                <span classNameName="onyba-agenda-cal-day">3</span>
                                <span classNameName="onyba-agenda-cal-day onyba-agenda-day-muted">4</span>
                                <span classNameName="onyba-agenda-cal-day onyba-agenda-day-muted">5</span>
                                <span classNameName="onyba-agenda-cal-day onyba-agenda-day-muted">6</span>
                                <span classNameName="onyba-agenda-cal-day">7</span>
                                <span className="onyba-agenda-cal-day">8</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">9</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">10</span>
                                <span className="onyba-agenda-cal-day">11</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">12</span>
                                <span className="onyba-agenda-cal-day">13</span>
                                <span className="onyba-agenda-cal-day">14</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">15</span>
                                <span className="onyba-agenda-cal-day">16</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">17</span>
                                <span className="onyba-agenda-cal-day">18</span>
                                <span className="onyba-agenda-cal-day">19</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">20</span>
                                <span className="onyba-agenda-cal-day">21</span>
                                <span className="onyba-agenda-cal-day">22</span>
                                <span className="onyba-agenda-cal-day">23</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">24</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">25</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">26</span>
                                <span className="onyba-agenda-cal-day">27</span>
                                <span className="onyba-agenda-cal-day">28</span>
                                <span className="onyba-agenda-cal-day">29</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">30</span>
                                <span className="onyba-agenda-cal-day">31</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">01</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">02</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">03</span>
                                <span className="onyba-agenda-cal-day onyba-agenda-day-muted">04</span>
                            </div>
                        </div>

                        <div className="onyba-agenda-slots-card">
                            <h6 className="onyba-agenda-slots-title">Available Times</h6>
                            <div className="onyba-agenda-slots-flexbox">
                                <button type="button" className="onyba-agenda-slot-pill">09:00</button>
                                <button type="button" className="onyba-agenda-slot-pill onyba-agenda-slot-selected">10:00</button>
                                <button type="button" className="onyba-agenda-slot-pill">11:00</button>
                                <button type="button" className="onyba-agenda-slot-pill">12:00</button>
                                <button type="button" className="onyba-agenda-slot-pill">01:00</button>
                                <button type="button" className="onyba-agenda-slot-pill">02:00</button>
                                <button type="button" className="onyba-agenda-slot-pill">03:00</button>
                                <button type="button" className="onyba-agenda-slot-pill">04:00</button>
                            </div>
                        </div>

                    </div>

                    <div className="onyba-agenda-form-group">
                        <label className="onyba-agenda-field-label">Service Name*</label>
                        <div className="onyba-agenda-select-wrapper">
                            <select className="onyba-agenda-custom-select text-secondary">
                                <option value="" disabled selected>Select service</option>
                                <option value="consultation">Clinical Consultation</option>
                            </select>
                        </div>
                    </div>

                    <div className="onyba-agenda-form-group">
                        <label className="onyba-agenda-field-label">Add Remarks</label>
                        <textarea className="onyba-agenda-custom-textarea" placeholder="Enter remarks or notes here"></textarea>
                    </div>

                    <div className="onyba-agenda-summary-card">
                        <h6 className="onyba-agenda-summary-title">Session Summary</h6>
                        
                        <div className="onyba-agenda-summary-row">
                            <span className="onyba-agenda-sum-label">User Type</span>
                            <span className="onyba-agenda-sum-val">Patient</span>
                        </div>
                        <div className="onyba-agenda-summary-row">
                            <span className="onyba-agenda-sum-label">Patient Name</span>
                            <span className="onyba-agenda-sum-val">John Carter</span>
                        </div>
                        <div className="onyba-agenda-summary-row">
                            <span className="onyba-agenda-sum-label">Session Date</span>
                            <span className="onyba-agenda-sum-val">May 20, 2026</span>
                        </div>
                        <div className="onyba-agenda-summary-row">
                            <span className="onyba-agenda-sum-label">Session Time</span>
                            <span className="onyba-agenda-sum-val">10:00 AM</span>
                        </div>
                        <div className="onyba-agenda-summary-row">
                            <span className="onyba-agenda-sum-label">Session Type</span>
                            <span className="onyba-agenda-sum-val">Adult</span>
                        </div>
                    </div>

                    <div className="onyba-agenda-footer-action">
                        <button type="button" className="onyba-agenda-btn-submit">Create Agenda</button>
                    </div>

                </div>

            </div>
        </div>
    </div> */}

    <div className="modal fade agd-custom-modal" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
      
      <div className="modal-header">
        <h3 className="modal-title fw-bold" id="exampleModalLabel" style={{ color: "#212529", marginBottom: "5px" }}>Agenda</h3>
        <p className="text-muted small" style={{margin:"0"}}>Book the agenda for the user.</p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <form id="agdPopupForm">
          
          <div className="modal-body">
            
            <div className="agd-popup-form-group">
                <label className="agd-popup-label">Patient Name*</label>
                <select className="agd-popup-select" id="agdPatientField" required>
                    <option value="John Carter" selected>John Carter</option>
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="Alex Smith">Alex Smith</option>
                </select>
            </div>

            <div className="agd-popup-flex-row">
                
                <div className="agd-popup-flex-col-left">
                    <label className="agd-popup-label">Pick a Date</label>
                    <div className="agd-popup-calendar-box">
                        <div className="agd-popup-calendar-nav">
                            <span>April 2026</span>
                            <div className="agd-popup-calendar-icons">
                                <i className="bi bi-chevron-left"></i>
                                <i className="bi bi-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div className="agd-popup-calendar-days-wrapper">
                            <div className="agd-popup-day-cell agd-popup-day-header">Mon</div>
                            <div className="agd-popup-day-cell agd-popup-day-header">Tue</div>
                            <div className="agd-popup-day-cell agd-popup-day-header">Wed</div>
                            <div className="agd-popup-day-cell agd-popup-day-header">Thur</div>
                            <div className="agd-popup-day-cell agd-popup-day-header">Fri</div>
                            <div className="agd-popup-day-cell agd-popup-day-header">Sat</div>
                            <div className="agd-popup-day-cell agd-popup-day-header">Sun</div>
                            
                            <div className="agd-popup-day-cell agd-popup-day-clickable agd-popup-day-active">1</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">2</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">3</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">4</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">5</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">6</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">7</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">8</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">9</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">10</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">11</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">12</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">13</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">14</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">15</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">16</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">17</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">18</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">19</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">20</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">21</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">22</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">23</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">24</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">25</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">26</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">27</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">28</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">29</div>
                            <div className="agd-popup-day-cell agd-popup-day-disabled">30</div>
                            <div className="agd-popup-day-cell agd-popup-day-clickable">31</div>
                        </div>
                    </div>
                </div>

                <div className="agd-popup-flex-col-right">
                    <label className="agd-popup-label">Available Times</label>
                    <div className="agd-popup-time-slots-container">
                        
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="09:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">09:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="10:00" className="agd-popup-time-input" checked/>
                            <span className="agd-popup-time-label">10:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="11:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">11:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="12:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">12:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="01:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">01:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="02:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">02:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="03:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">03:00</span>
                        </div>
                        <div className="agd-popup-time-checkbox-wrapper">
                            <input type="checkbox" name="time_slots" value="04:00" className="agd-popup-time-input"/>
                            <span className="agd-popup-time-label">04:00</span>
                        </div>

                    </div>
                </div>

            </div>

            <div className="agd-popup-form-group">
                <label className="agd-popup-label">Service Name*</label>
                <select className="agd-popup-select" id="agdServiceField" required>
                    <option value="" disabled selected>Select service</option>
                    <option value="Consultation">General Consultation</option>
                    <option value="Therapy">Therapy Session</option>
                </select>
            </div>

            <div className="agd-popup-form-group">
                <label className="agd-popup-label">Add Remarks</label>
                <textarea className="agd-popup-textarea" rows={3} placeholder="Enter remarks or notes here"></textarea>
            </div>

            <div className="agd-popup-form-group">
                <h5 className="agd-popup-summary-title">Session Summary</h5>
                <div className="agd-popup-summary-card">
                    <div className="agd-popup-summary-item">
                        <span className="agd-popup-summary-lbl">User Type</span>
                        <span className="agd-popup-summary-val">Patient</span>
                    </div>
                    <div className="agd-popup-summary-item">
                        <span className="agd-popup-summary-lbl">Patient Name</span>
                        <span className="agd-popup-summary-val" id="agdSummaryPatient">John Carter</span>
                    </div>
                    <div className="agd-popup-summary-item">
                        <span className="agd-popup-summary-lbl">Session Date</span>
                        <span className="agd-popup-summary-val" id="agdSummaryDate">May 20, 2026</span>
                    </div>
                    <div className="agd-popup-summary-item">
                        <span className="agd-popup-summary-lbl">Session Time</span>
                        <span className="agd-popup-summary-val" id="agdSummaryTime">10:00 AM</span>
                    </div>
                    <div className="agd-popup-summary-item">
                        <span className="agd-popup-summary-lbl">Session Type</span>
                        <span className="agd-popup-summary-val">Adult</span>
                    </div>
                </div>
            </div>

          </div>
          
          <div className="modal-footer">
            <button type="submit" className="agd-popup-btn-submit">Create Agenda</button>
          </div>

      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default AgendaCalendarPopup
