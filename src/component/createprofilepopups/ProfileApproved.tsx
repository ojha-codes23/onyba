import Link from 'next/link'
import React from 'react'

const ProfileApproved = () => {
  return (
    <>
      <div className="modal fade" id="profileApprovedModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal-content">

            <button type="button" className="profile-sub-close-btn" data-bs-dismiss="modal" aria-label="Close">
              <img src="/images/close-btn-popup.svg" alt="" />
            </button>

            <div className="modal-body text-center p-0">

              <div className="success-icon-box">
                <img src="/images/popup-check-icon.svg" alt="" />
              </div>

              <h5 className="modal-custom-title">Profile Approved!</h5>

              <p className="modal-custom-text">
                Congratulations! Your profile has been approved successfully. You can now start accepting appointments.
              </p>

              <Link href="/dashboard" className="btn-custom-ok" data-bs-dismiss="modal">Continue to Dashboard</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileApproved
