import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieListing from "../MovieListing/MovieListing";
import variables from "../../helpers/variables";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const Search = () => {
  const location = useLocation();
  const [query, setQuery] = useState("a");
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setQuery(location.search.slice(7));
  }, [location]);

  const url = `${variables.BASE_URL}search/movie?api_key=${variables.TMDB_API_KEY}&language=en-US&query=${query}&page=${pageNum}`;

  const { data, isLoading } = useFetch(url);

  const handlePageNum = useCallback(() => {
    setPageNum((pageNum) => pageNum + 1);
  }, []);

  useEffect(() => {
    setPageNum(1);
    setMovies([]);
    setResults(0);
    setTotalResults(0);
  }, [query]);

  useEffect(() => {
    if (data) {
      setMovies((movies) => [...new Set([...movies, ...data.results])]);
      setTotalResults(data.total_results);
      setResults(movies.length);
      if (results === totalResults) setHasMore((hasMore) => !hasMore);
    }
  }, [data, movies.length, results, totalResults]);

  return (
    <section className="container mx-auto py-20 sm:py-28">
      <div className="mb-4 border-b-2 border-opacity-5 py-2 flex justify-between items-end">
        <h1 className="text-xl sm:text-2xl lg:text-3xl tracking-wide">
          Search results for {query}
        </h1>
        <span className="opacity-60">
          {results} of {totalResults} results
        </span>
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
          hasMore={hasMore}
        />
      ) : null}
    </section>
  );
};

export default Search;
