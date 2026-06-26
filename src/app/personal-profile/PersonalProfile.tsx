"use client";

import React, { useState } from 'react';
import ReasonConsultationPopup from '@/src/component/personalprofilepopup/ReasonConsultationPopup';
import SpecializationPopup from '@/src/component/personalprofilepopup/SpecializationPopup';
import { MdOutlineWatchLater } from "react-icons/md";
import { toast } from "react-toastify";

const PersonalProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [selectSession, setSelectSession] = useState(false);
    const [selectedModes, setSelectedModes] = useState<string[]>([]);

    const [profileImage, setProfileImage] = useState("/images/user-personal-profile.svg");

    const [profileData, setProfileData] = useState({
        fullName: "Dr. Sarah Johnson",
        surname1: "Rodríguez",
        surname2: "Fernández",
        contactNumber: "+1234567890",
        email: "sarah@gmail.com",
        vatNumber: "US12345678",
        streetAddress: "350 Fifth Avenue, Suite 900",
        city: ["New York", "Canada", "Australia"],
        postalCode: "10118",
        province: ["New York", "Canada", "Australia"],
        country: ["United States", "Canada", "Australia"],
        experience: "10",
        bio: `I'm a clinical psychologist with 10 years of experience helping adults navigate anxiety, trauma, and relational challenges. My approach blends evidence-based modalities — CBT, EMDR, ACT — with a deeply human, collaborative stance. I believe therapy works best when it feels honest, warm, and a little brave.`,
    });

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [slots, setSlots] = useState([
        {
            time: "",
            period: "AM",
        },
    ]);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    // Add empty cells at the end
    while (calendarDays.length % 7 !== 0) {
        calendarDays.push(null);
    }

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleEditSave = () => {
        if (isEditing) {
            console.log("save data", profileData);
        }

        setIsEditing(!isEditing);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const addSlot = () => {
        setSlots([
            ...slots,
            {
                time: "",
                period: "AM",
            },
        ]);
    };

    const removeSlot = (index: number) => {
        setSlots(slots.filter((_, i) => i !== index));
    };

    const updateSlotTime = (
        index: number,
        value: string
    ) => {
        const updated = [...slots];
        updated[index].time = value;
        setSlots(updated);
    };

    const updateSlotPeriod = (
        index: number,
        value: string
    ) => {
        const updated = [...slots];
        updated[index].period = value;
        setSlots(updated);
    };

    const handleSaveAvailability = () => {
        const availabilityData = {
            date: selectedDate.toLocaleDateString("en-US"),
            day: selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
            }),
            slots,
        };

        console.log("Availability Data:", availabilityData);
        toast.success("Availability saved successfully!");
    };

    const handleModeToggle = (mode: string) => {
        setSelectedModes((prev) =>
            prev.includes(mode) ? prev.filter((item) => item !== mode) : [...prev, mode]
        )
    }

    return (
        <>
            <main className="gl-content-body">

                <div className="onyba-prof-page-wrapper">

                    <div className="onyba-prof-main-col">

                        <div className="onyba-prof-section-container">
                            <div className="onyba-prof-section-header">
                                <div className="onyba-prof-header-title-box">
                                    <span className="onyba-prof-icon-badge"><img src="images/personal-profile-icon.svg" alt="" /></span>
                                    <h2>Personal Profile</h2>
                                </div>
                                <button className="onyba-prof-btn-action" onClick={handleEditSave}>{isEditing ? " Save Changes" : "Edit Profile"}</button>
                            </div>

                            <div className="onyba-prof-user-card">
                                <div className="onyba-prof-avatar-wrap">
                                    <img src={profileImage} alt="Dr. Sarah Johnson" className="onyba-prof-avatar-img" />
                                    <label htmlFor="onyba-prof-avatar-upload" className="onyba-prof-upload-icon">
                                        <img src="images/upload-file-icon.svg" alt="Upload" />
                                        <input type="file" id="onyba-prof-avatar-upload" accept="image/*" onChange={handleImageChange} />
                                    </label>
                                </div>
                                <div className="onyba-prof-user-details">
                                    <h3>{profileData.fullName}</h3>
                                    <p className="onyba-prof-user-subtitle">Clinical Psychologist . RCI Registered</p>
                                    <div className="onyba-prof-badge-row">
                                        <span className="onyba-prof-badge onyba-prof-badge--exp">{profileData.experience} Years Exp.</span>
                                        <span className="onyba-prof-badge onyba-prof-badge--status">Available</span>
                                    </div>
                                </div>
                            </div>

                            <div className="onyba-prof-form-inline-row">
                                <div className="onyba-prof-field-box onyba-prof-w-50">
                                    <label>Full Name*</label>
                                    <input type="text" name="fullName" value={profileData.fullName} onChange={handleChange} disabled={!isEditing} />
                                </div>
                                <div className="onyba-prof-field-box onyba-prof-w-25">
                                    <label>Surname 1*</label>
                                    <input type="text" value={profileData.surname1} disabled />
                                </div>
                                <div className="onyba-prof-field-box onyba-prof-w-25">
                                    <label>Surname 2 (Optional)</label>
                                    <input type="text" value={profileData.surname2} disabled />
                                </div>
                            </div>

                            <div className="onyba-prof-form-inline-row">
                                <div className="onyba-prof-field-box onyba-prof-w-33">
                                    <label>Contact Number*</label>
                                    <input type="text" name="contactNumber" value={profileData.contactNumber} onChange={handleChange} disabled={!isEditing} />
                                </div>
                                <div className="onyba-prof-field-box onyba-prof-w-33">
                                    <label>Email*</label>
                                    <input type="email" name="email" value={profileData.email} onChange={handleChange} disabled={!isEditing} />
                                </div>
                                <div className="onyba-prof-field-box onyba-prof-w-33">
                                    <label>VAT Number*</label>
                                    <input type="text" value={profileData.vatNumber} disabled />
                                </div>
                            </div>

                            <div className="onyba-prof-field-box onyba-prof-w-100">
                                <label>Street-number-floor*</label>
                                <input type="text" value={profileData.streetAddress} disabled />
                            </div>

                            <div className="onyba-prof-form-inline-row">
                                <div className="onyba-prof-field-box onyba-prof-w-50">
                                    <label>City*</label>
                                    <div className="onyba-prof-select-custom">
                                        <select>
                                            {profileData.city.map((item, index) => (

                                                <option>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="onyba-prof-field-box onyba-prof-w-50">
                                    <label>Postal Code*</label>
                                    <input type="text" value={profileData.postalCode} disabled />
                                </div>
                            </div>

                            <div className="onyba-prof-form-inline-row">
                                <div className="onyba-prof-field-box onyba-prof-w-50">
                                    <label>Province*</label>
                                    <div className="onyba-prof-select-custom">
                                        <select>
                                            {profileData.province.map((item, index) => (

                                                <option>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="onyba-prof-field-box onyba-prof-w-50">
                                    <label>Country*</label>
                                    <div className="onyba-prof-select-custom">
                                        <select>
                                            {profileData.country.map((item, index) => (

                                                <option>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="onyba-prof-field-box onyba-prof-w-100">
                                <label>Years of Experience</label>
                                <input type="text" name="experience" value={profileData.experience} onChange={handleChange} disabled={!isEditing} />
                            </div>

                            <div className="onyba-prof-field-box onyba-prof-w-100">
                                <label>Professional Bio</label>
                                <textarea rows={4} name="bio" value={profileData.bio} onChange={handleChange} disabled={!isEditing} />
                            </div>
                        </div> <hr className="onyba-prof-separator" />

                        <div className="onyba-prof-section-container">
                            <div className="onyba-prof-section-header">
                                <div className="onyba-prof-header-title-box">
                                    <span className="onyba-prof-icon-badge"><img src="images/certificate-icon.svg" alt="" /></span>
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
                                    <span className="onyba-prof-icon-badge"><img src="images/category-selection.svg" alt="" /></span>
                                    <h2>Category Selection</h2>
                                </div>
                                <button className="onyba-prof-btn-action" onClick={() => setSelectSession(!selectSession)}>Add</button>
                            </div>

                            {selectSession && (<>
                                <p className="onyba-prof-sub-title-text">Select session mode</p>
                                <div className="onyba-prof-mode-toggle-row">
                                    <button className={`onyba-prof-btn-mode ${selectedModes.includes("online") ? "onyba-prof-btn-mode--active" : "onyba-prof-btn-mode--inactive"}`} onClick={() => handleModeToggle("online")}>
                                        <img src="images/online-icon.svg" alt="" />Online</button>

                                    <button className={`onyba-prof-btn-mode ${selectedModes.includes("in-person") ? "onyba-prof-btn-mode--active" : "onyba-prof-btn-mode--inactive"}`} onClick={() => handleModeToggle("in-person")}>
                                        <img src="images/hugeicons_location-05.svg" alt="" /> In-Person</button>
                                </div>
                            </>
                            )}

                            <p className="onyba-prof-sub-title-text">Clinic Address</p>
                            <div className="onyba-prof-address-card">
                                <span className="onyba-prof-pin"><img src="images/location-profile-icon.svg" alt="" /></span>
                                <p>123 Healing Street, Los Angeles, CA 90001, United States</p>
                            </div>
                        </div> <hr className="onyba-prof-separator" />

                        <div className="onyba-prof-section-container">
                            <div className="onyba-prof-section-header">
                                <div className="onyba-prof-header-title-box">
                                    <span className="onyba-prof-icon-badge"><img src="images/star-icons.svg" alt="" /></span>
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
                        </div> <hr className="onyba-prof-separator" />

                        <div className="onyba-prof-section-container">
                            <div className="onyba-prof-section-header">
                                <div className="onyba-prof-header-title-box">
                                    <span className="onyba-prof-icon-badge"><img src="images/star-icons.svg" alt="" /></span>
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
                        </div> <hr className="onyba-prof-separator" />

                        <div className="onyba-prof-section-container">
                            <div className="onyba-prof-section-header">
                                <div className="onyba-prof-header-title-box">
                                    <span className="onyba-prof-icon-badge"><img src="images/file-load-icon.svg" alt="" /></span>
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
                        </div> <hr className="onyba-prof-separator" />

                        <div className="onyba-prof-section-container">
                            <div className="onyba-prof-section-header">
                                <div className="onyba-prof-header-title-box">
                                    <span className="onyba-prof-icon-badge"><img src="images/file-load-icon.svg" alt="" /></span>
                                    <h2>Contact Admin</h2>
                                </div>
                            </div>

                            <div className="onyba-prof-admin-bar">
                                <span>Email Address</span>
                                <a href="mailto:admin@onyba.com" className="onyba-prof-admin-email-pill">admin@onyba.com</a>
                            </div>
                        </div> </div>
                </div>

                <div className="onyba-avail-page-wrapper">

                    <div className="onyba-avail-header-container">
                        <div className="onyba-avail-title-box">
                            <span className="onyba-avail-icon-circle"><img src="images/clock-avl-icon.svg" alt="" /></span>
                            <h2>Availability Management</h2>
                        </div>
                    </div>

                    <div className="onyba-avail-content-body">

                        <div className="onyba-avail-calendar-section">

                            <div className="onyba-avail-month-nav">
                                {/* <span className="onyba-avail-month-title">May 2026</span> */}
                                <span className="onyba-avail-month-title">
                                    {currentDate.toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                                <div className="onyba-avail-nav-arrows">
                                    {/* <button className="onyba-avail-arrow-btn">&#10094;</button>
                                    <button className="onyba-avail-arrow-btn">&#10095;</button> */}
                                    <button
                                        className="onyba-avail-arrow-btn"
                                        onClick={handlePrevMonth}
                                    >
                                        &#10094;
                                    </button>

                                    <button
                                        className="onyba-avail-arrow-btn"
                                        onClick={handleNextMonth}
                                    >
                                        &#10095;
                                    </button>
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

                            {/* <div className="onyba-avail-days-stack">
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
                            </div> */}
                            <div className="onyba-avail-days-stack">
                                {Array.from({
                                    length: Math.ceil(calendarDays.length / 7),
                                }).map((_, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="onyba-avail-days-row"
                                    >
                                        {calendarDays
                                            .slice(rowIndex * 7, rowIndex * 7 + 7)
                                            .map((day, index) => {

                                                const today = new Date();

                                                const isToday =
                                                    day &&
                                                    day === today.getDate() &&
                                                    month === today.getMonth() &&
                                                    year === today.getFullYear();

                                                const isSelected =
                                                    day &&
                                                    day === selectedDate.getDate() &&
                                                    month === selectedDate.getMonth() &&
                                                    year === selectedDate.getFullYear();

                                                return (
                                                    <div
                                                        key={index}
                                                        className={`onyba-avail-date-cell
                                ${!day ? "onyba-avail-date-empty" : ""}
                                ${isToday ? "onyba-avail-date--today" : ""}
                                ${isSelected ? "onyba-avail-date--selected" : ""}
                            `}
                                                        onClick={() => {
                                                            if (!day) return;

                                                            setSelectedDate(
                                                                new Date(year, month, day)
                                                            );
                                                        }}
                                                    >
                                                        {day}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="onyba-avail-slots-section">

                            <h3 className="onyba-avail-section-title">Available Time Slots</h3>
                            <p className="onyba-avail-selected-day-text" id="onyba-selected-date-label">
                                {selectedDate.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    weekday: "short",
                                })}
                            </p>

                            {/* <div className="onyba-avail-slots-vertical-list" id="onyba-slots-container">

                                <div className="onyba-avail-slot-item-row">
                                    <div className="onyba-avail-input-time-wrap">
                                        <input type="text" className="onyba-avail-time-field" value={selectedTime} onChange={handleTime} />
                                        <span className="onyba-avail-clock-icon"><MdOutlineWatchLater />
                                        </span>
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

                            </div> */}

                            <div
                                className="onyba-avail-slots-vertical-list"
                                id="onyba-slots-container"
                            >
                                {slots.map((slot, index) => (
                                    <div
                                        className="onyba-avail-slot-item-row"
                                        key={index}
                                    >
                                        <div className="onyba-avail-input-time-wrap">

                                            {/* Time Dropdown */}
                                            <select
                                                className="onyba-avail-time-field"
                                                value={slot.time}
                                                onChange={(e) =>
                                                    updateSlotTime(index, e.target.value)
                                                }
                                            >
                                                <option value="">
                                                    Select Time
                                                </option>

                                                <option value="09:00">09:00</option>
                                                <option value="09:30">09:30</option>
                                                <option value="10:00">10:00</option>
                                                <option value="10:30">10:30</option>
                                                <option value="11:00">11:00</option>
                                                <option value="11:30">11:30</option>
                                                <option value="12:00">12:00</option>
                                                <option value="12:30">12:30</option>
                                                <option value="01:00">01:00</option>
                                                <option value="01:30">01:30</option>
                                                <option value="02:00">02:00</option>
                                            </select>

                                            <span className="onyba-avail-clock-icon">
                                                <MdOutlineWatchLater />
                                            </span>
                                        </div>

                                        <div className="onyba-avail-select-period-wrap">
                                            <select
                                                className="onyba-avail-period-dropdown"
                                                value={slot.period}
                                                onChange={(e) =>
                                                    updateSlotPeriod(index, e.target.value)
                                                }
                                            >
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>

                                        <button
                                            className="onyba-avail-btn-remove"
                                            onClick={() => removeSlot(index)}
                                        >
                                            &times;
                                        </button>

                                        {index === slots.length - 1 && (
                                            <button
                                                className="onyba-avail-btn-add-more"
                                                onClick={addSlot}
                                            >
                                                +
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="onyba-avail-footer-actions-row">
                                {/* <button className="onyba-avail-btn-secondary">Save for May 6</button> */}
                                <button className="onyba-avail-btn-secondary">
                                    Save for{" "}
                                    {selectedDate.toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </button>
                                <button className="onyba-avail-btn-maroon">Save for all Saturdays</button>
                            </div>

                            <button className="onyba-avail-btn-block-submit" onClick={handleSaveAvailability}>Save Availability</button>

                        </div>

                    </div>
                </div>
            </main>

            <ReasonConsultationPopup />
            <SpecializationPopup />

        </>
    )
}

export default PersonalProfile;
