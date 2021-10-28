import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserTab from "./UserTab";
import NoUserTab from "./NoUserTab";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const auth = useSelector(({ firebase: { auth } }) => auth);
  const { uid, displayName, photoURL } = auth;

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("profile-btn")) setIsOpen(false);
    });

    return () =>
      window.removeEventListener("click", (e) => {
        if (!e.target.classList.contains("profile-btn")) setIsOpen(false);
      });
  }, []);

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className="w-9 h-9 grid place-items-center overflow-hidden">
          {uid ? (
            <img
              className="object-fit profile-btn w-full h-full border-2 border-opacity-20 shadow-lg rounded-lg"
              src={photoURL}
              alt={displayName}
            />
          ) : (
            <i className="fas fa-user-circle text-gray-100 text-3xl profile-btn filter drop-shadow-lg" />
          )}
        </div>
      </div>
      {isOpen && (uid ? <UserTab {...auth} /> : <NoUserTab />)}
    </div>
  );
};

export default UserProfile;
