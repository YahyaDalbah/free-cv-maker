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

export default function CV2() {
  const profileSummary = useSelector(selectProfileSummary);
  const employmentHistory = useSelector(selectEmploymentHistory);
  const educations = useSelector(selectEducation);
  const skills = useSelector(selectSkills);
  const projects = useSelector(selectProjects);
  const languages = useSelector(selectLanguages);
  const courses = useSelector(selectCourses);
  const references = useSelector(selectReferences);
  const displayedEducation = educations.map((education) => (
    <Education
      key={education.id}
      workDone={education.degree}
      place={education.school}
      startDate={education.startDate}
      city={education.city}
      desc={education.desc}
      atPlace={","}
    />
  ));
  return (
    <div id="cv" className="cv-background text-sm">
      <HeaderCV2 />
      <div>
        <Title title={"EDUCATION"} />
        <div className="grid grid-cols-2">{displayedEducation}</div>
      </div>
    </div>
  );
}
