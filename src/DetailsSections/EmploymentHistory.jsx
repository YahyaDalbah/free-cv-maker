import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import DescField from "../components/DescField";
import InputField from "../components/InputField";
import DateField from "../components/DateField";
import { useDispatch, useSelector } from "react-redux";
import { addEmployment } from "../Features/employmentHistory";
export default function EmploymentHistory() {
  const employmentHistory = useSelector((state) => state.employmentHistory);
  const dispatch = useDispatch();
  function addEmploymentDrop() {
    dispatch(addEmployment());
  }
  const displayedEmploymentHistory = employmentHistory.map((employment) => (
    <DropDownField
      idInArray={employment.id}
      key={employment.id}
      section={"employmentHistory"}
    >
      <SectionFields>
        <InputField
          idInArray={employment.id}
          keyField={"jobTitle"}
          label={"Job title"}
          section={`employmentHistory + ${employment.id}`}
        />
        <InputField
          keyField={"company"}
          idInArray={employment.id}
          label={"Company"}
          section={`employmentHistory + ${employment.id}`}
        />
        <DateField
          idInArray={employment.id}
          section={`employmentHistory + ${employment.id}`}
        />
        <InputField
          keyField={"city"}
          idInArray={employment.id}
          label={"City"}
          section={`employmentHistory + ${employment.id}`}
        />
        <DescField
          keyField={"desc"}
          idInArray={employment.id}
          label={"Description"}
          section={`employmentHistory + ${employment.id}`}
        />
      </SectionFields>
    </DropDownField>
  ));

  return (
    <div>
      <SectionTitle title={"Employment History"} />
      <div className="drop-down-container">{displayedEmploymentHistory}</div>
      <AddDropDownFieldBtn
        text={"Add employment"}
        handleClick={addEmploymentDrop}
      />
    </div>
  );
}
