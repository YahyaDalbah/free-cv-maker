import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalDetails } from "../Features/personalDetails";
import { selectEmploymentHistory, setEmployment } from "../Features/employmentHistory";

export default function InputField({
  label,
  section,
  span,
  keyField,
  idInArray,
}) {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    if (section.includes("personalDetails")) {
      return state.personalDetails[keyField];
    } else if (section.includes("employmentHistory")) {
      for (const employment of selectEmploymentHistory(state)) {
        if (employment.id === idInArray) {
          return employment[keyField];
        }
      }
    }
  });

  return (
    <div className={`flex flex-col ${span ? "md:col-span-2" : ""}`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <input
        className="p-2 my-1 bg-light-gray outline-none rounded-sm "
        type="text"
        value={value}
        onChange={(e) => {
          if (section.includes("personalDetails")) {
            dispatch(setPersonalDetails([keyField, e.target.value]));
          } else if (section.includes("employmentHistory")) {
            dispatch(
              setEmployment({
                id: idInArray,
                changedField: [keyField, e.target.value],
              })
            );
          }
        }}
        id={section + label}
      />
    </div>
  );
}
