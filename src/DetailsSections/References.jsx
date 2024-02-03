import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import InputField from "../components/InputField";
import { useSelector } from "react-redux";
import { addReference } from "../Features/references";
export default function References() {
  const references = useSelector((state) => state.references);

  const displayedReferences = references.map((reference) => (
    <DropDownField
      idInArray={reference.id}
      key={reference.id}
      section={"references"}
    >
      <SectionFields>
        <InputField
          idInArray={reference.id}
          keyField={"referent"}
          label={"Referent's full name"}
          section={`references + ${reference.id}`}
        />
        <InputField
          idInArray={reference.id}
          keyField={"company"}
          label={"Company"}
          section={`references + ${reference.id}`}
        />
        <InputField
          idInArray={reference.id}
          keyField={"phone"}
          label={"Phone"}
          section={`references + ${reference.id}`}
        />
        <InputField
          idInArray={reference.id}
          keyField={"email"}
          label={"Email"}
          section={`references + ${reference.id}`}
        />
      </SectionFields>
    </DropDownField>
  ));

  return (
    <div>
      <SectionTitle title={"References"} />
      <div className="drop-down-container">{displayedReferences}</div>
      <AddDropDownFieldBtn text={"Add reference"} addFunction={addReference} />
    </div>
  );
}
