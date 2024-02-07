import React, { useRef } from "react";
import blankHead from "../assets/blank-head.png";
import { useDispatch } from "react-redux";
import { setImage } from "../Features/personalDetails";
import {
  getDownloadURL,
  list,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebaseConfig";
import { nanoid } from "@reduxjs/toolkit";
import { updateDB } from "../functions";

export default function ImageField() {
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  async function handleImageChange(e) {
    const image = e.target.files[0];
    const imageID = nanoid();
    const regex = /^image\/.*$/;
    if (image && regex.test(image.type)) {
      const imageRef = ref(storage, `images/${imageID}`);
      const img = await uploadBytes(imageRef, image);
      getDownloadURL(img.ref).then((url) => dispatch(setImage(url))).then(() => updateDB())
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
