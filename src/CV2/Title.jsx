import React from "react";

export default function Title({ title }) {
  return (
    <div className="mt-2 mb-3">
      <h1 className="font-black italic mb-1">{title}</h1>
      <hr className="border-black" />
    </div>
  );
}
