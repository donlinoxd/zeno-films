const Error = ({ height }) => {
  return (
    <div
      className="w-full text-2xl grid place-items-center opacity-60"
      style={{ height: height }}
    >
      Sorry, can't load the movies right now.
    </div>
  );
};

export default Error;
