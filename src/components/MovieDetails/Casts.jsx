import React from "react";
import { useFetch } from "../../hooks/useFetch";
import variables from "../../helpers/variables";
import Error from "../../helpers/Error";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Lazy } from "swiper/core";
SwiperCore.use([Pagination, Navigation, Lazy]);

const { BASE_URL, TMDB_API_KEY, IMG_BASE_URL_200 } = variables;

const Casts = ({ id }) => {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data: casts, isLoading, isError } = useFetch(url);

  return (
    <div className="container mx-auto">
      <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wide">
        <h2>CASTS</h2>
      </div>
      {isError && <Error height="150px" />}
      {isLoading ? (
        <SkeletonLoader type="castCard" count={3} />
      ) : (
        <>
          <Swiper
            lazy={{
              loadPrevNext: true,
              preloaderClass: "custom-swiper-preloader",
            }}
            slidesPerView={4}
            spaceBetween={2}
            freeMode={true}
            navigation={window.innerWidth > 992}
            pagination={{
              type: "progressbar",
            }}
            centerInsufficientSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 6,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            updateOnWindowResize={true}
          >
            {casts.cast.map(({ profile_path, id, name }) => {
              if (!profile_path) return null;

              return (
                <SwiperSlide key={id} className="bg-gray-900 rounded-md">
                  <img
                    className="rounded-md cursor-pointer swiper-lazy"
                    data-src={IMG_BASE_URL_200 + profile_path}
                    alt={name}
                  />
                  <div className="w-full bg-gray-900 swiper-lazy-pre-loader-wrapper">
                    <div className="custom-swiper-preloader">
                      <SkeletonLoader type="castCard" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default React.memo(Casts);
