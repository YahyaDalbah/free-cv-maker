import React from "react";

export default function InputField({ label, section, span }) {
  return (
    <div className={`flex flex-col ${span ? "md:col-span-2" : ""}`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <input
        className="p-2 my-1 bg-light-gray outline-none rounded-sm "
        type="text"
        id={section + label}
      />
    </div>
  );
}
