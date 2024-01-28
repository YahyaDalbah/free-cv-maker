import React from 'react'

export default function DescField({label, section, placeholder}) {
  return (
    <div className="flex flex-col md:col-span-2">
      {label && <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>}
      <textarea
        placeholder={placeholder || ""}
        className="whitespace-break-spaces p-2 my-1 bg-light-gray outline-none rounded-sm min-h-44 resize-none"
        type="text"
        id={section + label}
      />
    </div>
  );
}
