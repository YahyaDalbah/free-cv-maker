import React from "react";

export default function AddDropDownFieldBtn({ text,handleClick }) {
  return (
    <button onClick={handleClick} className=" text-blue mt-3 hover:text-hover-blue">+ {text}</button>
  );
}
