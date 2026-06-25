"use client";

import React, { useState } from 'react'
import clinicPatients from '../../../data/clinicPatients.json'
import Pagination from '@/src/component/common/Pagintion';
import Link from 'next/link';
import AgendaCalendarPopup from '@/src/component/AgendaCalendarPopup';
import DateRangePicker from '@/src/component/DateRangePicker';

const ClinicPatients = () => {

    const [search, searchPatients] = useState<string>("");
    const [statusFilter, setStatusFilter] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<Number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<Number>(5);

    const filterPatients = clinicPatients.filter((patient) => {
        const matchesSearch = patient.name.toLowerCase().includes(search.toLocaleLowerCase());
        const matchesStatus = statusFilter === "All" || patient.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const totalPages = Math.ceil(filterPatients.length / Number(itemsPerPage));
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }

    const paginatedPatients = filterPatients.slice(
        (Number(currentPage) - 1) * Number(itemsPerPage),
        Number(currentPage) * Number(itemsPerPage)
    );


    return (
        <>

            <main className="gl-content-body">
                <div className="dbt-main-wrapper-patients">

                    <div className="dbt4-filter-bar">
                        <div className="dbt4-search-box">
                            <span className="dbt4-search-icon"><img src="/images/search-icon.svg" alt="" /></span>
                            <input type="text" value={search} onChange={(e) => searchPatients(e.target.value)} placeholder="Search" className="dbt4-search-input" />
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
                            {/* <button className="dbt4-filter-dropdown" >Date Range <span className="dbt4-cal-icon"><img src="/images/date-icon.svg" alt="" /></span></button> */}
                            <div className="dropdown dbt4-bs-dropdown-wrapper">
                                <button className="dbt4-filter-dropdown dropdown-toggle dbt4-remove-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Status <span className="dbt4-arrow-icon"><img src="/images/dropdown-icon.svg" alt="" /></span>
                                </button>
                                <ul className="dropdown-menu dbt4-bs-menu-custom">
                                    <li><a className="dropdown-item dbt4-bs-item" href="#" onClick={() => setStatusFilter("Active")}>Active</a></li>
                                    <li><a className="dropdown-item dbt4-bs-item" href="#" onClick={() => setStatusFilter("Inactive")}>Inactive</a></li>
                                    <li><a className="dropdown-item dbt4-bs-item" href="#" onClick={() => setStatusFilter("All")}>All</a></li>
                                </ul>
                            </div>
                            {/* <Link href="add-clinic-patient" className="dbt4-cta-add-patient">
                            <img src="/images/add-icon.svg" alt="" /> Add Clinic Patients
                        </Link> */}
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
                                {paginatedPatients.length > 0 ? (
                                    paginatedPatients.map((patient, index) => (
                                        <tr key={patient.id} className="dbt-table-row">
                                            <td className="dbt4-pad-left dbt4-sno-text">
                                                {String(index + 1).padStart(2, "0")}.
                                            </td>

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

                                            <td className="dbt4-regular-cell">
                                                <img src="/images/table-date-inner-icon.svg" alt="" />{" "}
                                                {patient.lastSession}
                                            </td>

                                            <td>
                                                <span className="dbt-day">
                                                    <img src="/images/table-date-inner-icon.svg" alt="" />{" "}
                                                    {patient.nextSessionDate}
                                                </span>
                                                <span className="dbt-subtext session">
                                                    {patient.nextSessionTime}
                                                </span>
                                            </td>

                                            <td className="dbt4-regular-cell dbt4-center-text">
                                                {patient.totalSessions}
                                            </td>

                                            <td>
                                                <span
                                                    className={`dbt4-status-badge ${patient.status === "Active"
                                                        ? "dbt4-badge-active"
                                                        : "dbt4-badge-inactive"
                                                        }`}
                                                >
                                                    {patient.status}
                                                </span>
                                            </td>

                                            <td className="dbt4-pad-right dbt4-right-text">
                                                <Link href="/patient-profile" className="dbt4-view-profile-btn">
                                                    View Profile
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={10} className="text-center py-4 text-muted">
                                            No Patients Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* <div className="dbt4-pagination-container">
                    <div className="dbt4-pagination-list">
                        <span className="dbt4-page-num">01</span>
                        <span className="dbt4-page-num dbt4-page-active">02</span>
                        <span className="dbt4-page-num">03</span>
                        <span className="dbt4-page-dots">...</span>
                        <span className="dbt4-page-num">04</span>
                        <span className="dbt4-page-num">05</span>
                        <span className="dbt4-page-num">06</span>
                    </div>
                </div> */}

                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />

                </div>
            </main>
            <AgendaCalendarPopup />
        </>
    )
}

export default ClinicPatients
