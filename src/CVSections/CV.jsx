import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import MainSectionChild from "./MainSectionChild";
import Side from "./Side";
import Main from "./Main";
import SideDetails from "./SideDetails";
import SideSection from "./SideSection";
import SideSectionChild from "./SideSectionChild";
import { useSelector } from "react-redux";
import { selectProfileSummary } from "../Features/profileSummary";
import { selectEmploymentHistory } from "../Features/employmentHistory";

export default function CV() {
  const profileSummary = useSelector(selectProfileSummary);
  const employmentHistory = useSelector(selectEmploymentHistory);
  const displayedEmploymentHistory = employmentHistory.map((employment) => (
    <MainSectionChild
      key={employment.id}
      workDone={employment.jobTitle}
      place={employment.company}
      startDate={employment.startDate}
      endDate={employment.endDate}
      city={employment.city}
      desc={employment.desc}
    />
  ));

  return (
    <div
      id="cv"
      className=" px-10 py-6 rounded bg-white h-pdf scale-90 md:transform-none"
    >
      <Header />
      <div className="grid grid-cols-3 gap-x-12">
        <Main className=" col-span-2">
          {profileSummary.summary && (
            <MainSection title="Profile">
              <MainSectionChild desc={profileSummary.summary} />
            </MainSection>
          )}
          {displayedEmploymentHistory.length > 0 && (
            <MainSection title="employment history">
              {displayedEmploymentHistory}
            </MainSection>
          )}
        </Main>

        <Side>
          <SideDetails />
          <SideSection title={"Skills"}>
            <SideSectionChild skill={"git"} proficiency={"experienced"} />
            <SideSectionChild skill={"git"} proficiency={"experienced"} />
          </SideSection>
        </Side>
      </div>
    </div>
  );
}
