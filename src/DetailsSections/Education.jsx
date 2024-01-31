import React from 'react'
import SectionTitle from '../components/SectionTitle';
import DropDownField from '../components/DropDownField';
import AddDropDownFieldBtn from '../components/AddDropDownFieldBtn';
import SectionFields from '../components/SectionFields';
import DescField from "../components/DescField";
import InputField from "../components/InputField";
import DateField from "../components/DateField";
export default function Education() {
  return (
    <div>
      <SectionTitle title={"Education"} />
      <div className="drop-down-container">
        {/* <DropDownField>
          <SectionFields>
            <InputField label={"School"} section={"education + 0"} />
            <InputField label={"Degree"} section={"education + 0"} />
            <DateField section={"education + 0"} />
            <InputField label={"Field"} section={"education + 0"} />
            <DescField label={"Description"} section={"education + 0"} />
          </SectionFields>
        </DropDownField>
        <DropDownField>
          <SectionFields>
            <InputField label={"School"} section={"education + 0"} />
            <InputField label={"Degree"} section={"education + 0"} />
            <DateField section={"education + 0"} />
            <InputField label={"Field"} section={"education + 0"} />
            <DescField label={"Description"} section={"education + 0"} />
          </SectionFields>
        </DropDownField> */}
      </div>
      <AddDropDownFieldBtn text={"Add education"} />
    </div>
  );
}
