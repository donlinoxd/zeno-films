import React from "react";
import Select from "react-select";
import { yearOptions, genreOptions } from "./data";

const SelectOptions = ({ handleGenreChange, handleYearChange }) => {
  return (
    <div className="flex space-x-4 text-gray-900">
      <Select
        onChange={(e) => {
          handleGenreChange(e);
        }}
        aria-errormessage="Error"
        placeholder="Genre . . . "
        isMulti
        name="genre"
        options={genreOptions}
        className="basic-multi-select w-56"
        classNamePrefix="select"
      />

      <Select
        onChange={(e) => handleYearChange(e)}
        placeholder="Year"
        name="year"
        options={yearOptions}
        className="basic-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default React.memo(SelectOptions);
