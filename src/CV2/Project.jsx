import React from "react";
import ReactMarkdown from "react-markdown";

export default function Project({ projectTitle, desc }) {
  return (
    <div className="my-3">
      <p className="font-bold mb-1">{projectTitle}</p>
      <ReactMarkdown>{desc}</ReactMarkdown>
    </div>
  );
}
