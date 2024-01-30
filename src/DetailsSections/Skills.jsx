import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
export default function Skills() {
  return (
    <div>
      <SectionTitle title={"Skills"} />
      <div className="drop-down-container">
        <DropDownField>
          <SectionFields>
            <InputField label={"Skill"} section={"skills + 0"} />
            <SelectField label={"Experience level"} section={"skills + 0"} />
          </SectionFields>
        </DropDownField>
        <DropDownField>
          <SectionFields>
            <InputField label={"Skill"} section={"skills + 1"} />
            <SelectField label={"Experience level"} section={"skills + 1"} />
          </SectionFields>
        </DropDownField>
      </div>
      <AddDropDownFieldBtn text={"Add a skill"} />
    </div>
  );
}
