import React, { useState } from "react";
import cv1 from "../assets/cv1.PNG";
import cv2 from "../assets/cv2.PNG";
export default function SelectTemplatePage({ selectTemplate,cvIndex }) {
  const [selectedTemplate, setSelectedTemplate] = useState(cvIndex);
  const images = [cv2, cv1].map((cv, i) => (
    <div
      onClick={() => setSelectedTemplate(i)}
      className={`${
        selectedTemplate == i
          ? "border-4 outline outline-2 outline-white border-black"
          : ""
      }`}
    >
      <img className={`rounded-sm `} width={200} src={cv} />
    </div>
  ));

  return (
    <div className="w-screen h-screen flex flex-col items-center  bg-gray-700">
      <div className="flex flex-grow flex-col gap-20 justify-center items-center">
        {images}
      </div>
      <button
        onClick={() => selectTemplate(selectedTemplate)}
        className="mb-8 rounded-full py-2 px-8 text-white w-fit bg-gray-500 hover:bg-gray-400"
      >
        OK
      </button>
    </div>
  );
}
