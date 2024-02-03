import React from 'react'

export default function MainSectionChild({ workDone, place, city, startDate, endDate, desc, email, phone, atPlace}) {
  return (
    <div className='mb-4 break-words'>
      {(workDone) && <h3 className="cv-sub-heading-text">
        {workDone} {place ? atPlace : ""} {place}{city ? "," : ""} {city}
      </h3>}
      <p className='cv-desc-text'><a className='text-blue mr-6' href={`mailto:${email}`}>{email}</a> {phone}</p>
      {(startDate && endDate) && <p className="cv-date-text">
        {startDate} - {endDate}
      </p>}
      <p className="cv-desc-text">{desc}</p>
    </div>
  );
}
