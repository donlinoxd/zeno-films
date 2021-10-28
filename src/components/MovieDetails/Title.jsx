import React from "react";
import variables from "../../helpers/variables";
import useWindowWidth from "../../helpers/windowWidth";

const Title = ({ title, poster_path, release_date, production_countries }) => {
  const width = useWindowWidth();
  return (
    <div className="pointer-events-none container w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-end space-x-3 sm:space-x-8">
      <div>
        <img
          className="rounded-md"
          src={`${variables.IMG_BASE_URL_200 + poster_path}`}
          alt={title}
          style={{
            maxWidth: width < 901 ? "125px" : "200px",
          }}
        />
      </div>

      <div className="flex flex-col sm:space-y-4">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-normal">{title}</h1>
        <div>
          <strong className="opacity-60 font-thin sm:text-xl">
            {new Date(release_date)?.getFullYear()} |{" "}
          </strong>
          <i className="opacity-70 font-thin sm:text-xl">
            {production_countries[0]?.name}
          </i>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Title);
