import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { useSelector } from "react-redux";
import { addSkill, selectSkills } from "../Features/skills";
export default function Skills() {
  const skills = useSelector(selectSkills);

  const displayedSkills = skills.map((skill) => (
    <DropDownField key={skill.id} idInArray={skill.id} section={"skills"}>
      <SectionFields>
        <InputField
          idInArray={skill.id}
          keyField={"skill"}
          label={"Skill"}
          section={`skills + ${skill.id}`}
        />
        <SelectField
          idInArray={skill.id}
          keyField={"level"}
          label={"Experience level"}
          section={`skills + ${skill.id}`}
        />
      </SectionFields>
    </DropDownField>
  ));
  return (
    <div>
      <SectionTitle title={"Skills"} />
      <div className="drop-down-container">{displayedSkills}</div>
      <AddDropDownFieldBtn addFunction={addSkill} text={"Add a skill"} />
    </div>
  );
}
