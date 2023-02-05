import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Movies from "./components/Movies";
import SingleMovie from "./pages/SingleMovie";
import Watchlist from "./pages/Watchlist";
import Films from "./Films";
import Lists from "./pages/Lists";
import Reviews from "./pages/Reviews";
import Likes from "./pages/Likes";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="reviews">
        <Reviews />
      </Route>
      <Route path="/likes">
        <Likes />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/watchlist">
        <Watchlist />
      </Route>
      <Route path="/films">
        <Films />
      </Route>
      <Route path="/lists">
        <Lists />
      </Route>
      <Route path="/movies/:id" children={<SingleMovie />} />
    </Switch>
  );
};

export default App;
