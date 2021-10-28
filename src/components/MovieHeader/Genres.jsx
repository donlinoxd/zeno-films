import React from "react";
import genreList from "../../helpers/genresList";

const Genres = ({ genres }) => {
  const genreNames = genreList.filter((genre) => {
    return genres.includes(genre.id);
  });

  return (
    <ul className="flex justify-center sm:justify-start w-full space-x-3">
      {genreNames.map(({ id, name }) => {
        return (
          <li key={id} className="bg-opacity-30 bg-blue-900 rounded px-3 py-1">
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(Genres);
