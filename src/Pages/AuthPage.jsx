import { auth, provider } from "../firebaseConfig";
import {
  signInWithPopup,
  getAdditionalUserInfo,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import Cookies from "universal-cookie";
import { addDocToDB } from "../functions";
const cookies = new Cookies();

export default function AuthPage({
  setShowAuthPage,
  isUserLoggingIn,
  setIsUserLoggingIn,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function signInWithGoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      cookies.set("auth-token", res.user.uid);
      if(getAdditionalUserInfo(res).isNewUser){
        await addDocToDB(res.user.uid);
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }
  async function signUpWithEmailAndPassword() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      cookies.set("auth-token", res.user.uid);
      await addDocToDB(res.user.uid);
      window.location.reload();
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setErrorMessage("email already in use");
          break;
        case "auth/weak-password":
          setPasswordError("password must be more than 6 characters");
          break;
        case "auth/invalid-email":
          setEmailError("wrong email pattern");
          break;
        default:
          console.error(err);
          break;
      }
    }
  }
  async function logInWithEmailAndPassword() {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      cookies.set("auth-token", res.user.uid);
      window.location.reload();
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setErrorMessage("email or password are wrong");
          break;
        default:
          console.error(err);
          break;
      }
    }
  }
  function handleClick() {
    if (isUserLoggingIn) {
      logInWithEmailAndPassword();
    } else {
      signUpWithEmailAndPassword();
    }
  }
  return (
    <div className="w-full h-full bg-white center-with-fixed">
      <div className="rounded w-60 p-4 h-96 bg-white center-with-position sm:w-96 sm:px-8 flex flex-col justify-between border border-black">
        <button
          className="border border-dark-gray hover:bg-gray-50 self-center pl-4 pr-4  py-2 rounded-full"
          onClick={signInWithGoogle}
        >
          <i className="fa-brands fa-google mr-2"></i> sign in with google
        </button>
        <div>
          <div className="auth-input">
            <label htmlFor="authEmail">
              Email <span className="ml-8 text-red-500">{emailError}</span>
            </label>
            <input
              onChange={(e) => {
                const emailRegex =
                  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
                setEmail(e.target.value);
                setErrorMessage("");
                if (emailRegex.test(e.target.value)) {
                  setEmailError("");
                }
              }}
              value={email}
              id="authEmail"
              className="p-2 my-1 bg-light-gray outline-none rounded-sm"
            />
          </div>
          <div className="auth-input">
            <label htmlFor="authPassword">
              Password{" "}
              <span className="ml-8 text-red-500">{passwordError}</span>
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
                if (e.target.value.length >= 6) {
                  setPasswordError("");
                }
              }}
              value={password}
              id="authPassword"
              className="p-2 my-1 bg-light-gray outline-none rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-red-500 text-center">{errorMessage}</p>
          <button
            className="bg-blue hover:bg-hover-blue rounded-full px-8 py-2 text-white"
            onClick={handleClick}
          >
            {isUserLoggingIn ? "Log in" : "Sign up"}
          </button>
          <p className="text-sm">
            {isUserLoggingIn ? "Create an account " : "Already have an account"}
            <button
              onClick={() => {
                setErrorMessage("");
                setEmailError("");
                setPasswordError("");
                setIsUserLoggingIn((prev) => !prev);
              }}
              className="text-blue underline"
            >
              {!isUserLoggingIn ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
      <button
        onClick={() => setShowAuthPage(false)}
        className="absolute top-4 left-4"
      >
        <i className="fa-solid fa-arrow-left"></i> back
      </button>
    </div>
  );
}
