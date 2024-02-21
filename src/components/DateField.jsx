import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFieldData, setStateElement, updateDB } from "../functions";


export default function DateField({ section, idInArray }) {
  const dispatch = useDispatch();
  const startDate = useSelector((state) =>
    selectFieldData(state, section, "startDate", idInArray)
  );
  const endDate = useSelector((state) =>
    selectFieldData(state, section, "endDate", idInArray)
  );
  function handleChange(e, keyField) {
    updateDB()
    setStateElement(section, dispatch, keyField, e.target.value, idInArray);
  }

  return (
    <div className="flex flex-col">
      <label className=" text-dark-gray">
        Start & End Date
      </label>
      <div className="flex gap-x-3">
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          type="text"
          value={startDate}
          onChange={(e) => handleChange(e, "startDate")}
          id={section + "startDate"}
          placeholder="e.g: March 2023"
        />
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          onChange={(e) => handleChange(e, "endDate")}
          value={endDate}
          type="text"
          id={section + "endDate"}
          placeholder="e.g: July 2024"
        />
      </div>
    </div>
  );
}
