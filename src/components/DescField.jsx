import React from "react";
import { useDispatch } from "react-redux";
import { setProfileSummary } from "../Features/profileSummary";
import { setEmployment } from "../Features/employmentHistory";
import { setEducation } from "../Features/educations";
import { setProject } from "../Features/projects";

export default function DescField({
  label,
  section,
  placeholder,
  keyField,
  idInArray,
}) {
  const dispatch = useDispatch();

  function handleChange(e) {
    if (section.includes("profileSummary")) {
      dispatch(setProfileSummary(e.target.value));
    } else if (section.includes("employmentHistory")) {
      dispatch(
        setEmployment({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    } else if (section.includes("education")) {
      dispatch(
        setEducation({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    } else if (section.includes("projects")) {
      dispatch(
        setProject({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
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
        type="text"
        id={section + label}
      />
    </div>
  );
}
