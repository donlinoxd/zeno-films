import Watchlist from "../../components/Watchlist/Watchlist";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const WatchlistPage = () => {
  const auth = useSelector(({ firebase: { auth } }) => auth);

  if (!auth.uid) return <Redirect to="/" />;

  return <Watchlist />;
};
export default WatchlistPage;
