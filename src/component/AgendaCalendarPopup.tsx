"use client"
import React, { useState } from 'react';

export interface Patient {
  id: string;
  name: string;
  userType: string;
}

export interface Service {
  id: string;
  name: string;
  sessionType: string;
}

export interface AgendaCalendarPopupProps {
  patients?: Patient[];
  services?: Service[];
  availableTimes?: string[];
  onSubmit?: (data: any) => void;
}

const DEFAULT_PATIENTS: Patient[] = [
  { id: '1', name: 'John Carter', userType: 'Patient' },
  { id: '2', name: 'Jane Doe', userType: 'Patient' },
  { id: '3', name: 'Alex Smith', userType: 'Patient' },
];

const DEFAULT_SERVICES: Service[] = [
  { id: '1', name: 'General Consultation', sessionType: 'Adult' },
  { id: '2', name: 'Therapy Session', sessionType: 'Adult' },
];

const DEFAULT_TIMES = ['09:00', '10:00', '11:00', '12:00', '01:00', '02:00', '03:00', '04:00'];

const AgendaCalendarPopup: React.FC<AgendaCalendarPopupProps> = ({
  patients = DEFAULT_PATIENTS,
  services = DEFAULT_SERVICES,
  availableTimes = DEFAULT_TIMES,
  onSubmit,
}) => {
  const [selectedPatientId, setSelectedPatientId] = useState(patients[0]?.id || '');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [remarks, setRemarks] = useState('');

  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1)); // April 2026
  const [selectedDay, setSelectedDay] = useState<number | null>(1);

  const selectedPatient = patients.find((p) => p.id === selectedPatientId);
  const selectedService = services.find((s) => s.id === selectedServiceId);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const monthYearString = `${monthNames[month]} ${year}`;

  const disabledDays = new Set([4, 5, 6, 9, 10, 12, 15, 17, 20, 24, 25, 26, 30]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      patient: selectedPatient,
      service: selectedService,
      date: selectedDay ? new Date(year, month, selectedDay) : null,
      time: selectedTime,
      remarks,
    };
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log('Form Submitted', data);
    }
  };

  const formatSummaryDate = () => {
    if (!selectedDay) return '-';
    return `${monthNames[month]} ${selectedDay}, ${year}`;
  };

  const formatTime = (time: string) => {
    if (!time) return '-';
    const hour = parseInt(time.split(':')[0], 10);
    const ampm = hour >= 7 && hour < 12 ? 'AM' : 'PM';
    return `${time} ${hour === 12 ? 'PM' : ampm}`;
  };

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

      <div
        className="modal fade agd-custom-modal"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fw-bold" id="exampleModalLabel" style={{ color: '#212529', marginBottom: '5px' }}>
                Agenda
              </h3>
              <p className="text-muted small" style={{ margin: '0' }}>
                Book the agenda for the user.
              </p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form id="agdPopupForm" onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="agd-popup-form-group">
                  <label className="agd-popup-label">Patient Name*</label>
                  <select
                    className="agd-popup-select"
                    id="agdPatientField"
                    required
                    value={selectedPatientId}
                    onChange={(e) => setSelectedPatientId(e.target.value)}
                  >
                    {patients.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="agd-popup-flex-row">
                  <div className="agd-popup-flex-col-left">
                    <label className="agd-popup-label">Pick a Date</label>
                    <div className="agd-popup-calendar-box">
                      <div className="agd-popup-calendar-nav">
                        <span>{monthYearString}</span>
                        <div className="agd-popup-calendar-icons" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                          <img
                            src="/images/left-icon-agenda.svg"
                            alt="Previous Month"
                            onClick={handlePrevMonth}
                            style={{ cursor: 'pointer', width: '14px', height: '14px' }}
                          />
                          <img
                            src="/images/right-icon-agenda.svg"
                            alt="Next Month"
                            onClick={handleNextMonth}
                            style={{ cursor: 'pointer', width: '14px', height: '14px' }}
                          />
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

                        {Array.from({ length: startOffset }).map((_, i) => (
                          <div key={`empty-${i}`} className="agd-popup-day-cell"></div>
                        ))}

                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const isDisabled = disabledDays.has(day) && month === 3 && year === 2026;
                          const isSelected = selectedDay === day;

                          let className = 'agd-popup-day-cell ';
                          if (isDisabled) {
                            className += 'agd-popup-day-disabled';
                          } else {
                            className += 'agd-popup-day-clickable';
                            if (isSelected) {
                              className += ' agd-popup-day-active';
                            }
                          }

                          return (
                            <div
                              key={day}
                              className={className}
                              onClick={() => !isDisabled && setSelectedDay(day)}
                            >
                              {day}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="agd-popup-flex-col-right">
                    <label className="agd-popup-label">Available Times</label>
                    <div className="agd-popup-time-slots-container">
                      {availableTimes.map((time) => (
                        <div className="agd-popup-time-checkbox-wrapper" key={time}>
                          <input
                            type="checkbox"
                            name="time_slots"
                            value={time}
                            className="agd-popup-time-input"
                            checked={selectedTime === time}
                            onChange={() => setSelectedTime(time)}
                          />
                          <span className="agd-popup-time-label">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="agd-popup-form-group">
                  <label className="agd-popup-label">Service Name*</label>
                  <select
                    className="agd-popup-select"
                    id="agdServiceField"
                    required
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="agd-popup-form-group">
                  <label className="agd-popup-label">Add Remarks</label>
                  <textarea
                    className="agd-popup-textarea"
                    rows={3}
                    placeholder="Enter remarks or notes here"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  ></textarea>
                </div>

                <div className="agd-popup-form-group">
                  <h5 className="agd-popup-summary-title">Session Summary</h5>
                  <div className="agd-popup-summary-card">
                    <div className="agd-popup-summary-item">
                      <span className="agd-popup-summary-lbl">User Type</span>
                      <span className="agd-popup-summary-val">{selectedPatient?.userType || '-'}</span>
                    </div>
                    <div className="agd-popup-summary-item">
                      <span className="agd-popup-summary-lbl">Patient Name</span>
                      <span className="agd-popup-summary-val" id="agdSummaryPatient">
                        {selectedPatient?.name || '-'}
                      </span>
                    </div>
                    <div className="agd-popup-summary-item">
                      <span className="agd-popup-summary-lbl">Session Date</span>
                      <span className="agd-popup-summary-val" id="agdSummaryDate">
                        {formatSummaryDate()}
                      </span>
                    </div>
                    <div className="agd-popup-summary-item">
                      <span className="agd-popup-summary-lbl">Session Time</span>
                      <span className="agd-popup-summary-val" id="agdSummaryTime">
                        {formatTime(selectedTime)}
                      </span>
                    </div>
                    <div className="agd-popup-summary-item">
                      <span className="agd-popup-summary-lbl">Session Type</span>
                      <span className="agd-popup-summary-val">{selectedService?.sessionType || '-'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="agd-popup-btn-submit">
                  Create Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendaCalendarPopup;
