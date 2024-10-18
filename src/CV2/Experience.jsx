import React from "react";
import ReactMarkdown from "react-markdown";

export default function Experience({
  jobTitle,
  company,
  startDate,
  endDate,
  desc,
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <b>{jobTitle} {jobTitle && company && "|"} {company}</b>
        <p>{startDate} {startDate && endDate ? "-" : ""} {endDate}</p>
      </div>
      <ReactMarkdown>{desc}</ReactMarkdown>
    </div>
  );
}
