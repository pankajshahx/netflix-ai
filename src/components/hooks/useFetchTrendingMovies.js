import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../../utils/moviesSlice";

const useFetchTrendingMovies = () => {
  const dispatch = useDispatch();

  const fetchTrendingMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Failed to fetch trending movies");
      }

      const json = await response.json();
      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTrendingMovies();
  }, [fetchTrendingMovies]);
};

export default useFetchTrendingMovies;
