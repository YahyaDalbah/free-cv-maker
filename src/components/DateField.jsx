import React from "react";

export default function DateField({ section }) {
  return (
    <div className="flex flex-col">
      <label className=" text-dark-gray" htmlFor={section}>
        Start & End Date
      </label>
      <div className="flex gap-x-3">
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          type="text"
          id={section + "startDate"}
          placeholder="MM/YYYY"
        />
        <input
          className="p-2 my-1 bg-light-gray outline-none rounded-sm w-full"
          type="text"
          id={section + "endDate"}
          placeholder="MM/YYYY"
        />
      </div>
    </div>
  );
}
