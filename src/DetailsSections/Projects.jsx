import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import DescField from "../components/DescField";
import InputField from "../components/InputField";
import DateField from "../components/DateField";
import { useSelector } from "react-redux";
import { addProject } from "../Features/projects";
export default function Projects() {
  const projects = useSelector((state) => state.projects);

  const displayedProjects = projects.map((project) => (
    <DropDownField idInArray={project.id} key={project.id} section={"projects"}>
      <SectionFields>
        <InputField
          idInArray={project.id}
          keyField={"projectTitle"}
          label={"Project title"}
          section={`projects + ${project.id}`}
        />
        <DateField
          idInArray={project.id}
          section={`projects + ${project.id}`}
        />
        <DescField
          keyField={"desc"}
          idInArray={project.id}
          label={"Description"}
          section={`projects + ${project.id}`}
        />
      </SectionFields>
    </DropDownField>
  ));

  return (
    <div>
      <SectionTitle title={"Projects"} />
      <div className="drop-down-container">{displayedProjects}</div>
      <AddDropDownFieldBtn text={"Add project"} addFunction={addProject} />
    </div>
  );
}
