import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NotFound from "./Components/NotFound/NotFound";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blog">
          <NotFound />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;