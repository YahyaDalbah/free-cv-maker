import React from "react";
import SectionTitle from "../components/SectionTitle";
import DropDownField from "../components/DropDownField";
import AddDropDownFieldBtn from "../components/AddDropDownFieldBtn";
import SectionFields from "../components/SectionFields";
import InputField from "../components/InputField";
import DateField from "../components/DateField";
import { useSelector } from "react-redux";
import { addCourse } from "../Features/courses";
export default function Courses() {
  const courses = useSelector((state) => state.courses);

  const displayedCourses = courses.map((course) => (
    <DropDownField idInArray={course.id} key={course.id} section={"courses"}>
      <SectionFields>
        <InputField
          idInArray={course.id}
          keyField={"course"}
          label={"Course"}
          section={`courses + ${course.id}`}
        />
        <InputField
          idInArray={course.id}
          keyField={"institution"}
          label={"Institution"}
          section={`courses + ${course.id}`}
        />
        <DateField
          idInArray={course.id}
          section={`courses + ${course.id}`}
        />
      </SectionFields>
    </DropDownField>
  ));

  return (
    <div>
      <SectionTitle title={"Courses"} />
      <div className="drop-down-container">{displayedCourses}</div>
      <AddDropDownFieldBtn text={"Add course"} addFunction={addCourse} />
    </div>
  );
}
