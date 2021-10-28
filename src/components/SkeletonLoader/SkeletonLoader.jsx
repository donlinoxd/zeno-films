const SkeletonLoader = ({ type, count = 1 }) => {
  const windowWidth = window.innerWidth;
  const width =
    windowWidth < 640
      ? (windowWidth * 0.92) / 3
      : windowWidth < 1024
      ? (windowWidth * 0.83) / 4
      : (windowWidth * 0.73) / 6;

  const array = [...Array(count).keys()];

  const Banner = () => (
    <div
      className="w-full animate-pulse bg-gray-600 flex justify-center items-center flex-col space-y-2 pt-32 px-8"
      style={{
        height: windowWidth < 640 ? windowWidth * 1.5 : windowWidth * 0.556,
      }}
    >
      <div className="w-96 max-w-full h-8 animate-pulse rounded-md bg-gray-400 mb-2" />
      <div className="w-96 max-w-full h-4 animate-pulse rounded-md bg-gray-400" />
      <div className="w-96 max-w-full h-4 animate-pulse rounded-md bg-gray-400" />
      <div className="w-96 max-w-full h-4 animate-pulse rounded-md bg-gray-400" />
      <div className="w-32 max-w-1/3 h-10 animate-pulse rounded-md bg-gray-400" />
    </div>
  );

  const ImgCard = () => {
    return array.map((key) => (
      <div
        key={key}
        className="bg-gray-200 animate-pulse rounded-md inline-block"
        style={{ width: width, height: width * 1.5 }}
      />
    ));
  };

  const ImgCardWithDetails = () => {
    return array.map((key) => (
      <div
        key={key}
        className="animate-pulse flex flex-col col-span-1 relative bg-gray-900 rounded-md pb-2"
      >
        <div className="bg-gray-600 h-28 animate-pulse" />
        <div className="bg-gray-600 h-4 w-3/4 mx-auto my-3 animate-pulse" />
        <div className="bg-gray-600 h-4 w-10/12 mx-auto my-1 animate-pulse" />
      </div>
    ));
  };
  const CastCard = () => {
    const w =
      windowWidth < 640
        ? (windowWidth * 0.95 * 0.92) / 4
        : windowWidth < 1024
        ? (windowWidth * 0.85 * 0.82) / 5
        : (windowWidth * 0.75 * 0.72) / 6;

    return (
      <div
        className="bg-gray-200 animate-pulse rounded-md inline-block"
        style={{ width: w, height: w * 1.5 }}
      />
    );
  };

  switch (type) {
    case "banner":
      return <Banner />;
    case "imageCard":
      return <ImgCard />;
    case "imageCardwithDetails":
      return <ImgCardWithDetails />;
    case "castCard":
      return <CastCard />;
    default:
      return null;
  }
};

export default SkeletonLoader;
