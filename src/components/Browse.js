import React from "react";
import Header from "./Header";
import useFetchNowPlayingMovies from "./hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchTrendingMovies from "./hooks/useFetchTrendingMovies";
import useFetchPopularMovies from "./hooks/useFetchPopularMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const gpt = useSelector((store) => store?.GPT?.gptToggle);
  useFetchNowPlayingMovies();
  useFetchTrendingMovies();
  useFetchPopularMovies();
  return (
    <div>
      <Header browseStyle={true} />
      {gpt ? (
        <GPTSearch />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
