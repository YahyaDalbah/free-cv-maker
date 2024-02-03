import React from "react";
import { useDispatch } from "react-redux";
import { setPersonalDetails } from "../Features/personalDetails";
import { setEmployment } from "../Features/employmentHistory";
import { setEducation } from "../Features/educations";
import { setSkill } from "../Features/skills";
import { setProject } from "../Features/projects";
import { setLanguage } from "../Features/languages";
import { setCourse } from "../Features/courses";
import { setReference } from "../Features/references";

export default function InputField({
  label,
  section,
  span,
  keyField,
  idInArray,
}) {
  const dispatch = useDispatch();

  function handleChange(e) {
    if (section.includes("personalDetails")) {
      dispatch(setPersonalDetails([keyField, e.target.value]));
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
    } else if (section.includes("skills")) {
      dispatch(
        setSkill({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    } else if (section.includes("projects")) {
      dispatch(
        setProject({ id: idInArray, changedField: [keyField, e.target.value] })
      );
    } else if (section.includes("languages")) {
      dispatch(
        setLanguage({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    } else if (section.includes("courses")) {
      dispatch(
        setCourse({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    } else if (section.includes("references")) {
      dispatch(
        setReference({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    }
  }

  return (
    <div className={`flex flex-col ${span ? "md:col-span-2" : ""}`}>
      <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>
      <input
        className="p-2 my-1 bg-light-gray outline-none rounded-sm "
        type="text"
        onChange={handleChange}
        id={section + label}
      />
    </div>
  );
}
