import { Link } from "react-router-dom";
import variables from "../../helpers/variables";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const Movie = ({ poster_path, title, id }) => {
  return (
    <>
      <Link to={`/movie/${id}`}>
        <img
          className="cursor-pointer transition-all duration-500 hover:transform hover:scale-110 swiper-lazy"
          data-src={variables.IMG_BASE_URL_200 + poster_path}
          alt={title}
        />
        <div className="w-full bg-gray-900 swiper-lazy-pre-loader-wrapper">
          <div className="custom-swiper-preloader">
            <SkeletonLoader type="imageCard" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
