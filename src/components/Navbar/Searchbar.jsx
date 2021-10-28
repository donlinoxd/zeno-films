import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";

const SearchBar = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const input = useRef(null);

  useEffect(() => {
    query ? history.push(`/search?query=${query}`) : history.push("/");
  }, [history, query]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.classList.contains("search-btn")) {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <div className="flex items-center absolute right-0 top-1/2 transform -translate-y-1/2">
      <input
        className={`transition-all outline-none rounded h-8  pl-8 duration-300 text-gray-900 search-btn max-w-3/4
                ${isActive ? "w-64" : "w-0 opacity-0"}`}
        placeholder="Search..."
        type="text"
        name="query"
        id="query"
        value={query}
        ref={input}
        onChange={(e) => setQuery(e.target.value)}
      />
      <i
        className={`fas fa-search absolute text-blue-500 cursor-pointer left-0 py-4 px-2 search-btn
        ${isActive && "pointer-events-none"}`}
        onClick={() => {
          setIsActive(true);
          input.current.focus();
        }}
      />
      <i
        className={`fas fa-times search-btn cursor-pointer absolute right-0 text-blue-500 opacity-50 hover:opacity-100 py-4 px-3
        ${isActive ? "block" : "hidden"}`}
        onClick={() => {
          setQuery("");
          input.current.focus();
        }}
      />
    </div>
  );
};

export default SearchBar;
