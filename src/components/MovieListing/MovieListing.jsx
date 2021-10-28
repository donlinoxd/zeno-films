import { Link } from "react-router-dom";
import variables from "../../helpers/variables";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const MovieListing = ({ movies, handlePageNum, hasMore }) => {
  return (
    <>
      <InfiniteScroll
        className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-1 gap-y-4 md:gap-x-2 md:gap-y-6 overflow-hidden"
        dataLength={movies.length}
        next={() => handlePageNum()}
        hasMore={hasMore}
        loader={<SkeletonLoader type="imageCard" count={3} />}
      >
        {movies &&
          movies.map(
            ({ poster_path, id, title }) =>
              poster_path && (
                <div
                  key={id}
                  className="play-active col-span-1 relative bg-gray-900 rounded-md overflow-hidden"
                >
                  <Link to={`/movie/${id}`}>
                    <img
                      className="transform hover:scale-110 transition-all duration-500"
                      src={variables.IMG_BASE_URL_200 + poster_path}
                      alt={title}
                    />
                  </Link>
                </div>
              )
          )}
      </InfiniteScroll>
    </>
  );
};

export default MovieListing;
