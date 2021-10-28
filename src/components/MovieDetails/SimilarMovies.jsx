import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import variables from "../../helpers/variables";
import noImage from "../../assets/no-image.svg";

import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const SimilarMovies = ({ id }) => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const url = `${variables.BASE_URL}movie/${id}/similar?api_key=${variables.TMDB_API_KEY}&language=en-US&page=${pageNum}`;

  const { data, isLoading } = useFetch(url);

  const handleHasMore = () => {
    setHasMore(() => (data.results.length ? true : false));
  };

  useEffect(() => {
    if (!isLoading) {
      setMovies((movies) => [...movies, ...data.results]);
      setHasMore(false);
    }
  }, [data, isLoading]);

  return (
    <>
      <div className="p-2 md:p-4 xl:p-6 border-t-2 border-gray-800">
        <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wider">
          <h2>You might be interested in</h2>
        </div>
        <InfiniteScroll
          className="w-full relative grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          dataLength={movies.length}
          next={() => setPageNum(pageNum + 1)}
          hasMore={hasMore}
          loader={<SkeletonLoader type="imageCardwithDetails" count={8} />}
        >
          {movies.map(
            ({ title, overview, id, release_date, backdrop_path }) => (
              <div
                key={id}
                className="flex flex-col col-span-1 relative bg-gray-800 rounded-md pb-2 overflow-hidden"
              >
                <div className="w-full play-active relative overflow-hidden rounded-t-md">
                  <Link to={`/movie/${id}`}>
                    <img
                      src={
                        backdrop_path
                          ? variables.IMG_BASE_URL_300 + backdrop_path
                          : noImage
                      }
                      alt={title}
                      className="object-fit transition-all duration-500 transform hover:scale-110"
                    />
                  </Link>
                </div>
                <div className="p-2">
                  <h2 className="text-center mb-1 tracking-wide">
                    {title}{" "}
                    {release_date && (
                      <span>({new Date(release_date).getFullYear()})</span>
                    )}
                  </h2>
                </div>
              </div>
            )
          )}

          {hasMore || (
            <div
              className="w-full col-span-full flex justify-center cursor-pointer"
              onClick={handleHasMore}
            >
              <span className="py-2 px-8 rounded-md border-2 border-blue-900 hover:bg-blue-900 transition duration-300">
                Load More
              </span>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default React.memo(SimilarMovies);
