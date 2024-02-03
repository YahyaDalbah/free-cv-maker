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
import { selectEducation } from "../Features/educations";
import { selectSkills } from "../Features/skills";

export default function CV() {
  const profileSummary = useSelector(selectProfileSummary);
  const employmentHistory = useSelector(selectEmploymentHistory);
  const educations = useSelector(selectEducation);
  const skills = useSelector(selectSkills);
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
  const displayedEducation = educations.map((education) => (
    <MainSectionChild
      key={education.id}
      workDone={education.degree}
      place={education.school}
      startDate={education.startDate}
      endDate={education.endDate}
      city={education.city}
      desc={education.desc}
    />
  ));
  const displayedSkills = skills.map((skill) => (
    <SideSectionChild
      key={skill.id}
      skill={skill.skill}
      level={skill.level}
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
          {displayedEducation.length > 0 && (
            <MainSection title="education">{displayedEducation}</MainSection>
          )}
        </Main>

        <Side>
          <SideDetails />
          {displayedSkills.length > 0 && <SideSection title={"Skills"}>
            {displayedSkills}
          </SideSection>}
        </Side>
      </div>
    </div>
  );
}
