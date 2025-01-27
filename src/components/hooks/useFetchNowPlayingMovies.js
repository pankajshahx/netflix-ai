import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, [fetchNowPlayingMovies]);
};

export default useFetchNowPlayingMovies;
