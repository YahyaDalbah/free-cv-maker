import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import DescField from "../components/DescField";
import InputField from "../components/InputField";
import DateField from "../components/DateField";
import { useSelector } from "react-redux";
import { addEducation, selectEducation } from "../Features/educations";
export default function Education() {
  const educations = useSelector(selectEducation);

  const displayedEducation = educations.map((education) => (
    <DropDownField
      key={education.id}
      idInArray={education.id}
      section={"education"}
    >
      <SectionFields>
        <InputField
          idInArray={education.id}
          keyField={"school"}
          label={"School"}
          section={`education + ${education.id}`}
        />
        <InputField
          idInArray={education.id}
          keyField={"degree"}
          label={"Degree"}
          section={`education + ${education.id}`}
        />
        <DateField
          idInArray={education.id}
          section={`education + ${education.id}`}
        />
        <InputField
          idInArray={education.id}
          keyField={"city"}
          label={"City"}
          section={`education + ${education.id}`}
        />
        <DescField
          idInArray={education.id}
          keyField={"desc"}
          label={"Description"}
          placeholder={
            "e.g: graduated with high honors\nIf you prefer not to provide a description, you can simply state your degree and school here.\ne.g: Bachelor in Computer Science, Harvard University, 2010 - 2014"
          }
          section={`education + ${education.id}`}
        />
      </SectionFields>
    </DropDownField>
  ));
  return (
    <div>
      <SectionTitle title={"Education"} />
      <div className="drop-down-container">{displayedEducation}</div>
      <AddDropDownFieldBtn addFunction={addEducation} text={"Add education"} />
    </div>
  );
}
