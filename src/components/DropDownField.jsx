import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployment } from "../Features/employmentHistory.js";
import { getElement, updateDB } from "../functions";
import { deleteEducation } from "../Features/educations";
import { deleteSkill } from "../Features/skills.js";
import { deleteProject } from "../Features/projects.js";
import { deleteLanguage } from "../Features/languages.js";
import { deleteCourse } from "../Features/courses.js";
import { deleteReference } from "../Features/references.js";

export default function DropDownField({ children, section, idInArray }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const dispatch = useDispatch();
  const title = useSelector((state) => {
    if (section.includes("employmentHistory")) {
      for (const employment of state.employmentHistory) {
        if (employment.id === idInArray) {
          return employment.jobTitle
            ? `${employment.jobTitle} ${employment.company ? "at" : ""} ${
                employment.company
              }`
            : "(Untitled)";
        }
      }
    } else if (section.includes("education")) {
      const education = getElement(state.education, idInArray);
      return education.degree
        ? `${education.degree} ${education.school ? "at" : ""} ${
            education.school
          }`
        : "(Untitled)";
    } else if (section.includes("skills")) {
      const skill = getElement(state.skills, idInArray);
      return skill.skill || "(Untitled)";
    } else if (section.includes("projects")) {
      const project = getElement(state.projects, idInArray);
      return project.projectTitle || "(Untitled)";
    } else if (section.includes("languages")) {
      const language = getElement(state.languages, idInArray);
      return language.language || "(Untitled)";
    } else if (section.includes("course")) {
      const course = getElement(state.courses, idInArray);
      return course.course
        ? `${course.course} ${course.institution ? "at" : ""} ${
            course.institution
          }`
        : "(Untitled)";
    } else if (section.includes("references")) {
      const reference = getElement(state.references, idInArray);
      return reference.referent || "(Untitled)";
    }
  });

  function handleTrashClick() {
    if (section.includes("employmentHistory")) {
      dispatch(deleteEmployment(idInArray));
    } else if (section.includes("education")) {
      dispatch(deleteEducation(idInArray));
    } else if (section.includes("skills")) {
      dispatch(deleteSkill(idInArray));
    } else if (section.includes("projects")) {
      dispatch(deleteProject(idInArray));
    } else if (section.includes("languages")) {
      dispatch(deleteLanguage(idInArray));
    } else if (section.includes("courses")) {
      dispatch(deleteCourse(idInArray));
    } else if (section.includes("references")) {
      dispatch(deleteReference(idInArray));
    }else{
      console.error("wrong section name")
    }
    updateDB()
  }
  const dropDownContainer = useRef(null);

  const transitionStyle = {
    maxHeight: showDetails
      ? dropDownContainer.current.scrollHeight + "px"
      : "0px",
    transition: "max-height 0.4s ease-out",
  };

  return (
    <div className="border border-light-gray px-3 pb-3 rounded-md">
      <div
        onClick={() => {
          if (!isTrashHovered) setShowDetails((prev) => !prev);
        }}
        className={`flex justify-between pt-8 pb-5  transition-colors ${
          !isTrashHovered ? "hover:text-blue" : ""
        } cursor-pointer`}
      >
        <h3>{title}</h3>
        <div className="flex gap-x-6 items-center">
          <i
            onMouseEnter={() => {
              setIsTrashHovered(true);
            }}
            onMouseLeave={() => {
              setIsTrashHovered(false);
            }}
            onClick={handleTrashClick}
            className="fa-solid fa-trash text-dark-gray hover:text-red-500"
          ></i>
          <span className={`${showDetails ? "-rotate-90" : "rotate-90"}`}>
            {">"}
          </span>
        </div>
      </div>
      <div
        ref={dropDownContainer}
        style={transitionStyle}
        className={`overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
