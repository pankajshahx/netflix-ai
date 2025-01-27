import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useFetchMovieVideo = ({ movie_id }) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await response.json();
    const trailer = json.results.filter(
      (video) => video?.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0] || json.results[0]));
  }, [movie_id, dispatch]);

  useEffect(() => {
    fetchMovieTrailer();
  }, [fetchMovieTrailer]);
};

export default useFetchMovieVideo;
