import React, { useRef, useState } from "react";

export default function DropDownField({ children }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false)
  const [title, setTitle] = useState("(Untitled)");
  const dropDownContainer = useRef(null);

  const transitionStyle = {
    maxHeight: showDetails
      ? dropDownContainer.current.scrollHeight + "px"
      : "0px",
    transition: "max-height 0.4s ease-out",
  };

  return (
    <div className="border border-light-gray px-3 pb-3 rounded-md">
      <div
        onClick={() => setShowDetails((prev) => !prev)}
        className={`flex justify-between pt-8 pb-5  transition-colors ${!isTrashHovered ? "hover:text-blue" : ""} cursor-pointer`}
      >
        <h3>{title}</h3>
        <div className="flex gap-x-6 items-center">
          <i
            onMouseEnter={() => {
              setIsTrashHovered(true)
            }}
            onMouseLeave={() => {
              setIsTrashHovered(false)
            }}
            className="fa-solid fa-trash text-dark-gray hover:text-red-500"
          ></i>
          <span className={`${showDetails ? "-rotate-90" : "rotate-90"}`}>
            {">"}
          </span>
        </div>
      </div>
      <div
        ref={dropDownContainer}
        style={transitionStyle}
        className={`overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
