import React from "react";
import { useDispatch } from "react-redux";
import { setEmployment } from "../Features/employmentHistory";
import { setEducation } from "../Features/educations";
import { setProject } from "../Features/projects";
import { setCourse } from "../Features/courses";

export default function DateField({ section, idInArray }) {
  const dispatch = useDispatch();

  function handleChange(e, keyField) {
    if (section.includes("employmentHistory")) {
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
    } else if (section.includes("courses")) {
      dispatch(
        setCourse({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    }
  }

  return (
    <div className="flex flex-col">
      <label className=" text-dark-gray" htmlFor={section}>
        Start & End Date
      </label>
      <div className="flex gap-x-3">
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          type="text"
          onChange={(e) => handleChange(e, "startDate")}
          id={section + "startDate"}
          placeholder="MM/YYYY"
        />
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          onChange={(e) => handleChange(e, "endDate")}
          type="text"
          id={section + "endDate"}
          placeholder="MM/YYYY"
        />
      </div>
    </div>
  );
}
