import React, { useRef, useState } from "react";
import blankHead from "../assets/user-icon-blank-head.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage, setImage } from "../Features/personalDetails";
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
  const image = useSelector((state) => state.personalDetails.imageURL || null);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  async function handleImageChange(e) {
    const image = e.target.files[0];
    const imageID = nanoid();
    const regex = /^image\/.*$/;
    if (image && regex.test(image.type)) {
      const imageRef = ref(storage, `images/${imageID}`);
      const img = await uploadBytes(imageRef, image);
      getDownloadURL(img.ref)
        .then((url) => dispatch(setImage(url)))
        .then(() => updateDB());
    }
  }
  function handleImageDelete(e) {
    e.stopPropagation();
    dispatch(deleteImage());
    updateDB();
  }

  return (
    <div
      onClick={() => imageRef.current.click()}
      className="flex items-center gap-x-10 text-dark-gray hover:text-blue cursor-pointer"
    >
      <img
        className="rounded"
        width={60}
        src={image ? image : blankHead}
        alt="upload"
      />

      <div
        className={`flex flex-col gap-y-2 ${
          isTrashHovered ? "hover:text-dark-gray" : ""
        }`}
      >
        <p>Upload photo</p>
        <p
          className=" text-dark-gray hover:text-red-500"
          onMouseEnter={() => {
            setIsTrashHovered(true);
          }}
          onMouseLeave={() => {
            setIsTrashHovered(false);
          }}
          onClick={handleImageDelete}
        >
          Delete <i className="ml-1 fa-solid fa-trash"></i>
        </p>
      </div>
      <input
        onChange={handleImageChange}
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
      />
    </div>
  );
}
