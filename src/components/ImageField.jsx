import React from 'react'
import blankHead from "../assets/blank-head.png";

export default function ImageField() {
  return (
    <div className="flex items-center gap-x-10 text-dark-gray hover:text-blue cursor-pointer">
      <div className='bg-light-gray p-2 rounded-sm'>
        <img src={blankHead} alt="upload" />
      </div>
      <p>Upload photo</p>
    </div>
  );
}
