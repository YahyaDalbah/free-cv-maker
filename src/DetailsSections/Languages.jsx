import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { useSelector } from "react-redux";
import { addLanguage, selectLanguages } from "../Features/languages";
export default function Languages() {
  const languages = useSelector(selectLanguages);

  const displayedLanguages = languages.map((language) => (
    <DropDownField
      key={language.id}
      idInArray={language.id}
      section={"languages"}
    >
      <SectionFields>
        <InputField
          idInArray={language.id}
          keyField={"language"}
          label={"language"}
          section={`languages + ${language.id}`}
        />
        <SelectField
          idInArray={language.id}
          keyField={"level"}
          label={"Proficiency level"}
          section={`languages + ${language.id}`}
          levels={["Conversational", "Advanced", "Proficient", "Native"]}
        />
      </SectionFields>
    </DropDownField>
  ));
  return (
    <div>
      <SectionTitle title={"Languages"} />
      <div className="drop-down-container">{displayedLanguages}</div>
      <AddDropDownFieldBtn addFunction={addLanguage} text={"Add language"} />
    </div>
  );
}
