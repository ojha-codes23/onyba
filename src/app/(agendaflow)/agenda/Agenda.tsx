"use client";
import AgendaCalendarPopup from '@/src/component/AgendaCalendarPopup'
import React, { useState, useEffect } from 'react'
import agendaData from '@/src/data/agendaData.json'
import { useRouter } from 'next/navigation';

const Agenda = () => {

    const router = useRouter();
    const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
    const [paymentFilter, setPaymentFilter] = useState("All");
    const [patientTypeFilter, setPatientTypeFilter] = useState("All");
    const [sessionTypeFilter, setSessionTypeFilter] = useState("All");
    const [sessionStatusFilter, setSessionStatusFilter] = useState("All");
    const [activeDate, setActiveDate] = useState(() => new Date());

    const handlePrevWeek = () => {
        setActiveDate(prev => {
            const d = new Date(prev);
            d.setDate(d.getDate() - 7);
            return d;
        });
    };

    const handleNextWeek = () => {
        setActiveDate(prev => {
            const d = new Date(prev);
            d.setDate(d.getDate() + 7);
            return d;
        });
    };

    const weekDays = React.useMemo(() => {
        const days = [];
        const names = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const startOfWeek = new Date(activeDate);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

        for (let i = 0; i < 7; i++) {
            const d = new Date(startOfWeek);
            d.setDate(d.getDate() + i);
            const isToday = d.toDateString() === new Date().toDateString();
            days.push({
                name: names[i],
                number: d.getDate(),
                headerClass: `agd-day-header ${[0, 6].includes(i) ? 'agd-highlight-bg' : ''} ${isToday ? 'agd-active-day' : ''}`,
                columnClass: `agd-day-column ${[0, 6].includes(i) ? 'agd-highlight-bg' : ''}`
            });
        }
        return days;
    }, [activeDate]);

    const formattedActiveDate = activeDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as Element).closest('.comment-container')) {
                setActiveCommentId(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <>
            <main className="gl-content-body">
                <div className="agd-page-wrapper">
                    <div className="agd-top-bar">
                        <div className="agd-nav-controls">
                            <button className="agd-arrow-btn" onClick={handlePrevWeek}><img src="/images/left-icon-agenda.svg" alt="" /></button>
                            <button className="agd-date-indicator">{formattedActiveDate}</button>
                            <button className="agd-arrow-btn" onClick={handleNextWeek}><img src="/images/right-icon-agenda.svg" alt="" /></button>
                        </div>

                        <div className="agd-filter-group">
                            <div className="agd-dropdown dropdown">
                                <button className="btn agd-drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Payment Status {paymentFilter !== 'All' ? `(${paymentFilter})` : ''} <span className="agd-drop-arrow"><img src="/images/dropdown-right-icon.svg" alt="" /></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className={`dropdown-item ${paymentFilter === 'All' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPaymentFilter('All'); }}>All</a></li>
                                    <li><a className={`dropdown-item ${paymentFilter === 'Partial' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPaymentFilter('Partial'); }}>Partial</a></li>
                                    <li><a className={`dropdown-item ${paymentFilter === 'Pending' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPaymentFilter('Pending'); }}>Pending</a></li>
                                    <li><a className={`dropdown-item ${paymentFilter === 'Paid' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPaymentFilter('Paid'); }}>Paid</a></li>
                                </ul>
                            </div>

                            <div className="agd-dropdown dropdown">
                                <button className="btn agd-drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Patients Type {patientTypeFilter !== 'All' ? `(${patientTypeFilter})` : ''} <span className="agd-drop-arrow"><img src="/images/dropdown-right-icon.svg" alt="" /></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className={`dropdown-item ${patientTypeFilter === 'All' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPatientTypeFilter('All'); }}>All</a></li>
                                    <li><a className={`dropdown-item ${patientTypeFilter === 'Patients (Online)' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPatientTypeFilter('Patients (Online)'); }}>Patients (Online)</a></li>
                                    <li><a className={`dropdown-item ${patientTypeFilter === 'Clinic Patients' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setPatientTypeFilter('Clinic Patients'); }}>Clinic Patients</a></li>
                                </ul>
                            </div>

                            <div className="agd-dropdown dropdown">
                                <button className="btn agd-drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sessions Type {sessionTypeFilter !== 'All' ? `(${sessionTypeFilter})` : ''} <span className="agd-drop-arrow"><img src="/images/dropdown-right-icon.svg" alt="" /></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className={`dropdown-item ${sessionTypeFilter === 'All' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionTypeFilter('All'); }}>All</a></li>
                                    <li><a className={`dropdown-item ${sessionTypeFilter === 'Adult Session' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionTypeFilter('Adult Session'); }}>Adult Session</a></li>
                                    <li><a className={`dropdown-item ${sessionTypeFilter === 'Couple Session' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionTypeFilter('Couple Session'); }}>Couple Session</a></li>
                                    <li><a className={`dropdown-item ${sessionTypeFilter === 'Child Session' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionTypeFilter('Child Session'); }}>Child Session</a></li>
                                    <li><a className={`dropdown-item ${sessionTypeFilter === 'Family Session' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionTypeFilter('Family Session'); }}>Family Session</a></li>
                                    <li><a className={`dropdown-item ${sessionTypeFilter === 'Coaching Session' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionTypeFilter('Coaching Session'); }}>Coaching Session</a></li>
                                </ul>
                            </div>

                            <div className="agd-dropdown dropdown">
                                <button className="btn agd-drop-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Session Status {sessionStatusFilter !== 'All' ? `(${sessionStatusFilter})` : ''} <span className="agd-drop-arrow"><img src="/images/dropdown-right-icon.svg" alt="" /></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className={`dropdown-item ${sessionStatusFilter === 'All' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionStatusFilter('All'); }}>All</a></li>
                                    <li><a className={`dropdown-item ${sessionStatusFilter === 'Upcoming' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionStatusFilter('Upcoming'); }}>Upcoming</a></li>
                                    <li><a className={`dropdown-item ${sessionStatusFilter === 'Completed' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionStatusFilter('Completed'); }}>Completed</a></li>
                                    <li><a className={`dropdown-item ${sessionStatusFilter === 'Cancelled' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionStatusFilter('Cancelled'); }}>Cancelled</a></li>
                                    <li><a className={`dropdown-item ${sessionStatusFilter === 'Reserved' ? 'active-filter' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setSessionStatusFilter('Reserved'); }}>Reserved</a></li>
                                </ul>
                            </div>

                            <button className="agd-calendar-btn" title="Open Calendar" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="/images/date-icon-small.svg" alt="" /></button>
                        </div>
                    </div>

                    <div className="agd-scheduler-container">

                        <div className="agd-grid-header">
                            <div className="agd-time-header-cell"></div>
                            {weekDays.map((day, index) => (
                                <div key={index} className={day.headerClass}>
                                    <span className="agd-day-name">{day.name}</span>
                                    <span className="agd-day-number">{day.number}</span>
                                </div>
                            ))}
                        </div>

                        <div className="agd-grid-body">

                            <div className="agd-time-column">
                                {agendaData.times.map((time, index) => (
                                    <span key={index} className={`agd-time-label ${time === '09:00 AM' ? 'agd-current-time-text' : ''}`}>{time}</span>
                                ))}
                            </div>

                            <div className="agd-days-grid">

                                <div className="agd-current-time-line"></div>

                                {weekDays.map((day, dIndex) => (
                                    <div key={dIndex} className={day.columnClass}>
                                        {agendaData.events.filter(ev => {
                                            if (ev.dayIndex !== dIndex) return false;
                                            if (paymentFilter !== 'All' && ev.paymentStatus !== paymentFilter) return false;
                                            if (patientTypeFilter !== 'All' && ev.patientType !== patientTypeFilter) return false;
                                            if (sessionTypeFilter !== 'All' && ev.sessionType !== sessionTypeFilter) return false;
                                            if (sessionStatusFilter !== 'All' && ev.sessionStatus !== sessionStatusFilter) return false;
                                            return true;
                                        }).map(event => (
                                            <div key={event.id} className={`agd-event-card ${event.colorClass}`} style={{ top: event.top, height: "fitContent" }}>
                                                <div className="agd-ev-header">
                                                    <span className="agd-ev-time"><img src="/images/agenda-clock-icon.svg" alt="" /> {event.time}</span><button className="right-agenda-icon" onClick={() => { event?.mode === "Online" ? router.push("/final-back-to-agenda") : router.push('/back-to-agenda') }}><img src="/images/right-agenda-icon.svg" alt="" /></button>
                                                </div>
                                                <span className="agd-ev-title">{event.name} <span className="agd-ev-age">- {event.age} yrs</span></span>
                                                <span className="agd-ev-id">App. ID: {event.appId}</span>
                                                <div className="agd-ev-tags">
                                                    <span className="agd-tag">{event.type}</span>
                                                    <span className={`agd-tag ${event.mode === 'Online' ? 'online' : 'person'}`}><span className="dot-wht"></span>{event.mode}</span>
                                                    {event.hasComment && (
                                                        <div className="comment-container">
                                                            <button
                                                                className="msg-agd-btn toggle-comment-btn"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setActiveCommentId(activeCommentId === event.id ? null : event.id);
                                                                }}
                                                            >
                                                                <img src="/images/message-agenda-icon.svg" alt="" />
                                                            </button>
                                                            <div className={`comment-box-dropdown ${activeCommentId === event.id ? 'active' : ''}`}>
                                                                <h3>Add a comment</h3>
                                                                <textarea placeholder="Add a comment the payment status..."></textarea>
                                                                <div className="box-actions">
                                                                    <button className="btn-cancel" onClick={() => setActiveCommentId(null)}>Cancel</button>
                                                                    <button className="btn-submit" onClick={() => setActiveCommentId(null)}>Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>


                </div>
            </main>

            <AgendaCalendarPopup />
        </>
    )
}

export default Agenda
