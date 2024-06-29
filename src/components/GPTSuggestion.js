import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const GPTSuggestion = ({ loading }) => {
  const { movieNames, movieList } = useSelector((store) => store.GPT);

  return (
    <div>
      <div className="md:mt-12 mt-4 bg-black md:px-12 px-4 opacity-90">
        {loading ? (
          <div className="text-white text-3xl p-2">Loading ...</div>
        ) : (
          movieList &&
          movieList.map((movie, index) => (
            <div key={index}>
              <MoviesList movies={movie} title={movieNames[index]} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GPTSuggestion;
