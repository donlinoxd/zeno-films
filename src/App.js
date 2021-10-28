import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const MoviePage = React.lazy(() => import("./pages/MoviePage/MoviePage"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const WatchlistPage = React.lazy(() =>
  import("./pages/Watchlist/WatchlistPage")
);
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const DiscoverMoviePage = React.lazy(() =>
  import("./pages/DiscoverMoviesPage/DiscoverMoviePage")
);

const App = () => {
  return (
    <React.Suspense fallback={<div />}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/watchlist" component={WatchlistPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/discover/movies" component={DiscoverMoviePage} />
        </Switch>
        <Footer />
      </Router>
    </React.Suspense>
  );
};

export default App;
