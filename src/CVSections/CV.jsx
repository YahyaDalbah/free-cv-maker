import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import MainSectionChild from "./MainSectionChild";
import SideDetails from "./SideDetails";
import SideSection from "./SideSection";
import SideSectionChild from "./SideSectionChild";
import { useSelector } from "react-redux";
import { selectProfileSummary } from "../Features/profileSummary";
import { selectEmploymentHistory } from "../Features/employmentHistory";
import { selectEducation } from "../Features/educations";
import { selectSkills } from "../Features/skills";
import { selectProjects } from "../Features/projects";
import { selectLanguages } from "../Features/languages";
import { selectCourses } from "../Features/courses";
import { selectReferences } from "../Features/references";
import ListSectionChild from "./ListSectionChild";

export default function CV() {
  const profileSummary = useSelector(selectProfileSummary);
  const employmentHistory = useSelector(selectEmploymentHistory);
  const educations = useSelector(selectEducation);
  const skills = useSelector(selectSkills);
  const projects = useSelector(selectProjects);
  const languages = useSelector(selectLanguages);
  const courses = useSelector(selectCourses);
  const references = useSelector(selectReferences);
  const displayedEmploymentHistory = employmentHistory.map((employment) => (
    <MainSectionChild
      key={employment.id}
      workDone={employment.jobTitle}
      place={employment.company}
      startDate={employment.startDate}
      endDate={employment.endDate}
      city={employment.city}
      desc={employment.desc}
      atPlace={"at"}
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
      atPlace={","}
    />
  ));

  const displayedSkills = skills.map((skill) => (
    <SideSectionChild key={skill.id} skill={skill.skill} level={skill.level} />
  ));
  const displayedProjects = projects.map((project) => (
    <MainSectionChild
      key={project.id}
      workDone={project.projectTitle}
      startDate={project.startDate}
      endDate={project.endDate}
      desc={project.desc}
      atPlace={"at"}
    />
  ));

  const displayedLanguages = languages.map((language) => (
    <SideSectionChild
      key={language.id}
      skill={language.language}
      level={language.level}
    />
  ));
  const displayedCourses = courses.map((course) => (
    <ListSectionChild
      key={course.id}
      workDone={course.course}
      place={course.institution}
      startDate={course.startDate}
      endDate={course.endDate}
      atPlace={"at"}
    />
  ));
  const displayedReferences = references.map((reference) => (
    <ListSectionChild
      key={reference.id}
      workDone={reference.referent}
      place={reference.company}
      email={reference.email}
      phone={reference.phone}
      atPlace={"from"}
    />
  ));
  return (
    <div id="cv" className="cv-background">
      <Header />
      <div className="grid grid-cols-custom gap-x-4">
        <div className=" col-span-2">
          {profileSummary.summary && (
            <MainSection title="Profile">
              <MainSectionChild desc={profileSummary.summary} />
            </MainSection>
          )}
          {displayedEmploymentHistory.length > 0 && (
            <MainSection title="Employment history">
              {displayedEmploymentHistory}
            </MainSection>
          )}
          {displayedEducation.length > 0 && (
            <MainSection title="Education">{displayedEducation}</MainSection>
          )}
          {displayedProjects.length > 0 && (
            <MainSection title={"Projects"}>{displayedProjects}</MainSection>
          )}
          {displayedCourses.length > 0 && (
            <MainSection title={"Courses"}>{displayedCourses}</MainSection>
          )}
          {displayedReferences.length > 0 && (
            <MainSection title={"References"}>
              {displayedReferences}
            </MainSection>
          )}
        </div>

        <div>
          <SideDetails />
          {displayedSkills.length > 0 && (
            <SideSection title={"Skills"}>{displayedSkills}</SideSection>
          )}
          {displayedLanguages.length > 0 && (
            <SideSection title={"Languages"}>{displayedLanguages}</SideSection>
          )}
        </div>
      </div>
    </div>
  );
}
