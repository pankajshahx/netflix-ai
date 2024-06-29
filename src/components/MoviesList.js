import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, title }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const onWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + event.deltaY,
          behavior: "smooth",
        });
      }
    };

    scrollContainer.addEventListener("wheel", onWheel);
    return () => scrollContainer.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll scroll-container"
        ref={scrollContainerRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex">
          {movies.map((movie) =>
            movie.poster_path ? (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
