import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, PROFILE_LOGO } from "./constant";
import { toggleGPT } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const { gptToggle } = useSelector((store) => store.GPT);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ id: uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearchGPT = () => {
    dispatch(toggleGPT());
  };
  return (
    <div className="flex justify-between w-full bg-gradient-to-b from-black px-10 absolute z-50 bg-inherit">
      <img className="w-28" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <button
            className="rounded-sm px-3 py-0 my-5 mr-2 text-white bg-emerald-600"
            type="button"
            onClick={handleSearchGPT}
          >
            {!gptToggle ? "GPT Search" : "Home"}
          </button>

          <button
            className="rounded-sm px-3 py-0 my-5 text-white bg-[#E50914]"
            type="button"
            onClick={handleSignOut}
          >
            Sign out
          </button>
          <img
            className="hidden md:block w-9 h-9 ml-2 my-5 rounded-sm cursor-pointer"
            alt="usericon"
            src={PROFILE_LOGO}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
