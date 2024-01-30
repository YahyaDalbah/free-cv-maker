import React from "react";
import SectionFields from "../components/SectionFields";
import DescField from "../components/DescField";
import SectionTitle from "../components/SectionTitle";

export default function ProfileSummary() {
  return (
    <div>
      <SectionTitle title={"Profile Summary"} />
      <SectionFields>
        <DescField
          section={"profileSummary"}
          placeholder={
            "Write a summary about yourself that describes your experiences and qualifications."
          }
        />
      </SectionFields>
    </div>
  );
}
