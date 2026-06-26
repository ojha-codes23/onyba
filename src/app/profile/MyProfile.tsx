"use client";

import ProfileApproved from '@/src/component/createprofilepopups/ProfileApproved'
import ProfileRejected from '@/src/component/createprofilepopups/ProfileRejected'
import ProfileUnderReviewPopup from '@/src/component/createprofilepopups/ProfileUnderReviewPopup'
import SubmitProfile from '@/src/component/createprofilepopups/SubmitProfile'
import React, { useRef, useState } from 'react'

const documentOptions = ['DNI', 'NIE', 'RESIDENCE PERMIT', 'PASSPORT'];
const cityOptions = ['New York', 'Los Angeles', 'Chicago'];
const provinceOptions = ['New York', 'California', 'Illinois'];
const countryOptions = ['United States', 'Canada', 'United Kingdom'];
const therapyOptions = ['Adult', 'Child', 'Family', 'Couple', 'Coaching'];
const specializationOptionsList = ['Sexology', 'Addictions', 'Eating Disorders', 'Psychosomatic Disorders', 'Obsessive-Compulsive Disorder (OCCD)'];
const consultationOptionsList = ['Anxiety', 'Low self-esteem', 'Suicidal thoughts', 'Depression', 'Grief'];

const MyProfile = () => {

  const [formData, setFormData] = useState<any>({
    userImage: null,
    full_name: "",
    sur_name: "",
    contact_number: "",
    email: "",
    vat_number: "",
    doctype: "DNI",
    dni_number: "",
    scholarShipId: "",
    street_number_floor: "",
    city: 'New York',
    postal_code: "",
    province: "New York",
    country: "United States",
    certificate: [],
    sessionMode: ['online'],
    clinicAddress: '',
    specilizations: ['Sexology', 'Eating Disorders'],
    experience: '',
    bio: '',
    therapyTypes: ['Child', 'Couple'],
    consultationReasons: ['Anxiety', 'Suicidal thoughts'],
  })

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [specSearch, setSpecSearch] = useState('');
  const [consSearch, setConsSearch] = useState('');
  const [customSpecInput, setCustomSpecInput] = useState('');
  const [errors, setErrors] = useState<any>({});

  const photoInputRef = useRef<HTMLInputElement>(null);
  const certInputRef = useRef<HTMLInputElement>(null);
  const streetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clinicTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [streetSuggestions, setStreetSuggestions] = useState<any[]>([]);
  const [clinicSuggestions, setClinicSuggestions] = useState<any[]>([]);

  const handleStreetSearch = (query: string) => {
    if (streetTimeoutRef.current) clearTimeout(streetTimeoutRef.current);
    if (!query) {
      setStreetSuggestions([]);
      return;
    }
    streetTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`);
        const data = await res.json();
        setStreetSuggestions(data);
      } catch (err) {
        console.error(err);
      }
    }, 500);
  };

  const handleClinicSearch = (query: string) => {
    if (clinicTimeoutRef.current) clearTimeout(clinicTimeoutRef.current);
    if (!query) {
      setClinicSuggestions([]);
      return;
    }
    clinicTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=5`);
        const data = await res.json();
        setClinicSuggestions(data);
      } catch (err) {
        console.error(err);
      }
    }, 500);
  };

  const handleSelectStreet = (sug: any) => {
    setFormData((prev: any) => ({
      ...prev,
      street_number_floor: sug.display_name,
      city: sug.address?.city || sug.address?.town || sug.address?.village || prev.city,
      postal_code: sug.address?.postcode || prev.postal_code,
      country: sug.address?.country || prev.country,
      province: sug.address?.state || prev.province
    }));
    setStreetSuggestions([]);
    if (errors.street_number_floor) setErrors((prev: any) => ({ ...prev, street_number_floor: null }));
    if (errors.city) setErrors((prev: any) => ({ ...prev, city: null }));
    if (errors.postal_code) setErrors((prev: any) => ({ ...prev, postal_code: null }));
    if (errors.country) setErrors((prev: any) => ({ ...prev, country: null }));
    if (errors.province) setErrors((prev: any) => ({ ...prev, province: null }));
  };

  const handleSelectClinic = (sug: any) => {
    setFormData((prev: any) => ({
      ...prev,
      clinicAddress: sug.display_name
    }));
    setClinicSuggestions([]);
    if (errors.clinicAddress) setErrors((prev: any) => ({ ...prev, clinicAddress: null }));
  };

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) setOpenDropdown(null);
    else setOpenDropdown(name);
  };

  const handleToggleArrayItem = (field: string, item: string) => {
    setFormData((prev: any) => {
      const currentArray = prev[field] || [];
      if (currentArray.includes(item)) {
        return { ...prev, [field]: currentArray.filter((i: string) => i !== item) };
      } else {
        return { ...prev, [field]: [...currentArray, item] };
      }
    });
    if (errors[field]) setErrors((prev: any) => ({ ...prev, [field]: null }));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev: any) => ({ ...prev, [name]: null }));
  };

  const handlePhotoUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev: any) => ({ ...prev, userImage: file }));
    }
  };

  const handleCertUpload = (e: any) => {
    const files = Array.from(e.target.files || []);
    setFormData((prev: any) => ({ ...prev, certificate: [...prev.certificate, ...files] }));
    if (errors.certificate) setErrors((prev: any) => ({ ...prev, certificate: null }));
  };

  const handleRemoveCert = (indexToRemove: number) => {
    setFormData((prev: any) => ({
      ...prev,
      certificate: prev.certificate.filter((_: any, index: number) => index !== indexToRemove)
    }));
  };

  const handleAddCustomSpec = () => {
    if (customSpecInput.trim() && !formData.specilizations.includes(customSpecInput.trim())) {
      setFormData((prev: any) => ({
        ...prev,
        specilizations: [...prev.specilizations, customSpecInput.trim()]
      }));
      setCustomSpecInput('');
      if (errors.specilizations) setErrors((prev: any) => ({ ...prev, specilizations: null }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.full_name) newErrors.full_name = "Full Name is required";
    if (!formData.sur_name) newErrors.sur_name = "Surname 1 is required";
    if (!formData.contact_number) newErrors.contact_number = "Contact Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.vat_number) newErrors.vat_number = "VAT Number is required";
    if (!formData.doctype) newErrors.doctype = "Type of Document is required";
    if (!formData.street_number_floor) newErrors.street_number_floor = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postal_code) newErrors.postal_code = "Postal Code is required";
    if (!formData.province) newErrors.province = "Province is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (formData.certificate.length === 0) newErrors.certificate = "Please upload at least one certification";
    if (formData.specilizations.length === 0) newErrors.specilizations = "Please select at least one specialization";
    if (formData.consultationReasons.length === 0) newErrors.consultationReasons = "Please select at least one reason for consultation";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.bio) newErrors.bio = "Bio / Description is required";
    if (formData.sessionMode.length === 0) newErrors.sessionMode = "Please select at least one session mode";
    if (formData.sessionMode.includes('inperson') && !formData.clinicAddress) newErrors.clinicAddress = "Clinic Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted dynamically:", formData);

      let targetId = '#profileSubmitModal';

      // Using the experience field as a dynamic condition to test the modals easily!
      // Example: typing 'approved', 'rejected', or 'review' will open the respective modal.
      if (formData.experience.toLowerCase() === 'approved') {
        targetId = '#profileApprovedModal';
      } else if (formData.experience.toLowerCase() === 'rejected') {
        targetId = '#profileRejectedModal';
      } else if (formData.experience.toLowerCase() === 'review') {
        targetId = '#profileReviewModal';
      }

      // Programmatically click a hidden button to trigger Bootstrap's native JS modal logic securely
      const btn = document.createElement('button');
      btn.style.display = 'none';
      btn.setAttribute('data-bs-toggle', 'modal');
      btn.setAttribute('data-bs-target', targetId);
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    } else {
      console.log("Validation Failed");
    }
  };
  return (
    <>
      <div className="therapist-profile-container py-5">
        <div className="container-fluid m-auto" style={{ maxWidth: "1366px" }}>

          <header className="tp-header mb-5">
            <div className="tp-back-btn">
              <a href="#" className="tp-back-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </a>
              <span>Complete Your Profile</span>
            </div>
            <p className="tp-subtitle">Please provide your professional details</p>
          </header>

          <form id="profileForm" onSubmit={handleSubmit} noValidate>

            <section className="tp-section mb-5">
              <h2 className="tp-section-title"><span className="icon"><img src="/images/personal-user-icon.svg" alt="" /></span> Personal Details</h2>

              <div className="tp-avatar-uploader mb-4">
                <div className="avatar-preview">
                  {formData.userImage ? (
                    <img src={URL.createObjectURL(formData.userImage)} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      className="text-muted">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  )}
                </div>
                <input type="file" accept="image/*" style={{ display: 'none' }} ref={photoInputRef} onChange={handlePhotoUpload} />
                <button type="button" className="tp-btn-secondary" onClick={() => photoInputRef.current?.click()}>Upload Photo</button>
              </div>

              <div className="row g-4">
                <div className="col-md-4">
                  <label className="tp-label">Full Name*</label>
                  <input type="text" className="tp-input" placeholder="Enter your full name" required name="full_name" value={formData.full_name} onChange={handleInputChange} />
                  {errors.full_name && <div style={{ color: 'red', fontSize: '12px' }}>{errors.full_name}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">Surname 1*</label>
                  <input type="text" className="tp-input" placeholder="Enter your surname 1" required name="sur_name" value={formData.sur_name} onChange={handleInputChange} />
                  {errors.sur_name && <div style={{ color: 'red', fontSize: '12px' }}>{errors.sur_name}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">Surname 2 (Optional)</label>
                  <input type="text" className="tp-input" placeholder="Enter your surname 2" />
                </div>

                <div className="col-md-4">
                  <label className="tp-label">Contact Number*</label>
                  <input type="tel" className="tp-input" placeholder="+1234567890" required name="contact_number" value={formData.contact_number} onChange={handleInputChange} />
                  {errors.contact_number && <div style={{ color: 'red', fontSize: '12px' }}>{errors.contact_number}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">Email*</label>
                  <input type="email" className="tp-input" placeholder="Enter your email" required name="email" value={formData.email} onChange={handleInputChange} />
                  {errors.email && <div style={{ color: 'red', fontSize: '12px' }}>{errors.email}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">VAT Number*</label>
                  <input type="text" className="tp-input" placeholder="Enter VAT number" required name="vat_number" value={formData.vat_number} onChange={handleInputChange} />
                  {errors.vat_number && <div style={{ color: 'red', fontSize: '12px' }}>{errors.vat_number}</div>}
                </div>

                <div className="col-md-4">
                  <label className="tp-label">Type of Document*</label>
                  <div className="tp-custom-select-wrapper">
                    <div className="tp-select-trigger"
                      onClick={() => toggleDropdown('docDropdown')}
                    >
                      <span id="selectedDoc">{formData.doctype || 'Select'}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="arrow">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div className="tp-dropdown-menu" id="docDropdown" style={{ display: openDropdown === 'docDropdown' ? 'block' : 'none' }}>
                      {documentOptions.map(doc => (
                        <div key={doc} className={`tp-dropdown-item ${formData.doctype === doc ? 'active' : ''}`}
                          onClick={() => { setFormData({ ...formData, doctype: doc }); setOpenDropdown(null); if (errors.doctype) setErrors((prev: any) => ({ ...prev, doctype: null })); }}
                        >{doc}</div>
                      ))}
                    </div>
                  </div>
                  {errors.doctype && <div style={{ color: 'red', fontSize: '12px' }}>{errors.doctype}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">DNI Number</label>
                  <input type="text" className="tp-input" name="dni_number" value={formData.dni_number} onChange={handleInputChange} />
                </div>
                <div className="col-md-4">
                  <label className="tp-label">Scholarship ID</label>
                  <input type="text" className="tp-input" name="scholarShipId" value={formData.scholarShipId} onChange={handleInputChange} />
                </div>

                <div className="col-md-4 position-relative">
                  <label className="tp-label">Street-number-floor*</label>
                  <input type="text" className="tp-input" placeholder="350 Fifth Avenue, Suite 500" required name="street_number_floor" value={formData.street_number_floor} onChange={(e) => { handleInputChange(e); handleStreetSearch(e.target.value); }} autoComplete="off" />
                  {errors.street_number_floor && <div style={{ color: 'red', fontSize: '12px' }}>{errors.street_number_floor}</div>}
                  {streetSuggestions.length > 0 && (
                    <div className="tp-dropdown-menu" style={{ display: 'block', position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                      {streetSuggestions.map((sug: any, idx: number) => (
                        <div key={idx} className="tp-dropdown-item" onClick={() => handleSelectStreet(sug)} style={{ whiteSpace: 'normal', fontSize: '13px', padding: '8px', borderBottom: '1px solid #eee' }}>
                          {sug.display_name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">City*</label>
                  <div className="tp-custom-select-wrapper">
                    <div className="tp-select-trigger" onClick={() => toggleDropdown('cityDropdown')}>
                      <span>{formData.city || 'Select'}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="arrow">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div className="tp-dropdown-menu" style={{ display: openDropdown === 'cityDropdown' ? 'block' : 'none' }}>
                      {cityOptions.map(city => (
                        <div key={city} className={`tp-dropdown-item ${formData.city === city ? 'active' : ''}`} onClick={() => { setFormData({ ...formData, city }); setOpenDropdown(null); if (errors.city) setErrors((prev: any) => ({ ...prev, city: null })); }}>{city}</div>
                      ))}
                    </div>
                  </div>
                  {errors.city && <div style={{ color: 'red', fontSize: '12px' }}>{errors.city}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">Postal Code*</label>
                  <input type="text" className="tp-input" placeholder="10118" required name="postal_code" value={formData.postal_code} onChange={handleInputChange} />
                  {errors.postal_code && <div style={{ color: 'red', fontSize: '12px' }}>{errors.postal_code}</div>}
                </div>

                <div className="col-md-4">
                  <label className="tp-label">Province*</label>
                  <div className="tp-custom-select-wrapper">
                    <div className="tp-select-trigger" onClick={() => toggleDropdown('provinceDropdown')}>
                      <span>{formData.province || 'Select'}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="arrow">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div className="tp-dropdown-menu" style={{ display: openDropdown === 'provinceDropdown' ? 'block' : 'none' }}>
                      {provinceOptions.map(prov => (
                        <div key={prov} className={`tp-dropdown-item ${formData.province === prov ? 'active' : ''}`} onClick={() => { setFormData({ ...formData, province: prov }); setOpenDropdown(null); if (errors.province) setErrors((prev: any) => ({ ...prev, province: null })); }}>{prov}</div>
                      ))}
                    </div>
                  </div>
                  {errors.province && <div style={{ color: 'red', fontSize: '12px' }}>{errors.province}</div>}
                </div>
                <div className="col-md-4">
                  <label className="tp-label">Country*</label>
                  <div className="tp-custom-select-wrapper">
                    <div className="tp-select-trigger" onClick={() => toggleDropdown('countryDropdown')}>
                      <span>{formData.country || 'Select'}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="arrow">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div className="tp-dropdown-menu" style={{ display: openDropdown === 'countryDropdown' ? 'block' : 'none' }}>
                      {countryOptions.map(country => (
                        <div key={country} className={`tp-dropdown-item ${formData.country === country ? 'active' : ''}`} onClick={() => { setFormData({ ...formData, country }); setOpenDropdown(null); if (errors.country) setErrors((prev: any) => ({ ...prev, country: null })); }}>{country}</div>
                      ))}
                    </div>
                  </div>
                  {errors.country && <div style={{ color: 'red', fontSize: '12px' }}>{errors.country}</div>}
                </div>
              </div>
            </section>

            <section className="tp-section mb-5">
              <h2 className="tp-section-title"><span className="icon">💼</span> Certificate</h2>
              <label className="tp-label mb-2">Upload your professional certifications*</label>

              <div className="tp-file-uploader-box mb-3">
                <input type="file" id="certFileInput" multiple style={{ display: "none" }} ref={certInputRef} onChange={handleCertUpload} />
                <button type="button" className="tp-btn-file-select" onClick={() => certInputRef.current?.click()}>Choose File</button>
                <span className="text-muted ms-3 fs-7">{formData.certificate.length > 0 ? `${formData.certificate.length} File(s) Chosen` : 'No File Chosen'}</span>
              </div>
              {errors.certificate && <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.certificate}</div>}

              <div className="row g-2">
                {formData.certificate.map((file: any, idx: number) => (
                  <div key={idx} className="col-sm-6 col-md-3">
                    <div className="tp-file-badge">
                      <div className="text-truncate flex-grow-1 me-2">
                        <span className="file-name d-block text-truncate">{file.name}</span>
                        <span className="file-size">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                      </div>
                      <button type="button" className="btn-close-file" onClick={() => handleRemoveCert(idx)}>&times;</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="tp-section mb-5">
              <h2 className="tp-section-title"><span className="icon">📄</span> Category Selection</h2>

              <div className="tp-panel p-4 mb-4">
                <label className="tp-label mb-2">Select session mode</label>
                <div className="d-flex gap-2 mb-3 flex-wrap">
                  <button type="button" className={`tp-toggle-pill ${formData.sessionMode.includes('online') ? 'active' : ''}`} id="mode-online"
                    onClick={() => handleToggleArrayItem('sessionMode', 'online')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      className="me-1">
                      <path d="M23 7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7z"></path>
                      <polyline points="16 21 16 19 12 19"></polyline>
                    </svg>
                    Online
                  </button>
                  <button type="button" className={`tp-toggle-pill ${formData.sessionMode.includes('inperson') ? 'active' : ''}`} id="mode-inperson"
                    onClick={() => handleToggleArrayItem('sessionMode', 'inperson')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      className="me-1">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    In-Person
                  </button>
                </div>
                {errors.sessionMode && <div style={{ color: 'red', fontSize: '12px', marginTop: '-10px', marginBottom: '10px' }}>{errors.sessionMode}</div>}

                {formData.sessionMode.includes('inperson') && (
                  <>
                    <label className="tp-label mb-2">Clinic Address</label>
                    <div className="tp-input-icon-wrapper position-relative" id="clinic-address-wrapper">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className="icon-left">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <input type="text" className="tp-input" name="clinicAddress" value={formData.clinicAddress} onChange={(e) => { handleInputChange(e); handleClinicSearch(e.target.value); }} placeholder="123 Healing Street, Los Angeles, CA 90001, United States" autoComplete="off" />

                      {clinicSuggestions.length > 0 && (
                        <div className="tp-dropdown-menu" style={{ display: 'block', position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                          {clinicSuggestions.map((sug: any, idx: number) => (
                            <div key={idx} className="tp-dropdown-item" onClick={() => handleSelectClinic(sug)} style={{ whiteSpace: 'normal', fontSize: '13px', padding: '8px', borderBottom: '1px solid #eee' }}>
                              {sug.display_name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.clinicAddress && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.clinicAddress}</div>}
                  </>
                )}
              </div>

              <div className="mb-3">
                <label className="tp-label mb-2">Select the types of therapy you provide</label>
                <div className="d-flex gap-2 flex-wrap" id="therapy-types-container">
                  {therapyOptions.map(therapy => (
                    <button
                      key={therapy}
                      type="button"
                      className={formData.therapyTypes.includes(therapy) ? "tp-toggle-pill active" : "tp-pill-outline"}
                      onClick={() => handleToggleArrayItem('therapyTypes', therapy)}
                    >{therapy}</button>
                  ))}
                </div>
              </div>
            </section>

            <section className="tp-section mb-5">
              <h2 className="tp-section-title"><span className="icon">💼</span> Professional Details</h2>

              <div className="mb-4 position-relative">
                <label className="tp-label">Specializations*</label>
                <div className="tp-multi-select-trigger"
                  onClick={() => toggleDropdown('specializationDropdown')}
                >
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    {formData.specilizations.map((spec: string) => (
                      <span key={spec} className="tp-tag">{spec} <span className="tag-close" onClick={(e) => { e.stopPropagation(); handleToggleArrayItem('specilizations', spec); }}>&times;</span></span>
                    ))}
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="arrow ms-auto">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {errors.specilizations && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.specilizations}</div>}

                <div className="tp-dropdown-panel-box" id="specializationDropdown" style={{ display: openDropdown === 'specializationDropdown' ? 'block' : 'none' }}>
                  <div className="p-3 border-bottom">
                    <div className="tp-search-input-wrapper">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="search-icon">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <input type="text" placeholder="Search" className="tp-search-field" value={specSearch} onChange={(e) => setSpecSearch(e.target.value)} />
                    </div>
                  </div>
                  <div className="panel-options-list">
                    {specializationOptionsList.filter(s => s.toLowerCase().includes(specSearch.toLowerCase())).map(spec => (
                      <label key={spec} className="tp-checkbox-item">
                        <span>{spec}</span>
                        <input type="checkbox" checked={formData.specilizations.includes(spec)} onChange={() => handleToggleArrayItem('specilizations', spec)} />
                        <span className="checkmark"></span>
                      </label>
                    ))}
                  </div>
                  <div className="p-3 border-top d-flex justify-content-end gap-2">
                    <button type="button" className="tp-panel-btn btn-clear" onClick={() => setFormData({ ...formData, specilizations: [] })}>Clear</button>
                    <button type="button" className="tp-panel-btn btn-apply" onClick={() => setOpenDropdown(null)}>Apply</button>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="tp-label">Can't find the specialization? Add it here.</label>
                <div className="d-flex gap-2">
                  <input type="text" className="tp-input flex-grow-1" placeholder="Type your specialization and press enter" value={customSpecInput} onChange={(e) => setCustomSpecInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCustomSpec())} />
                  <button type="button" className="tp-btn-action-enter" onClick={handleAddCustomSpec}>Enter</button>
                </div>
              </div>

              <div className="mb-4 position-relative">
                <label className="tp-label">Reason for Consultation*</label>
                <div className="tp-multi-select-trigger"
                  onClick={() => toggleDropdown('consultationDropdown')}
                >
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    {formData.consultationReasons.map((reason: string) => (
                      <span key={reason} className="tp-tag">{reason} <span className="tag-close" onClick={(e) => { e.stopPropagation(); handleToggleArrayItem('consultationReasons', reason); }}>&times;</span></span>
                    ))}
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    className="arrow ms-auto">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {errors.consultationReasons && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.consultationReasons}</div>}

                <div className="tp-dropdown-panel-box" id="consultationDropdown" style={{ display: openDropdown === 'consultationDropdown' ? 'block' : 'none' }}>
                  <div className="p-3 border-bottom">
                    <div className="tp-search-input-wrapper">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        className="search-icon">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <input type="text" placeholder="Search" className="tp-search-field" value={consSearch} onChange={(e) => setConsSearch(e.target.value)} />
                    </div>
                  </div>
                  <div className="panel-options-list">
                    {consultationOptionsList.filter(s => s.toLowerCase().includes(consSearch.toLowerCase())).map(reason => (
                      <label key={reason} className="tp-checkbox-item">
                        <span>{reason}</span>
                        <input type="checkbox" checked={formData.consultationReasons.includes(reason)} onChange={() => handleToggleArrayItem('consultationReasons', reason)} />
                        <span className="checkmark"></span>
                      </label>
                    ))}
                  </div>
                  <div className="p-3 border-top d-flex justify-content-end gap-2">
                    <button type="button" className="tp-panel-btn btn-clear" onClick={() => setFormData({ ...formData, consultationReasons: [] })}>Clear</button>
                    <button type="button" className="tp-panel-btn btn-apply" onClick={() => setOpenDropdown(null)}>Apply</button>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-4">
                <label className="tp-label">Experience (Years) *</label>
                <input type="text" className="tp-input" placeholder="Enter your years" required name="experience" value={formData.experience} onChange={handleInputChange} />
                {errors.experience && <div style={{ color: 'red', fontSize: '12px' }}>{errors.experience}</div>}
              </div>

              <div className="mb-4">
                <label className="tp-label">Bio / Description*</label>
                <textarea className="tp-textarea" rows={4}
                  placeholder="Tell us about yourself and your approach to therapy..." required name="bio" value={formData.bio} onChange={handleInputChange} ></textarea>
                {errors.bio && <div style={{ color: 'red', fontSize: '12px' }}>{errors.bio}</div>}
              </div>
            </section>

            <div className="mt-5">
              <button type="submit" className="tp-btn-primary">Submit Profile for Review</button>
            </div>

          </form>
        </div>
      </div>



      <SubmitProfile />
      <ProfileUnderReviewPopup />
      <ProfileApproved />
      <ProfileRejected />
    </>

  )
}

export default MyProfile
