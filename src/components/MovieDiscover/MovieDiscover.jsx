import React, { useState, useEffect } from "react";
import variables from "../../helpers/variables";
import { useFetch } from "../../hooks/useFetch";
import MovieListing from "../MovieListing/MovieListing";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import SelectOptions from "./SelectOptions";

const MovieDiscover = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState("");
  const [year, setYear] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const url = `${variables.BASE_URL}discover/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genres}&year=${year}&page=${pageNum}`;

  const { data, isLoading } = useFetch(url);

  useEffect(() => {
    if (data && !isLoading) {
      setMovies((movies) => [...new Set([...movies, ...data.results])]);
    }
  }, [data, isLoading]);

  const handleGenreChange = React.useCallback((values) => {
    const valuelist = values.map((value) => value.value);
    setMovies([]);
    setGenres(valuelist.join());
  }, []);

  const handleYearChange = React.useCallback((e) => {
    setMovies([]);
    setYear(e.value);
  }, []);

  const handlePageNum = React.useCallback(() => {
    setPageNum((pageNum) => pageNum + 1);
  }, []);

  return (
    <section
      className="container mx-auto mt-20 sm:mt-28 mb-6 sm:mb-10"
      style={{ minHeight: window.innerHeight * 0.6 }}
    >
      <div>
        <div className="mb-4 border-b-2 border-opacity-5 py-2 flex justify-between items-end">
          <h1 className="text-xl sm:text-2xl lg:text-3xl tracking-wide">
            Movies.
          </h1>
          <span className="opacity-60">Filter your favorite films</span>
        </div>

        <div className="flex justify-end mb-4 sm:mb-6">
          <SelectOptions
            handleGenreChange={handleGenreChange}
            handleYearChange={handleYearChange}
          />
        </div>
      </div>
      {isLoading && (
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-1 gap-y-4 md:gap-x-2 md:gap-y-6">
          <SkeletonLoader type="imageCard" count={6} />
        </div>
      )}
      {movies.length ? (
        <MovieListing
          movies={movies}
          handlePageNum={handlePageNum}
          hasMore={true}
        />
      ) : (
        !isLoading && (
          <div className="text-xl opacity-60 h-40 grid place-items-center">
            No results found.
          </div>
        )
      )}
    </section>
  );
};

export default MovieDiscover;
