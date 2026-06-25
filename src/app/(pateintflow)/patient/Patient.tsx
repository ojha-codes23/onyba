"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import patients from '../../../data/patients.json'
import Pagination from '@/src/component/common/Pagintion';
import AgendaCalendarPopup from '@/src/component/AgendaCalendarPopup';
import DateRangePicker from '@/src/component/DateRangePicker';

const Patient = () => {

    const [searchPatients, setSearchPatients] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [statusFilter, setStatusFilter] = useState("");

    useEffect(() => {
        setCurrentPage(1);
    }, [searchPatients, statusFilter]);


    const filterPatients = patients.filter((patient) => {
        const matchesSearch = patient.name.toLowerCase().includes(searchPatients.toLowerCase()) || patient.email.toLowerCase().includes(searchPatients.toLowerCase()) || patient.phone.toLowerCase().includes(searchPatients.toLowerCase()) || patient.dni.toLowerCase().includes(searchPatients.toLowerCase());
        const matchesStatus = statusFilter === "" || patient.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.ceil(filterPatients.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }

    const paginatedPatients = filterPatients.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <>
            <main className="gl-content-body">
                <div className="dbt-main-wrapper-patients">

                    <div className="dbt4-filter-bar">
                        <div className="dbt4-search-box">
                            <span className="dbt4-search-icon"><img src="/images/search-icon.svg" alt="" /></span>
                            <input type="text" placeholder="Search" value={searchPatients} onChange={(e) => setSearchPatients(e.target.value)} className="dbt4-search-input" />
                        </div>
                        <div className="dbt4-right-filters">
                            <DateRangePicker
                                onChange={(range) => {
                                    console.log("Selected Start Date:", range.startDate);
                                    console.log("Selected End Date:", range.endDate);
                                }}
                            >
                                <button className="dbt4-filter-dropdown" type="button">
                                    Date Range <span className="dbt4-cal-icon"><img src="/images/date-icon.svg" alt="" /></span>
                                </button>
                            </DateRangePicker>
                            <div className="dropdown dbt4-bs-dropdown-wrapper">
                                <button className="dbt4-filter-dropdown dropdown-toggle dbt4-remove-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Status <span className="dbt4-arrow-icon"><img src="/images/dropdown-icon.svg" alt="" /></span>
                                </button>
                                <ul className="dropdown-menu dbt4-bs-menu-custom">
                                    <li><a className="dropdown-item dbt4-bs-item" href="#" onClick={(e) => { e.preventDefault(); setStatusFilter("Active"); }}>Active</a></li>
                                    <li><a className="dropdown-item dbt4-bs-item" href="#" onClick={(e) => { e.preventDefault(); setStatusFilter("Inactive"); }}>Inactive</a></li>
                                    <li><a className="dropdown-item dbt4-bs-item" href="#" onClick={(e) => { e.preventDefault(); setStatusFilter(""); }}>All</a></li>
                                </ul>
                            </div>

                            <Link href="add-clinic-patient" className="dbt4-cta-add-patient">
                                <img src="/images/add-icon.svg" alt="" /> Add Clinic Patients
                            </Link>
                        </div>
                    </div>

                    <div className="dbt-main-wrapper patients">
                        <table className="dbt-data-table dbt4-full-patients-table">
                            <thead>
                                <tr className="dbt3-th-row">
                                    <th className="dbt3-th-cell dbt4-pad-left dbt4-th-sno">S.No.</th>
                                    <th className="dbt3-th-cell dbt4-th-name">Patient Name</th>
                                    <th className="dbt3-th-cell dbt4-th-dni">DNI</th>
                                    <th className="dbt3-th-cell dbt4-th-email">Email</th>
                                    <th className="dbt3-th-cell dbt4-th-phone">Phone Number</th>
                                    <th className="dbt3-th-cell dbt4-th-last-session">Last Session</th>
                                    <th className="dbt3-th-cell dbt4-th-next-session">Next Session</th>
                                    <th className="dbt3-th-cell dbt4-th-total">Total Sessions</th>
                                    <th className="dbt3-th-cell dbt4-th-status">Status</th>
                                    <th className="dbt3-th-cell dbt4-pad-right dbt4-th-action">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterPatients.length === 0 ? (
                                    <tr>
                                        <td colSpan={10} className="dbt4-center-text" style={{ textAlign: "center", padding: "20px" }}>
                                            No Records Found
                                        </td>
                                    </tr>
                                ) : (
                                    paginatedPatients.map((patient, index) => (
                                        <tr key={patient.id} className="dbt-table-row">
                                            <td className="dbt4-pad-left dbt4-sno-text">{String((currentPage - 1) * itemsPerPage + index + 1).padStart(2, '0')}.</td>
                                            <td>
                                                <img src={patient.avatar} alt="User" className="dbt-avatar" />
                                                <div className="dbt-profile-info">
                                                    <span className="dbt-name">{patient.name}</span>
                                                    <span className="dbt-subtext">{patient.age} yrs</span>
                                                </div>
                                            </td>
                                            <td className="dbt4-regular-cell">{patient.dni}</td>
                                            <td className="dbt4-email-cell">{patient.email}</td>
                                            <td className="dbt4-regular-cell">{patient.phone}</td>
                                            <td className="dbt4-regular-cell"><img src="/images/table-date-inner-icon.svg" alt="" /> {patient.lastSession}</td>
                                            <td>
                                                <span className="dbt-day"><img src="/images/table-date-inner-icon.svg" alt="" /> {patient.nextSessionDate}</span>
                                                <span className="dbt-subtext session">{patient.nextSessionTime}</span>
                                            </td>
                                            <td className="dbt4-regular-cell dbt4-center-text">{patient.totalSessions}</td>
                                            <td>
                                                <span className={`dbt4-status-badge ${patient.status === 'Active' ? 'dbt4-badge-active' : 'dbt4-badge-inactive'}`}>
                                                    {patient.status}
                                                </span>
                                            </td>
                                            <td className="dbt4-pad-right dbt4-right-text">
                                                <Link href="patient-profile" className="dbt4-view-profile-btn">View Profile</Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

                </div>
            </main>

            <AgendaCalendarPopup />
        </>
    )
}

export default Patient
