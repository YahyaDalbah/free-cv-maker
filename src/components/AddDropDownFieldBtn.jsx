import React from "react";
import { AddDropDownField } from "../functions";
import { useDispatch } from "react-redux";

export default function AddDropDownFieldBtn({ text,addFunction }) {
  const dispatch = useDispatch()
  function handleClick(){
    AddDropDownField(dispatch, addFunction)
  }
  return (
    <button onClick={handleClick} className=" text-blue mt-3 hover:text-hover-blue">+ {text}</button>
  );
}
