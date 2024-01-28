import React from "react";
import InputField from "../components/InputField";
import ImageField from "../components/ImageField";
import SectionFields from "../components/SectionFields";
import SectionTitle from "../components/SectionTitle";

export default function PersonalDetails() {
  return (
    <div>
      <SectionTitle title={"Personal Details"} />
      <SectionFields>
        <InputField label={"First Name"} section={"personalDetails"} />
        <InputField label={"Last Name"} section={"personalDetails"} />
        <InputField label={"Email"} section={"personalDetails"} />
        <ImageField />
        <InputField label={"Job Title"} section={"personalDetails"} />
        <InputField label={"Phone"} section={"personalDetails"} />
        <InputField label={"Country"} section={"personalDetails"} />
        <InputField label={"City"} section={"personalDetails"} />
        <InputField label={"Address"} section={"personalDetails"} />
        <InputField label={"Date Of Birth"} section={"personalDetails"} />
      </SectionFields>
    </div>
  );
}
