import { useEffect } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../../utils/moviesSlice";

const useFetchTrendingMovies = () => {
  const dispatch = useDispatch();
  const fetchTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );

    const json = await response.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);
};

export default useFetchTrendingMovies;
