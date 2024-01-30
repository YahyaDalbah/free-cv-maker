import React, { useRef, useState } from "react";
import blankHead from "../assets/blank-head.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../Features/personalDetails";

export default function ImageField() {
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const regex = /^image\/.*$/;
    if (file && regex.test(file.type)) {
      dispatch(setImage(URL.createObjectURL(file)));
    }
  }

  return (
    <div
      onClick={() => imageRef.current.click()}
      className="flex items-center gap-x-10 text-dark-gray hover:text-blue cursor-pointer"
    >
      <div className="bg-light-gray p-2 rounded-sm">
        <img src={blankHead} alt="upload" />
      </div>
      <p>Upload photo</p>
      <input
        onChange={handleImageChange}
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
      />
    </div>
  );
}
