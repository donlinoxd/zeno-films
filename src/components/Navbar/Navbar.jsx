import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import UserProfile from "../UserProfile/UserProfile";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 py-1 lg:py-2 z-30">
      <nav className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center">
          <Link className="w-16 sm:w-20" to="/">
            <img className="w-full" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="text-xl tracking-wider font-semibold transform hover:scale-110 transition-all">
          <Link to="/discover/movies">Movies</Link>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="relative w-10 h-10">
            <Searchbar />
          </div>
          <UserProfile />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
