import React from "react";
import Header from "./Header";
import useFetchNowPlayingMovies from "./hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchTrendingMovies from "./hooks/useFetchTrendingMovies";
import useFetchPopularMovies from "./hooks/useFetchPopularMovies";

const Browse = () => {
  useFetchNowPlayingMovies();
  useFetchTrendingMovies();
  useFetchPopularMovies();
  return (
    <div>
      <Header browseStyle={true} />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
