import React from "react";
import { POSTER_CDN_URL } from "./constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 p-2 cursor-pointer">
      <img alt="Now Playing" src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
