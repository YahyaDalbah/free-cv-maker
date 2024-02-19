import React from "react";
import { useSelector } from "react-redux";
import { selectPersonalDetails } from "../Features/personalDetails";

export default function Header() {
  const { imageURL, firstName, lastName, jobTitle } = useSelector(
    selectPersonalDetails
  );

  return (
    <div className="flex gap-x-4 mb-6">
      {imageURL && (
        <img className="rounded" src={imageURL} alt="cv" width={60} />
      )}
      <div>
        <h1 className="font-bold text-xl">{`${firstName} ${lastName}`}</h1>
        <p className=" text-xs text-gray-500">{jobTitle}</p>
      </div>
    </div>
  );
}
