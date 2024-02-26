import React from "react";
import { useSelector } from "react-redux";
import { selectPersonalDetails } from "../Features/personalDetails";

export default function SideDetails() {
  const {
    address,
    city,
    country,
    phone,
    email,
    dateOfBirth,
    githubURL,
    linkedInURL,
  } = useSelector(selectPersonalDetails);
  return (
    <>
      <div className="flex flex-col gap-y-1 mb-4">
        {(address ||
          city ||
          country ||
          phone ||
          email ||
          githubURL ||
          linkedInURL) && <h2 className="cv-heading-text">Details</h2>}
        <p className="cv-desc-text">{address}</p>
        <p className="cv-desc-text">{city}</p>
        <p className="cv-desc-text">{country}</p>
        <p className="cv-desc-text">{phone}</p>
        <p className="cv-desc-text">
          <a className="text-blue text-left" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        {
          <p className="cv-desc-text">
            <a href={githubURL}>
              {githubURL}
            </a>
          </p>
        }
        {linkedInURL && (
          <p className="cv-desc-text">
            <a className="text-blue text-left" href={linkedInURL}>
              {linkedInURL}
            </a>
          </p>
        )}
      </div>
      <div>
        {dateOfBirth && <h2 className="cv-sub-heading-text">Date of birth</h2>}
        <p className="cv-desc-text">{dateOfBirth}</p>
      </div>
    </>
  );
}
