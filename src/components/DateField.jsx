import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployment } from "../functions";
import { setEmployment } from "../Features/employmentHistory";

export default function DateField({ section, idInArray }) {
  const dispatch = useDispatch();
  const {startDate, endDate} = useSelector((state) => {
    if (section.includes("employmentHistory")) {
      const employment = getEmployment(state.employmentHistory, idInArray)
      return employment
    }
  });
  function handleChange(e, keyField){
    if (section.includes("employmentHistory")) {
      dispatch(setEmployment({id: idInArray, changedField: [keyField, e.target.value]}))
    }
  }
  
  return (
    <div className="flex flex-col">
      <label className=" text-dark-gray" htmlFor={section}>
        Start & End Date
      </label>
      <div className="flex gap-x-3">
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          type="text"
          onChange={(e) => handleChange(e, "startDate")}
          value={startDate}
          id={section + "startDate"}
          placeholder="MM/YYYY"
        />
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          value={endDate}
          onChange={(e) => handleChange(e, "endDate")}
          type="text"
          id={section + "endDate"}
          placeholder="MM/YYYY"
        />
      </div>
    </div>
  );
}
