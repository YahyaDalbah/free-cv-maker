import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFieldData,
  selectStateSection,
  setStateElement,
  updateDB,
} from "../functions";

export default function DescField({
  label,
  section,
  placeholder,
  keyField,
  idInArray,
}) {
  const dispatch = useDispatch();

  const value = useSelector((state) =>
    selectFieldData(state, section, keyField, idInArray)
  );

  function handleChange(e) {
    if (e.key === "Enter") {
      updateDB();
      setStateElement(
        section,
        dispatch,
        keyField,
        e.target.value + "\n",
        idInArray
      );
    } else {
      updateDB();
      setStateElement(section, dispatch, keyField, e.target.value, idInArray);
    }
  }

  return (
    <div className="flex flex-col md:col-span-2">
      {label && (
        <label className=" text-dark-gray" htmlFor={section + label}>
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder || ""}
        className="whitespace-break-spaces p-2 my-1 bg-light-gray outline-none rounded-sm min-h-44 resize-none"
        onChange={handleChange}
        value={value}
        type="text"
        id={section + label}
      />
    </div>
  );
}
