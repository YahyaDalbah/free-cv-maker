import React from "react";
import ReactMarkdown from "react-markdown";

export default function MainSectionChild({
  workDone,
  place,
  city,
  startDate,
  endDate,
  desc,
  email,
  phone,
  atPlace,
}) {
  return (
    <div className="mb-4 break-words">
      {workDone && (
        <h3 className="cv-sub-heading-text mt-2">
          {workDone} {place ? atPlace : ""} {place}
          {city ? "," : ""} {city}
        </h3>
      )}
      {(email || phone) && (
        <p className="cv-desc-text">
          <a className="text-blue mr-6" href={`mailto:${email}`}>
            {email}
          </a>{" "}
          {phone}
        </p>
      )}
      {startDate && endDate && (
        <p className="cv-date-text my-0.5">
          {startDate} - {endDate}
        </p>
      )}
      <p className="cv-desc-text">
        <ReactMarkdown>{desc}</ReactMarkdown>
      </p>
    </div>
  );
}
