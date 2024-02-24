import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFieldData,
  setStateElement,
  updateDB,
} from "../functions";

export default function InputField({
  label,
  section,
  span,
  keyField,
  idInArray,
  placeholder
}) {
  const dispatch = useDispatch();

  const value = useSelector((state) =>
    selectFieldData(state, section, keyField, idInArray)
  );
  

  function handleChange(e) {
    updateDB();
    
    setStateElement(section, dispatch, keyField, e.target.value, idInArray);
  }

  return (
    <div className={`flex flex-col ${span ? "md:col-span-2" : ""}`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <input
        className="p-2 my-1 bg-light-gray outline-none rounded-sm"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id={section + label}
      />
    </div>
  );
}
