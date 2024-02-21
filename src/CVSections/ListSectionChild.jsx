import React from "react";

export default function ListSectionChild({
  workDone,
  place,
  email,
  phone,
  atPlace,
  startDate,
  endDate
}) {

  return (
    <div className="mb-4 break-words">
      <p className="cv-desc-text">
        {workDone} {place ? atPlace : ""} {place}{email ? ", " : ""}<a className="text-blue" href={`mailto:${email}`}>{email}</a> {phone ? ", " : ""} {phone}
      </p>
      {startDate && endDate && (
        <p className="cv-date-text my-0.5">
          {startDate} - {endDate}
        </p>
      )}
    </div>
  );
}
