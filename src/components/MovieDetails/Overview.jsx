import React from "react";

const Overview = ({ overview }) => {
  return (
    <div className="container mx-auto mt-28 lg:mt-48 space-y-2 opacity-80">
      <h3 className="font-bold tracking-widest sm:text-lg">OVERVIEW:</h3>
      <p className="text-justify" style={{ textIndent: "2rem" }}>
        {overview}
      </p>
    </div>
  );
};

export default React.memo(Overview);
