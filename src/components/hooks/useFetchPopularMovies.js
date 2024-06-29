import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );

    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);
};

export default useFetchPopularMovies;
