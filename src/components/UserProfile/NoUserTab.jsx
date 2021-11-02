import { useDispatch } from "react-redux";
import {
  signInUserWithGoogle,
  signInUserWithFacebook,
} from "../../firebase/auth";

const NoUserTab = () => {
  const dispatch = useDispatch();

  return (
    <div className="profile-btn absolute right-0 transform translate-y-4 bg-gray-100 text-gray-900 w-72 rounded-lg shadow-2xl p-4">
      <div className="opacity-60 font-light text-center border-b-2 pb-1 mb-4 pointer-events-none">
        <strong>Sign in now to add your favorite movies to watchlist.</strong>
      </div>
      <div className="w-full bg-gray-300 space-y-2 text-gray-200 relative">
        <button
          onClick={() => dispatch(signInUserWithFacebook())}
          type="button"
          className="flex space-x-2 items-center justify-center bg-blue-500 w-full font-semibold tracking-wider px-2 py-3 rounded-md text-md"
        >
          <i className="fab fa-facebook-f text-gray-100 text-3xl absolute left-4" />
          <span>Login with Facebook</span>
        </button>
        <button
          onClick={() => dispatch(signInUserWithGoogle())}
          type="button"
          className="flex space-x-2 items-center justify-center bg-red-500 w-full font-semibold tracking-wider px-2 py-3 rounded-md text-md"
        >
          <i className="fab fa-google-plus-g text-gray-100 text-3xl absolute left-4" />
          <span>Login with Google+</span>
        </button>
      </div>
    </div>
  );
};

export default NoUserTab;
