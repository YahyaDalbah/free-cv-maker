import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployment } from '../functions';
import { setProfileSummary } from '../Features/profileSummary';
import { setEmployment } from '../Features/employmentHistory';

export default function DescField({label, section, placeholder, keyField, idInArray}) {
  const dispatch = useDispatch()
  const value = useSelector(state => {
    if(section.includes("profileSummary")){
      return state.profileSummary.summary
    }
    else if (section.includes("employmentHistory")) {
      const employment = getEmployment(state.employmentHistory, idInArray)
      return employment.desc
    }
  })
  
  function handleChange(e){
    
    if (section.includes("profileSummary")) {
      dispatch(setProfileSummary(e.target.value));
    } else if (section.includes("employmentHistory")) {
      dispatch(
        setEmployment({
          id: idInArray,
          changedField: [keyField, e.target.value],
        })
      );
    }
  }


  return (
    <div className="flex flex-col md:col-span-2">
      {label && <label className=" text-dark-gray" htmlFor={section + label}>
        {label}
      </label>}
      <textarea
        placeholder={placeholder || ""}
        className="whitespace-break-spaces p-2 my-1 bg-light-gray outline-none rounded-sm min-h-44 resize-none"
        value={value}
        onChange={handleChange}
        type="text"
        id={section + label}
      />
    </div>
  );
}
