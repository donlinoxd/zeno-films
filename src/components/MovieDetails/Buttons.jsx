import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWatchlist } from "../../redux/actions/watchlistActions";

const Buttons = (movie) => {
  const dispatch = useDispatch();

  const auth = useSelector(({ firebase: { auth } }) => auth);
  const watchlist = useSelector(
    ({ firebase: { profile } }) => profile.movies?.length && profile.movies
  );
  const movieIdList = watchlist ? watchlist.map((movie) => movie.id) : [];

  return (
    <div
      className="w-full mx-auto flex justify-evenly space-x-4 my-6"
      style={{ maxWidth: "400px" }}
    >
      <div
        className="flex items-center justify-center flex-col cursor-pointer transform active:scale-90 opacity-80 hover:opacity-100"
        onClick={() => {
          if (!auth.uid) {
            return alert(
              "Please log in to add your favorite film to the list."
            );
          } else if (movieIdList.includes(movie.id)) {
            return alert("The movie is already on your watchlist");
          } else {
            dispatch(addWatchlist(auth.uid, movie));
          }
        }}
      >
        <i className="fas fa-plus-square sm:text-xl" />{" "}
        <span className="sm:text-lg">WatchList</span>
      </div>
      <div className="flex items-center justify-center flex-col cursor-pointer transform active:scale-90 opacity-80 hover:opacity-100">
        <i className="fas fa-download sm:text-xl" />{" "}
        <span className="sm:text-lg">Download</span>
      </div>
      <div className="flex items-center justify-center flex-col cursor-pointer transform active:scale-90 opacity-80 hover:opacity-100">
        <i className="fas fa-share-square sm:text-xl" />{" "}
        <span className="sm:text-lg">Share</span>
      </div>
    </div>
  );
};

export default React.memo(Buttons);