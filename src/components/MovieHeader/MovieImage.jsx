import React from "react";
import variables from "../../helpers/variables";
import useWindowWidth from "../../helpers/windowWidth";

const MovieImage = ({ backdrop_path, poster_path, title }) => {
  const width = useWindowWidth();

  return (
    <div
      className="w-full relative"
      style={{
        height: width < 640 ? width * 1.5 : width * 0.556,
      }}
    >
      <picture className="w-full object-cover">
        <source
          media="(min-width: 640px)"
          srcSet={`${variables.IMG_BASE_URL + backdrop_path}`}
        />
        <img
          className="w-full"
          src={`${variables.IMG_BASE_URL_500 + poster_path}`}
          alt={title}
        />
      </picture>
      <div className="absolute -bottom-1 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default React.memo(MovieImage);
