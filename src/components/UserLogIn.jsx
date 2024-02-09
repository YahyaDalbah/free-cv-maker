import React, { useState } from "react";
import blankHead from "../assets/user-icon-blank-head.png"
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
const cookies = new Cookies();

function List({ setIsUserLoggingIn, setShowAuthPage }) {
  function handleLogOut() {
    cookies.remove("auth-token");
    window.location.reload();
  }
  return !cookies.get("auth-token") ? (
    <div className="flex flex-col bg-white shadow w-72 justify-start items-start gap-4 py-2 px-4 rounded-lg">
      <button
        onClick={() => {
          setShowAuthPage(true);
          setIsUserLoggingIn(true);
        }}
        className="auth-btn"
      >
        Log in
      </button>
      <button
        onClick={() => {
          setShowAuthPage(true);
          setIsUserLoggingIn(false);
        }}
        className="auth-btn"
      >
        Sign up
      </button>
    </div>
  ) : (
    <div className="flex flex-col bg-white shadow w-72 justify-start items-start gap-4 py-2 px-4 rounded-lg">
      <button onClick={handleLogOut} className="auth-btn">
        Log out
      </button>
    </div>
  );
}

export default function UserLogIn({ setIsUserLoggingIn, setShowAuthPage }) {
  const [showList, setShowList] = useState(false);
  const image = useSelector((state) => state.personalDetails.imageURL || blankHead);

  return (
    <div className="fixed top-3 right-4 flex flex-col gap-y-3">
      <button
        onClick={() => setShowList((prev) => !prev)}
        className="rounded-full bg-light-gray overflow-hidden hover:border-blue border self-end"
      >
        <img width="40px" src={cookies.get("auth-token") ? image : blankHead} alt="" />
      </button>
      {showList && (
        <List
          setShowAuthPage={setShowAuthPage}
          setIsUserLoggingIn={setIsUserLoggingIn}
        />
      )}
    </div>
  );
}
