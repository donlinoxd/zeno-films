import Movie from "./Movie";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Lazy } from "swiper/core";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import Error from "../../helpers/Error";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Lazy]);

const Movies = ({ heading, url }) => {
  const { data: movies, isLoading, isError } = useFetch(url);

  return (
    <section>
      <div className="title mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer">
        <h2>{heading} &gt;</h2>
      </div>
      {isError && <Error height="180px" />}
      {isLoading ? (
        <div className="space-x-1 whitespace-nowrap overflow-x-hidden">
          <SkeletonLoader
            type="imageCard"
            count={
              window.innerWidth < 640 ? 3 : window.innerWidth < 1024 ? 4 : 6
            }
          />
        </div>
      ) : (
        <Swiper
          lazy={{
            loadPrevNext: true,
            preloaderClass: "custom-swiper-preloader",
          }}
          slidesPerView={3}
          spaceBetween={4}
          freeMode={true}
          navigation={window.innerWidth > 1024}
          pagination={{
            type: "progressbar",
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          updateOnWindowResize={true}
        >
          {movies?.results.map((movie) => {
            if (!movie.poster_path) return null;
            return (
              <SwiperSlide
                key={movie.id}
                className="play-active overflow-hidden rounded-md relative"
              >
                <Movie {...movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default Movies;
