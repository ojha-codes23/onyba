import React from 'react'

const ProfileRejected = () => {
  return (
    <>
     <div className="modal fade" id="profileRejectedModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content custom-modal-content">
  
  <button type="button" className="profile-sub-close-btn" data-bs-dismiss="modal" aria-label="Close">
   <img src="/images/close-btn-popup.svg" alt=""/>
  </button>

  <div className="modal-body text-center p-0">
    
    <div className="success-icon-box red">
      <img src="/images/popup-check-icon.svg" alt=""/>
    </div>

    <h5 className="modal-custom-title">Profile Rejected</h5>
    
    <p className="modal-custom-text">
      Unfortunately, your profile has been rejected. Please contact support for more information or register again with updated credentials.
    </p>
   <div className="verification-issue">
      Rejection reasons may include incomplete certifications or verification issues.
    </div>
    <a href="#" className="btn-custom-ok" data-bs-dismiss="modal">Contact Support</a>
    <a href="#" className="secondary-cta mt-3" data-bs-dismiss="modal">Register Again</a>
    
  </div>
</div>
  </div>
</div>
    
    </>
  )
}

export default ProfileRejected
