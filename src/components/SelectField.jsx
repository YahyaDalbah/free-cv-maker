import React, { useState } from "react";

export default function SelectField({ label, section }) {

    const [showOptions, setShowOptions] = useState(false)
  return (
    <div className={`flex flex-col relative`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <select
        className="p-2 my-1 bg-light-gray rounded-sm outline-none appearance-none border-none  cursor-pointer"
        type="text"
        id={section + label}
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <option value="">Don't show experience level</option>
        <option value="Beginner">Beginner</option>
        <option value="Skillful">Skillful</option>
        <option value="Experienced">Experienced</option>
        <option value="Expert">Expert</option>
      </select>
      <i
        className={`absolute right-2 top-10 transition-all ${
          showOptions ? "" : "rotate-180"
        } fa-solid fa-chevron-up`}
      ></i>
    </div>
  );
}