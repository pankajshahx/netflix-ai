import React from "react";
import useFetchMovieVideo from "./hooks/useFetchMovieVideo";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movie_id }) => {
  useFetchMovieVideo({ movie_id });
  const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);

  if (!movieTrailer) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
