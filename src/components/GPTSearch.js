import React, { useRef } from "react";
import { NETFLIX_BG_IMAGE } from "./constant";
import useGetGeminiSearchMovies from "./hooks/useGetGeminiSearchMovies";
import GPTSuggestion from "./GPTSuggestion";

const GPTSearch = () => {
  const searchText = useRef(null);

  const { handleGeminiSearch, loading } = useGetGeminiSearchMovies();

  const handleSearchMovies = async () => {
    await handleGeminiSearch(searchText.current.value);
  };

  return (
    <div>
      <div className="fixed md:w-full object-cover h-full -z-10">
        <img className="" src={NETFLIX_BG_IMAGE} alt="bg-pic" />
      </div>

      <div className="pt-[10%] w-full flex justify-center">
        <input
          ref={searchText}
          className="rounded-md rounded-e-none w-1/2 p-4"
          type="text"
          placeholder="What movie are you looking for?"
        />
        <button
          onClick={handleSearchMovies}
          className="bg-[#E50914] rounded-md rounded-s-none text-white p-4 w-40"
        >
          Search
        </button>
      </div>
      <GPTSuggestion loading={loading} />
    </div>
  );
};

export default GPTSearch;
