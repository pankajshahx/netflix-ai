import { useDispatch } from "react-redux";
import model from "../../utils/geminiAI";
import { API_OPTIONS } from "../constant";
import { addMoviesNameAndList } from "../../utils/gptSlice";
import { useState } from "react";

const useGetGeminiSearchMovies = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const searchMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await response.json();
    return json.results;
  };

  const handleGeminiSearch = async (searchText) => {
    setLoading(true);
    const query = `Recommend 5 movies based on the query: "${searchText}". Provide only the movie titles as a comma-separated list with no special characters, headings, or spaces, just plain text.`;

    try {
      const result = await model.generateContent(query);
      const response = await result.response;
      const text = await response.text();
      const queries = text.split(",").map((query) => query.trim()) || [];
      const promiseArr = queries.map((newQuery) => searchMovies(newQuery));
      const finalMoviesData = await Promise.all(promiseArr);
      dispatch(
        addMoviesNameAndList({
          movieNames: queries,
          movieList: finalMoviesData,
        })
      );
    } catch (error) {
      console.error("Error while handling Gemini search:", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleGeminiSearch, loading };
};

export default useGetGeminiSearchMovies;
