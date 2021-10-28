import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import variables from "../../helpers/variables";
import useWindowWidth from "../../helpers/windowWidth";
import { useState } from "react";
import Error from "../../helpers/Error";

// components
import MovieBanner from "./MovieBanner";
import Title from "./Title";
import Overview from "./Overview";
import Buttons from "./Buttons";
import Casts from "./Casts";
import Trailers from "./Trailers";
import SimilarMovies from "./SimilarMovies";
import VideoModal from "./VideoModal";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const { BASE_URL, TMDB_API_KEY } = variables;

const MovieDetails = () => {
  const width = useWindowWidth();
  const { id } = useParams();
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const url = `${BASE_URL}movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data: movie, isLoading, isError } = useFetch(url);

  const handleClick = () => {
    setIsVideoPlay((isPlay) => !isPlay);
  };

  return (
    <>
      {isLoading && <SkeletonLoader type="banner" />}
      {isError && <Error height="600px" />}
      {movie && (
        <>
          <section className="w-full relative">
            <MovieBanner {...movie} handleClick={handleClick} />
            <div
              className="container w-full shadow-2xl bg-gray-900 shadow-2xl border-blue-900 border-2 border-opacity-50
          rounded-t-3xl relative left-1/2 transform -translate-x-1/2"
              style={{ top: width < 640 ? width * 0.75 : width * 0.25 }}
            >
              <Title {...movie} />
              <Overview {...movie} />
              <Buttons {...movie} />
              <Casts id={id} />
              <Trailers id={id} />

              <SimilarMovies id={id} />
            </div>

            <VideoModal
              id={id}
              {...movie}
              isVideoPlay={isVideoPlay}
              handleClick={handleClick}
            />
          </section>
          <div className="mt-80 xl:mt-96" />
        </>
      )}
    </>
  );
};

export default MovieDetails;
