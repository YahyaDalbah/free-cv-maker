import { useSelector } from "react-redux";
import { selectProfileSummary } from "../Features/profileSummary";
import { selectEmploymentHistory } from "../Features/employmentHistory";
import { selectEducation } from "../Features/educations";
import { selectSkills } from "../Features/skills";
import { selectProjects } from "../Features/projects";
import { selectLanguages } from "../Features/languages";
import { selectCourses } from "../Features/courses";
import { selectReferences } from "../Features/references";
import HeaderCV2 from "./HeaderCV2";
import Title from "./Title";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";

export default function CV2() {
  const employmentHistory = useSelector(selectEmploymentHistory);
  const educations = useSelector(selectEducation);
  const skills = useSelector(selectSkills);
  const projects = useSelector(selectProjects);
  
  const displayedEducation = educations.map((education) => (
    <Education
      key={education.id}
      workDone={education.degree}
      place={education.school}
      startDate={education.startDate}
      endDate = {education.endDate}
      city={education.city}
      desc={education.desc}
      atPlace={","}
    />
  ));
  const displayedEmploymentHistory = employmentHistory.map((employment) => (
    <Experience
      key={employment.id}
      jobTitle={employment.jobTitle}
      company={employment.company}
      startDate={employment.startDate}
      endDate={employment.endDate}
      desc={employment.desc}
    />
  ));
  const displayedSkills = skills.map(skill => `${skill.skill}, `)

  const displayedProjects = projects.map(project => <Project key={project.id} projectTitle={project.projectTitle} desc={project.desc}  />)
  return (
    <div id="cv" className="cv-background text-xs">
      <HeaderCV2 />
      <div>
        <Title title={"EDUCATION"} />
        <div className="grid grid-cols-2">{displayedEducation}</div>
      </div>
      <div>
        <Title title={"EXPERIENCE"} />
        <div>{displayedEmploymentHistory}</div>
      </div>
      <div>
        <Title title={"PROJECTS"} />
        <div>{displayedProjects}</div>
      </div>
      <div>
        <Title title={"SKILLS"} />
        <div className="-mt-1">{displayedSkills}</div>
      </div>
    </div>
  );
}
