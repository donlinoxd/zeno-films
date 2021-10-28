import variables from "../../helpers/variables";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Lazy } from "swiper/core";

import { Link } from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../redux/actions/authActions";

SwiperCore.use([Pagination, Navigation, Lazy]);

const UserTab = (props) => {
  const dispatch = useDispatch();
  const { uid, displayName, email, photoURL } = props;

  useFirestoreConnect(() => [{ collection: "users", doc: uid }]);

  const watchlist = useSelector(
    ({ firestore: { data } }) => data.users && data.users[uid]?.movies
  );

  return (
    <div className="profile-btn absolute right-0 transform translate-y-4 bg-gray-100 text-gray-900 w-72 rounded-lg shadow-2xl h-96 p-4 lg:py-2">
      <div className="flex items-center space-x-2 border-b-2 pb-2 profile-btn">
        <div className="w-16 h-16 border-2 rounded-full border-opacity-70 pointer-events-none">
          <img
            className="rounded-full w-full h-full object-fit"
            src={photoURL}
            alt={displayName}
          />
        </div>
        <div className="flex flex-col profile-btn">
          <h3 className="text-xl font-medium pointer-events-none">
            {displayName}
          </h3>
          <span className="opacity-60 mb-2 pointer-events-none">{email}</span>
          <div className="space-x-4 profile-btn">
            <Link className="hover:underline" to="/">
              Profile
            </Link>
            <span
              onClick={() => dispatch(signOutUser())}
              className="cursor-pointer hover:underline opacity-50 hover:opacity-100"
            >
              Sign Out
            </span>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="pb-2 flex justify-between items-end profile-btn">
          <h3 className="text-lg font-semibold tracking-wider pointer-events-none">
            Watchlist
          </h3>
          <Link
            to="/watchlist"
            className="hover:underline opacity-60 hover:opacity-100"
          >
            See All
          </Link>
        </div>
        <Swiper
          slidesPerView={2}
          freeMode={true}
          spaceBetween={6}
          pagination={{ type: "progressbar" }}
        >
          {watchlist?.length ? (
            watchlist.map((movie) => {
              if (!movie.poster_path) return null;
              return (
                <SwiperSlide key={movie.id}>
                  <div>
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        className="shadow-lg rounded-lg transform hover:scale-105 transition-all"
                        src={`${
                          variables.IMG_BASE_URL_200 + movie.poster_path
                        }`}
                        alt={movie.title}
                      />
                    </Link>
                    <h3 className="text-md mt-0.5 font-semibold">
                      {movie.title}
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <div className="profile-btn w-full h-40 flex flex-col items-center justify-center opacity-70">
              <strong>No Data Found</strong>
              <span>Add your favorite movies to watchlist now.</span>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default UserTab;
