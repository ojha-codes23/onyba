'use client'

import WelcomeModal from '@/src/component/WelcomeModal';
import React, { useRef, useState, useEffect } from 'react'

const OTP_LENGTH = 5;
const RESEND_SECONDS = 30;

const OtpVerification = () => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(RESEND_SECONDS);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Countdown timer
    useEffect(() => {
        if (timer <= 0) {
            setCanResend(true);
            return;
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (index: number, value: string) => {
        // Only allow single digit (0-9)
        const digit = value.replace(/\D/g, '').slice(-1);
        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);
        setError('');

        // Auto-focus next input
        if (digit && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            // Move to previous input on backspace if current is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
        if (!pasted) return;
        const newOtp = Array(OTP_LENGTH).fill('');
        pasted.split('').forEach((char, i) => { newOtp[i] = char; });
        setOtp(newOtp);
        // Focus the last filled input or the next empty one
        const nextIndex = Math.min(pasted.length, OTP_LENGTH - 1);
        inputRefs.current[nextIndex]?.focus();
    };

    const handleResend = () => {
        if (!canResend) return;
        setOtp(Array(OTP_LENGTH).fill(''));
        setError('');
        setTimer(RESEND_SECONDS);
        setCanResend(false);
        inputRefs.current[0]?.focus();
        console.log('OTP resent');
    };

    const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const otpValue = otp.join('');

        if (otpValue.length < OTP_LENGTH) {
            setError(`Please enter all ${OTP_LENGTH} digits.`);
            return;

        }

        console.log('OTP submitted:', otpValue);

        // Show welcome modal via Bootstrap
        const modalEl = document.getElementById('welcomeModal');
        if (modalEl && typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const bootstrap = (window as any).bootstrap;
            if (bootstrap) {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        }
    };

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

                            <h2 className="onyba-form-title">Verify Your Account</h2>
                            <p className="onyba-form-subtitle">We've sent 5-digit code to your email.</p>

                            <form className="onyba-login-form" id="otp-form" onSubmit={handleContinue}>

                                <div className="onyba-otp-inputs-row">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => { inputRefs.current[index] = el; }}
                                            type="text"
                                            inputMode="numeric"
                                            className="onyba-otp-input-box"
                                            maxLength={1}
                                            placeholder="-"
                                            value={digit}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            onPaste={handlePaste}
                                            autoFocus={index === 0}
                                        />
                                    ))}
                                </div>

                                {error && (
                                    <p style={{ color: 'red', fontSize: '13px', marginTop: '6px', textAlign: 'center' }}>
                                        {error}
                                    </p>
                                )}

                                <button type="submit" className="onyba-submit-btn">Verify</button>

                                <div className="onyba-otp-resend-wrapper">
                                    {canResend ? (
                                        <>Didn't receive code?{' '}
                                            <a
                                                href="#"
                                                className="onyba-resend-text"
                                                onClick={(e) => { e.preventDefault(); handleResend(); }}
                                            >
                                                Resend
                                            </a>
                                        </>
                                    ) : (
                                        <>Didn't receive code? Resend verification code in{' '}
                                            <span className="onyba-resend-text">{timer}s</span>
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="onyba-bg-curve"></div>
            </div>

            <WelcomeModal />
        </>
    )
}

export default OtpVerification
