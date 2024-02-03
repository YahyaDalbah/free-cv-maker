import React from 'react'

export default function SideSectionChild({skill,level}) {
  return (
    <div className="flex justify-between">
      <p className="cv-desc-text">{skill}</p>
      <p className="cv-desc-text">{level}</p>
    </div>
  );
}
