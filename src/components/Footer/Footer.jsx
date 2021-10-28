import { Link } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="relative w-full h-60 sm:h-80">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={bg}
          alt="Footer Poster"
          lazy="true"
        />
      </div>
      <div
        className="w-full h-full absolute bottom-0 bg-gray-900 bg-opacity-60 from-gray-900 py-4"
        style={{ backdropFilter: "blur(1px)" }}
      >
        <div className="w-full flex items-center justify-center mb-6">
          <Link to="./#">
            <img className="w-16 sm:w-24 " src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className="container mx-auto flex justify-around sm:text-lg tracking-wider font-medium"
          style={{ width: "50rem" }}
        >
          <ul className="space-y-2">
            <li className="hover:font-semibold">
              <a href="./#"> Home</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> Contact Us</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> TOS</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> About us</a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:font-semibold">
              <a href="./#"> Live</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> FAQ</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> Premium</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> Privacy Policy</a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:font-semibold">
              <a href="./#"> You must watch</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> Release</a>
            </li>
            <li className="hover:font-semibold">
              <a href="./#"> Top IMDB</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
