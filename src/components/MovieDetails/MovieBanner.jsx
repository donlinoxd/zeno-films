import React from "react";
import variables from "../../helpers/variables";
const { IMG_BASE_URL, IMG_BASE_URL_500 } = variables;

const MovieBanner = ({ backdrop_path, poster_path, title, handleClick }) => {
  return (
    <div className="w-full absolute top-0">
      <picture
        className="w-full block relative left-1/2 transform -translate-x-1/2"
        style={{ maxWidth: "1680px" }}
      >
        <source
          media="(min-width: 640px)"
          srcSet={`${IMG_BASE_URL + backdrop_path}`}
        />
        <img
          className="w-full"
          src={`${IMG_BASE_URL_500 + poster_path}`}
          alt={title}
        />
      </picture>
      <div className="absolute -bottom-1 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent z-100" />
      <div
        className="video-play-btn absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-1/4  "
        onClick={() => handleClick()}
      >
        <i
          className="fas fa-play text-md sm:text-lg bg-blue-600 w-10 h-10 sm:w-16 sm:h-16 rounded-full
        flex items-center justify-center cursor-pointer z-10"
        />
      </div>
    </div>
  );
};

export default React.memo(MovieBanner);
