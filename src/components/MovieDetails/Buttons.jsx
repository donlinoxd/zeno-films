import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addWatchlist } from "../../firebase/firestore";

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
        className={
          "flex items-center justify-center flex-col cursor-pointer transform active:scale-90 opacity-80 hover:opacity-100"
        }
        onClick={() => {
          if (!auth.uid) {
            return toast.warning(
              "Please log in to add your favorite film to the list."
            );
          } else if (movieIdList.includes(movie.id)) {
            return toast.warning("The movie is already on your watchlist");
          } else {
            dispatch(addWatchlist(auth.uid, movie));
          }
        }}
      >
        <i
          className={`fas sm:text-xl ${
            movieIdList.includes(movie.id)
              ? "text-green-400 opacity-100 far fa-check-circle"
              : "fa-plus-square"
          }`}
        />{" "}
        <span className="sm:text-lg">WatchList</span>
      </div>
      <div className="flex items-center cursor-not-allowed justify-center flex-col opacity-30">
        <i className="fas fa-download sm:text-xl" />{" "}
        <span className="sm:text-lg">Download</span>
      </div>

      <div data-href="https://zeno-films-15e58.web.app">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fzeno-films-15e58.web.app%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
        >
          <div className="flex items-center justify-center flex-col cursor-pointer transform active:scale-90 opacity-80 hover:opacity-100">
            <i className="fas fa-share-square sm:text-xl" />{" "}
            <span className="sm:text-lg">Share</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default React.memo(Buttons);
