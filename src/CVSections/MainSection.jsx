import React from "react";

export default function MainSection({
  title,
  children
}) {
  return (
    <div className="">
      <h2 className="cv-heading-text mb-1">{title}</h2>
      {children}
    </div>
  );
}
