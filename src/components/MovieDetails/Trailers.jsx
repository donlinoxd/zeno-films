import React from "react";
import { useFetch } from "../../hooks/useFetch";
import variables from "../../helpers/variables";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const { BASE_URL, TMDB_API_KEY } = variables;

const Trailers = ({ id }) => {
  const url = `${BASE_URL}movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data: trailers, isLoading, isError } = useFetch(url);

  return (
    <div className="container mx-auto my-6 sm:my-10">
      <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wide">
        <h2>TRAILERS</h2>
      </div>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error!!!</div>}
      {trailers && (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            navigation={true}
            pagination={{ type: "fraction" }}
            centerInsufficientSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
          >
            {trailers.results.map(
              (trailer) =>
                trailer.site === "YouTube" && (
                  <SwiperSlide key={trailer.id}>
                    <div className="relative w-full">
                      <div
                        className="h-0 overflow-hidden"
                        style={{ paddingBottom: "52.25%", paddingTop: "30px" }}
                      >
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${trailer.key}`}
                          title={trailer.name}
                          frameBorder="0"
                          allowFullScreen={true}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default React.memo(Trailers);
