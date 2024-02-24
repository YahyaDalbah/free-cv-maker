import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSkill } from "../Features/skills";
import { setLanguage } from "../Features/languages";
import { updateDB } from "../functions";

export default function SelectField({
  label,
  section,
  idInArray,
  keyField,
  levels,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  

  function handleChange(e) {
    updateDB();
    if (section.includes("skills")) {
      dispatch(
        setSkill({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    } else if (section.includes("languages")) {
      dispatch(
        setLanguage({
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
        <option value={`${levels[0]}`}>{levels[0]}</option>
        <option value={`${levels[1]}`}>{levels[1]}</option>
        <option value={`${levels[2]}`}>{levels[2]}</option>
        <option value={`${levels[3]}`}>{levels[3]}</option>
      </select>
      <i
        className={`absolute right-2 top-10 transition-all ${
          showOptions ? "" : "rotate-180"
        } fa-solid fa-chevron-up`}
      ></i>
    </div>
  );
}
