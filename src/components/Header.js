import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, PROFILE_LOGO } from "./constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
  return (
    <div className="flex justify-between w-full bg-gradient-to-b from-black px-10 absolute z-50 bg-inherit">
      <img className="w-28" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <img
            className="hidden md:block w-10 h-10 mr-2 my-4 rounded-sm"
            alt="usericon"
            src={PROFILE_LOGO}
          />
          <button
            className="rounded-md px-3 py-1 my-4 text-white bg-[#E50914]"
            type="button"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
