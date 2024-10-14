import React from "react";

export default function Title({ title }) {
  return (
    <div className="mt-2 mb-4">
      <h1 className=" font-bold italic">{title}</h1>
      <hr className=" border-black" />
    </div>
  );
}
