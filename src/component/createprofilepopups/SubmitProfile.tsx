import React from 'react'

const SubmitProfile = () => {
  return (
    <>
      <div className="modal fade" id="profileSubmitModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal-content">

            <button type="button" className="profile-sub-close-btn" data-bs-dismiss="modal" aria-label="Close">
              <img src="/images/close-btn-popup.svg" alt="" />
            </button>

            <div className="modal-body text-center p-0">

              <div className="success-icon-box">
                <img src="/images/popup-check-icon.svg" alt="" />
              </div>

              <h5 className="modal-custom-title">Profile Submitted</h5>

              <p className="modal-custom-text">
                Your profile is submitted for the our team approval.
                We'll notify you once it's approved.
              </p>

              <a href="#" data-bs-target="#profileReviewModal" data-bs-toggle="modal" className="btn-custom-ok" data-bs-dismiss="modal">Ok</a>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubmitProfile
