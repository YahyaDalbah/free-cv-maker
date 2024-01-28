import React from 'react'
import SectionTitle from '../components/SectionTitle';
import DropDownField from '../components/DropDownField';
import AddDropDownFieldBtn from '../components/AddDropDownFieldBtn';
import SectionFields from '../components/SectionFields';
import DescField from '../components/DescField';
import InputField from '../components/InputField';
import DateField from '../components/DateField';
export default function EmploymentHistory() {
  return (
    <div>
      <SectionTitle title={"Employment History"} />
      <div className="drop-down-container">
        <DropDownField>
          <SectionFields>
            <InputField label={"Job title"} section={"employmentHistory + 0"} />
            <InputField label={"Company"} section={"employmentHistory + 0"} />
            <DateField section={"employmentHistory + 0"} />
            <InputField label={"City"} section={"employmentHistory + 0"} />
            <DescField
              label={"Description"}
              section={"employmentHistory + 0"}
            />
          </SectionFields>
        </DropDownField>
        <DropDownField>
          <SectionFields>
            <InputField label={"Job title"} section={"employmentHistory + 1"} />
            <InputField label={"Company"} section={"employmentHistory + 1"} />
            <DateField section={"employmentHistory + 1"} />
            <InputField label={"City"} section={"employmentHistory + 1"} />
            <DescField
              label={"Description"}
              section={"employmentHistory + 1"}
            />
          </SectionFields>
        </DropDownField>
      </div>
      <AddDropDownFieldBtn text={"Add employment"} />
    </div>
  );
}
