import React from 'react'

export default function SideSection({title,children}) {
  return (
    <div className="">
      <h2 className="cv-heading-text mb-1 mt-4">{title}</h2>
      {children}
    </div>
  );
}
