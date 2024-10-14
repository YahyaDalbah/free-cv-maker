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
        <InputField
          label={"First Name"}
          section={"personalDetails"}
          keyField={"firstName"}
        />
        <InputField
          label={"Last Name"}
          section={"personalDetails"}
          keyField={"lastName"}
        />
        <InputField
          label={"Email"}
          section={"personalDetails"}
          keyField={"email"}
        />

        <ImageField />

        <InputField
          label={"Job Title"}
          section={"personalDetails"}
          keyField={"jobTitle"}
        />
        <InputField
          label={"Phone Number"}
          section={"personalDetails"}
          keyField={"phone"}
        />
        <InputField
          label={"Country"}
          section={"personalDetails"}
          keyField={"country"}
        />
        <InputField
          label={"City"}
          section={"personalDetails"}
          keyField={"city"}
        />
        <InputField
          label={"Address"}
          section={"personalDetails"}
          keyField={"address"}
        />
        <InputField
          label={"Date Of Birth"}
          section={"personalDetails"}
          keyField={"dateOfBirth"}
        />
        <InputField
          label={"Github profile URL"}
          section={"personalDetails"}
          keyField={"githubURL"}
          placeholder={"e.g: https://github.com/{username}"}
        />
        
      </SectionFields>
    </div>
  );
}
