import React from "react";

export default function Education({ workDone, place, desc }) {
  return (
    <div>
      <p className="font-bold">{place}</p>
      <p>{workDone}</p>
      <p>{desc}</p>
    </div>
  );
}
