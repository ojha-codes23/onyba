"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AddClinicPatient = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    number: "", // Registration/File Number
    idType: "DNI",
    idNumber: "",
    country: "Spain",
    sex: "Male",
    children: "Yes",
    email: "",
    mobile: "",
    address: "",
    city: "",
    zip: "",
    insurance: "",
    group: "",
    section: "",
    nextSession: "",
    lastSession: "",
    insuranceNo: "",
    registrationDate: "02/03/2026",
    dob: "",
    age: "",
    phone: "",
    profileImage: null,
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev: any) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target

    if (files && files[0]) {
      setFormData((prev: any) => {
        return {
          ...prev,
          [name]: files[0]
        }
      })
    }
  }

  const addPatient = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.mobile.trim()) {
      alert("Please fill in all required fields marked with *")
      return
    }

    try {
      // Construct new patient object matching format in clinicPatients.json
      const newPatient = {
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        age: Number(formData.age) || 18,
        avatar: formData.profileImage 
          ? URL.createObjectURL(formData.profileImage) 
          : "/images/dash-user-icon.svg",
        dni: formData.idNumber || "N/A",
        email: formData.email || "N/A",
        phone: formData.phone || formData.mobile || "N/A",
        lastSession: formData.lastSession || "None",
        nextSessionDate: formData.nextSession || "None",
        nextSessionTime: "",
        totalSessions: "0",
        status: "Active"
      }

      // Save to localStorage
      const existingPatientsRaw = localStorage.getItem("customPatients")
      const existingPatients = existingPatientsRaw ? JSON.parse(existingPatientsRaw) : []
      existingPatients.push(newPatient)
      localStorage.setItem("customPatients", JSON.stringify(existingPatients))

      alert("Patient added successfully!")
      router.push('/clinic-patients')
    } catch (error) {
      console.error("Failed to add patient:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <>
      <main className="gl-content-body">
        <div className="acp-wrapper acp-main-container">

          <div className="acp-header-area">
            <div className="acp-title-flex">
              <Link href="/clinic-patients" className="acp-back-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style={{ width: "19px", height: "19px" }}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </Link>
              <h1 className="acp-main-title">Add Clinic Patient</h1>
            </div>
            <p className="acp-subtitle-text">Please add patient details</p>
          </div>

          <div className="acp-section-heading">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" style={{ width: "20px", height: "20px" }}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>Patient Details</span>
          </div>

          <form onSubmit={addPatient}>

            <div className="acp-top-meta-row">
              <div>
                <label className="acp-field-label">Profile Image</label>
                <div className="acp-upload-flex-box">

                  <input 
                    type="file" 
                    id="acpPatientPhoto" 
                    name="profileImage" 
                    onChange={handleFile} 
                    accept="image/*" 
                    className="acp-hidden-file-input"
                  />

                  <div 
                    className="acp-avatar-circle"
                    onClick={() => document.getElementById('acpPatientPhoto')?.click()}
                    style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {formData.profileImage ? (
                      <img 
                        src={typeof formData.profileImage === 'string' ? formData.profileImage : URL.createObjectURL(formData.profileImage)} 
                        alt="Profile Preview" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style={{ width: "24px", height: "24px" }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                    )}
                  </div>

                  <button 
                    type="button" 
                    className="acp-photo-upload-btn"
                    onClick={() => document.getElementById('acpPatientPhoto')?.click()}
                  >
                    Upload Photo
                  </button>

                </div>
              </div>

              <div className="acp-reg-date-box">
                <span className="acp-field-label" style={{ marginBottom: "0" }}>Registration Date</span>
                <input type="text" value={formData?.registrationDate} onChange={handleInput} name='registrationDate' className="acp-form-input-field acp-reg-date-input" />
              </div>
            </div>

            <div className="acp-grid-row acp-grid-5cols">
              <div className="acp-input-group">
                <label className="acp-field-label">First Name*</label>
                <input type="text" value={formData?.firstName} onChange={handleInput} placeholder="Enter your first name" name='firstName' className="acp-form-input-field" required />
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Last Name*</label>
                <input type="text" value={formData?.lastName} onChange={handleInput} placeholder="Enter your last name" name='lastName' className="acp-form-input-field" required />
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Num</label>
                <input type="text" value={formData?.number} onChange={handleInput} name='number' className="acp-form-input-field" />
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">ID Type</label>
                <select value={formData?.idType} onChange={handleInput} name='idType' className="acp-form-input-field">
                  <option>DNI</option>
                  <option>Passport</option>
                </select>
                <div className="acp-select-custom-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style={{ width: "16px", height: "16px" }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">ID Number</label>
                <input type="text" value={formData?.idNumber} onChange={handleInput} name='idNumber' className="acp-form-input-field" />
              </div>
            </div>

            <div className="acp-grid-row acp-grid-4cols">
              <div className="acp-input-group">
                <label className="acp-field-label">Country of Origin</label>
                <select value={formData?.country} onChange={handleInput} name='country' className="acp-form-input-field">
                  <option>Spain</option>
                  <option>Other</option>
                </select>
                <div className="acp-select-custom-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style={{ width: "16px", height: "16px" }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Sex</label>
                <select value={formData?.sex} onChange={handleInput} name='sex' className="acp-form-input-field">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="acp-select-custom-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style={{ width: "16px", height: "16px" }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Children?</label>
                <select value={formData?.children} onChange={handleInput} name='children' className="acp-form-input-field">
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <div className="acp-select-custom-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style={{ width: "16px", height: "16px" }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Mobile*</label>
                <input type="text" value={formData?.mobile} onChange={handleInput} name='mobile' className="acp-form-input-field" required />
              </div>
            </div>

            <div className="acp-grid-row acp-grid-4cols">
              <div className="acp-input-group">
                <label className="acp-field-label">Phone</label>
                <input type="text" value={formData?.phone} onChange={handleInput} name='phone' className="acp-form-input-field" />
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">E-mail</label>
                <input type="email" value={formData?.email} onChange={handleInput} name='email' className="acp-form-input-field" />
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Date of Birth</label>
                <input type="text" value={formData?.dob} onChange={handleInput} name='dob' className="acp-form-input-field" />
              </div>
              <div className="acp-input-group">
                <label className="acp-field-label">Age</label>
                <input type="text" value={formData?.age} onChange={handleInput} name='age' className="acp-form-input-field" />
              </div>
            </div>

            <div className="acp-submit-action-area">
              <button type="submit" className="acp-main-submit-btn">Submit</button>
            </div>

          </form>
        </div>
      </main>
    </>
  )
}

export default AddClinicPatient
