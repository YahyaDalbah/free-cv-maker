import React from "react";
import ReactMarkdown from "react-markdown";

export default function Education({ workDone, place, desc,startDate, endDate }) {
  return (
    <div className="my-2">
      <p className="font-bold">{place}</p>
      <p>{workDone}</p>
      <p>{startDate} {startDate && endDate ? "-" : ""} {endDate}</p>
      <ReactMarkdown>{desc}</ReactMarkdown>
    </div>
  );
}
