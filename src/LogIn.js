import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [enableSignInForm, setEnableSignInForm] = useState(true);
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
        <form className="">
          <label htmlFor="" className="text-3xl font-bold text-white p-3">
            Sign In
          </label>
          <div className="p-3">
            <input
              className="w-full p-3 my-2 border rounded-md bg-inherit"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              className="w-full p-3 my-2 border rounded-md bg-inherit"
              type="password"
              placeholder="Password"
            />
            {!enableSignInForm && (
              <input
                className="w-full p-3 my-2 border rounded-md bg-inherit"
                type="password"
                placeholder="Confirm Password"
              />
            )}
            <button className="w-full rounded-md p-2 my-2 text-white bg-[#E50914]">
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
