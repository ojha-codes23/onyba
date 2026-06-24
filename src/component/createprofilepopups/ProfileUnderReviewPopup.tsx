import React from 'react'

const ProfileUnderReviewPopup = () => {
  return (
    <>

      <div className="modal fade" id="profileReviewModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal-content">

            <button type="button" className="profile-sub-close-btn" data-bs-dismiss="modal" aria-label="Close">
              <img src="/images/close-btn-popup.svg" alt="" />
            </button>

            <div className="modal-body text-center p-0">

              <div className="success-icon-box yellow">
                <img src="/images/clock-popup-icon.svg" alt="" />
              </div>

              <h5 className="modal-custom-title">Profile Under Review</h5>

              <p className="modal-custom-text">
                Your profile is currently being reviewed by our team. We'll notify you once it's approved.
              </p>

              <a href="#" data-bs-target="#profileRejectedModal" data-bs-toggle="modal" className="btn-custom-ok" data-bs-dismiss="modal">Ok</a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileUnderReviewPopup
