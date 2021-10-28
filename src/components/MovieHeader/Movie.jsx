import MovieImage from "./MovieImage";
import Genres from "./Genres";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
const Movie = (movie) => {
  return (
    <>
      {/* MOVIE IMAGE */}
      <MovieImage {...movie} />
      {/* DETAILS OF MOVIE */}
      <div className="absolute w-full h-full bottom-0 flex flex-col justify-center sm:pt-16">
        <div
          className="absolute bottom-8 flex flex-end flex-col justify-end w-full
                      sm:justify-center sm:relative container mx-auto space-y-4 lg:space-y-6"
        >
          <div className="py-1 md:py-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal inline-block sm:w-2/3">
              {movie.title}
            </h2>
          </div>

          {/* GENRES OF MOVIE */}
          <Genres genres={movie.genre_ids} />

          <div className="hidden sm:block w-1/2 max-h-20 whitespace-pre-line overflow-y-scroll scrollbar-hide">
            <LinesEllipsis
              text={movie.overview}
              maxLine="3"
              ellipsis=" . . ."
              trimRight
              component="p"
            />
          </div>

          {/* PLAY BUTTON */}
          <div className="flex justify-center sm:justify-start">
            <Link
              to={`/movie/${movie.id}`}
              className="bg-red-700 rounded-md px-6 py-2 space-x-2 hover:bg-red-600"
            >
              <i className="fas fa-play"></i>
              <strong className="text-lg font-normal tracking-wide cursor-pointer">
                Play
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
