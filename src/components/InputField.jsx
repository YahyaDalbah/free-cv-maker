import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPersonalDetails, setPersonalDetails } from "../Features/personalDetails";

export default function InputField({ label, section, span, keyField }) {
  const dispatch = useDispatch()
  const value = useSelector(state => state.personalDetails[keyField])
  const state = useSelector(selectPersonalDetails)
  console.log(state)
  return (
    <div className={`flex flex-col ${span ? "md:col-span-2" : ""}`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <input
        className="p-2 my-1 bg-light-gray outline-none rounded-sm "
        type="text"
        value={value}
        onChange={e => {
          dispatch(setPersonalDetails([keyField,e.target.value]))
        }}
        id={section + label}
      />
    </div>
  );
}
