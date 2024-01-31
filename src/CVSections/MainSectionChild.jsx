import React from 'react'

export default function MainSectionChild({ workDone, place, city, startDate, endDate, desc}) {
  return (
    <div className='mb-4 break-words'>
      {(workDone) && <h3 className="cv-sub-heading-text">
        {workDone} {place ? "at" : ""} {place}{city ? "," : ""} {city}
      </h3>}
      {(startDate && endDate) && <p className="cv-date-text">
        {startDate} - {endDate}
      </p>}
      <p className="cv-desc-text">{desc}</p>
    </div>
  );
}
