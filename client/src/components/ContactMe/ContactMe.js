import React from 'react';
import "./style.css"

const ContactMe = () => {
  return (
    <div class="modal fade" id="contactMe" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Contact me</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>📞 408-314-7814</p>
              <p><a href='mailto:johnnytrucnguyen@gmail.com'>📧 johnnytrucnguyen@gmail.com</a></p>
              <p><a href='https://www.linkedin.com/in/johnny-nguyen-17941532' target='_blank' style='text-decoration: none'>LinkedIn</a></p>
              <p><a href='https://github.com/NguyenJohnnyT' style='text-decoration: none;'>GitHub</a></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactMe