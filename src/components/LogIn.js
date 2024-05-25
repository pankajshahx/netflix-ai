import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import checkValidation from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const LogIn = () => {
  const [enableSignInForm, setEnableSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(email, password, confirmPassword);
    const message = checkValidation(
      email?.current?.value,
      password?.current?.value,
      confirmPassword?.current?.value,
      enableSignInForm
    );
    setErrorMessage(message);
    if (message) return;
    if (!enableSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage, errorCode);
          navigate("/login");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage, errorCode);
          navigate("/login");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="bg-pic"
        />
      </div>
      <div className="bg-black w-[30%] p-14 text-white rounded-md absolute mx-auto right-0 left-0 my-28 bg-opacity-80">
        <form onSubmit={(e) => e.preventDefault()} className="">
          <label htmlFor="" className="text-3xl font-bold text-white p-3">
            {enableSignInForm ? "Sign In" : "Sign Up"}
          </label>
          <div className="p-3">
            <input
              ref={email}
              className="w-full p-3 my-2 border rounded-md bg-inherit"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              ref={password}
              className="w-full p-3 my-2 border rounded-md bg-inherit"
              type="password"
              placeholder="Password"
            />
            {!enableSignInForm && (
              <input
                ref={confirmPassword}
                className="w-full p-3 my-2 border rounded-md bg-inherit"
                type="password"
                placeholder="Confirm Password"
              />
            )}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <button
              onClick={handleSubmit}
              className="w-full rounded-md p-2 my-2 text-white bg-[#E50914]"
            >
              {enableSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {enableSignInForm && (
              <Link className="">
                <p className="text-white w-full text-center my-2">
                  Forgot password?
                </p>
              </Link>
            )}
            <div className="pt-20">
              <input className="" type="checkbox" />
              <label className="p-2" htmlFor="">
                Remember me
              </label>
            </div>
            <div className="pt-2 items-center">
              <label className="me-2">
                {enableSignInForm ? "New to netflix?" : "Already a user?"}
              </label>
              <Link
                onClick={() => {
                  setEnableSignInForm(!enableSignInForm);
                }}
              >
                {enableSignInForm ? "Sign up now" : "Sign in now"}
              </Link>
            </div>
            <div className="pt-2 pb-24">
              <label className="text-xs me-1">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </label>
              <Link className="text-xs text-blue-700">Learn more.</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
