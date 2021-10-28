import Movie from "./Movie";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { useFetch } from "../../hooks/useFetch";
import variables from "../../helpers/variables";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Autoplay, Lazy } from "swiper";
import "swiper/swiper-bundle.min.css";
import Error from "../../helpers/Error";

SwiperCore.use([Navigation, EffectFade, Autoplay, Lazy]);

const { BASE_URL, TMDB_API_KEY } = variables;

const url = `${BASE_URL}trending/movie/day?api_key=${TMDB_API_KEY}`;

const MovieHeader = () => {
  const { data: movies, isLoading, isError } = useFetch(url);
  return (
    <>
      {isLoading && <SkeletonLoader type="banner" />}
      {isError && <Error height="600px" />}
      {movies && (
        <Swiper
          navigation={window.innerWidth > 1024}
          loop={true}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
        >
          {movies.results
            .filter((movie, index) => index < 4)
            .map((movie) => (
              <SwiperSlide key={movie.id} className="w-full relative">
                <Movie {...movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default MovieHeader;
