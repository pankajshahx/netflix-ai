import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const trendingMovies = useSelector((store) => store?.movies?.trendingMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  if (!movies || !trendingMovies || !popularMovies) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 px-12">
        <MoviesList title="Now Playing" movies={movies} />
        <MoviesList title="Trending" movies={trendingMovies} />
        <MoviesList title="Popular" movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
