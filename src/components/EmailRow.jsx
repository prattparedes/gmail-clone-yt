import React from 'react'
import './EmailRow.css'
function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className='emailRow'>
        <div className="emailRow__options">

        </div>

        <div className="emailRow__title">

        </div>
        <div className="emailRow__message">

        </div>
        <div className="emailRow__description"></div>
    </div>
  )
}

export default EmailRow