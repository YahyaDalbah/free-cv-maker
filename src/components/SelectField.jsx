import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSkill } from "../Features/skills";

export default function SelectField({ label, section, idInArray, keyField }) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    if (section.includes("skills")) {
      dispatch(
        setSkill({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    }
  }
  return (
    <div className={`flex flex-col relative`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <select
        className="p-2 my-1 bg-light-gray rounded-sm outline-none appearance-none border-none  cursor-pointer"
        type="text"
        onChange={handleChange}
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
