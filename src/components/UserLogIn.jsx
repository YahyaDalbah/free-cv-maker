import React, { useState } from "react";
import blankHead from "../assets/blank-head.png";
import LogInList from "./AuthList";
import AuthList from "./AuthList";

export default function UserLogIn() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="fixed top-3 right-4 flex flex-col gap-y-3">
      <button
        onClick={() => setShowList((prev) => !prev)}
        className="rounded-full bg-light-gray p-2 hover:border-blue border self-end"
      >
        <img width="20px" src={blankHead} alt="" />
      </button>
      {showList && (
        <div className="flex flex-col bg-white shadow w-72 justify-start items-start gap-4 py-2 px-4 rounded-lg">
          <AuthList />
        </div>
      )}
    </div>
  );
}
