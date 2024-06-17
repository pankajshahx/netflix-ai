import React, { useState, useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setSelectedMovie(movies[randomIndex]);
    }
  }, [movies]);

  if (!movies || movies.length === 0 || !selectedMovie) {
    return <div>Loading...</div>;
  }

  const { original_title, overview, id } = selectedMovie;

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackGround movie_id={id} />
    </div>
  );
};

export default MainContainer;
