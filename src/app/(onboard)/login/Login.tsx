'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const Login = () => {

    const router = useRouter()

    const [value, setValue] = useState<any>("")
    const [error, setError] = useState<string>("")

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setError("")
    }


    const validation = () => {
        if (!value || value.trim() === "") {
            setError("Enter your email or phone number");
            return false;
        }

        const input = value.trim();

        // Phone number (10 digits)
        const phoneRegex = /^[6-9]\d{9}$/;

        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // If it's a phone number
        if (phoneRegex.test(input)) {
            setError("");
            return true;
        }

        // If it's an email
        if (emailRegex.test(input)) {
            const blockedDomains = [
                "yopmail.com",
                "tempmail.com",
                "10minutemail.com",
                "guerrillamail.com",
                "mailinator.com",
            ];

            const domain = input.split("@")[1].toLowerCase();

            if (blockedDomains.includes(domain)) {
                setError("Temporary email addresses are not allowed");
                return false;
            }

            setError("");
            return true;
        }

        setError("Enter a valid email or phone number");
        return false;
    };


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validation()) {
            return false
        }

        console.log('email');
        router.push('/otp');
    }


    return (
        <>
            <div className="onyba-login-section">

                <div className="onyba-login-wrapper">

                    <div className="onyba-login-left-banner">
                        <div className="onyba-brain-container">
                            <img src="/images/login-left-img.svg" alt="Brain Illustration" className="onyba-brain-img" />
                        </div>
                    </div>

                    <div className="onyba-login-right-content">
                        <div className="onyba-form-card">

                            <div className="onyba-header-logo">
                                <img src="/images/logo..svg" alt="" />
                            </div>

                            <h2 className="onyba-form-title">Therapist Login</h2>
                            <p className="onyba-form-subtitle">Use credentials to access your account</p>

                            <form className="onyba-login-form" onSubmit={handleLogin}>
                                <div className="onyba-form-group">
                                    <div className="onyba-input-field-wrapper">
                                        <div className="onyba-icon-circle">
                                            <img src="/images/login-msg-icon.svg" alt="" />
                                        </div>
                                        <input type="text" className="onyba-input-control"
                                            value={value} onChange={handleEmail} placeholder="Phone Number/Email" />
                                    </div>

                                    {error && <span style={{ color: "red", marginTop: "10px", marginLeft: "60px" }}>{error}</span>}
                                </div>

                                <button type="submit" className="onyba-submit-btn">Continue</button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="onyba-bg-curve"></div>
            </div>
        </>
    )
}

export default Login
