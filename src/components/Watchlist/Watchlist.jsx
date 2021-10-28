import { useDispatch, useSelector } from "react-redux";
import { removeWatchlist } from "../../redux/actions/watchlistActions";
import { useFirestoreConnect } from "react-redux-firebase";
import variables from "../../helpers/variables";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({ firebase: { auth } }) => auth);
  useFirestoreConnect(() => [{ collection: "users", doc: auth.uid }]);

  const movies = useSelector(
    ({ firestore: { data } }) => data.users && data.users[auth.uid]?.movies
  );

  return (
    <section
      className="mt-24 sm:mt-28  mb-8 container mx-auto"
      style={{ minHeight: window.innerHeight * 0.6 }}
    >
      <div className="w-full flex justify-between items-end py-1 sm:py-2 my-6 border-b-2 border-opacity-30 border-blue-600">
        <div className="text-3xl sm:text-4xl font-semibold tracking-widest">
          <h1>Watchlist</h1>
        </div>
        <span className="opacity-80 text-xs sm:text-base">
          All your favorite movies in one place
        </span>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 ">
        {movies &&
          movies.map((movie) => (
            <li key={movie.id} className="bg-gray-800 rounded-lg">
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <picture className="object-cover w-full">
                    <source
                      media="(min-width: 640px)"
                      srcSet={`${
                        variables.IMG_BASE_URL_300 + movie.backdrop_path
                      }`}
                      loading="lazy"
                    />
                    <img
                      className="object-cover w-full transition-all transform hover:border-2 border-opacity-50 rounded-t-lg hover:rounded-lg border-blue-500 hover:scale-110 "
                      src={variables.IMG_BASE_URL_200 + movie.backdrop_path}
                      alt={movie.tite}
                      loading="lazy"
                    />
                  </picture>
                </Link>
              </div>
              <div className="py-1 px-2 sm:py-2 sm:px-4">
                <div className="h-14 sm:h-20">
                  <h2 className="font-semibold tracking-wider sm:tracking-widest text-lg lg:text-xl">
                    {movie.title}
                  </h2>
                </div>
                <div className="flex items-end space-x-4 relative">
                  <span className="text-blue-300 opacity-90  text-lg cursor-pointer transform active:scale-75">
                    <i
                      className="fas fa-trash-alt opacity-50 hover:opacity-100"
                      onClick={() => {
                        dispatch(removeWatchlist(auth.uid, movie));
                      }}
                    />
                  </span>
                  <span className="text-blue-300 opacity-90  text-lg cursor-pointer transform active:scale-75">
                    <i className="fas fa-download opacity-50 hover:opacity-100 cursor-not-allowed" />
                  </span>
                  <span className="text-blue-300 opacity-90  text-lg cursor-pointer transform active:scale-75">
                    <i className="fas fa-share-square opacity-50 hover:opacity-100" />
                  </span>

                  <strong className="opacity-60 font-thin absolute right-0 bottom-0">
                    {new Date(movie.release_date).getFullYear()}
                  </strong>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Watchlist;
