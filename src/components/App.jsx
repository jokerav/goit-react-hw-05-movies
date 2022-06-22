import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Navigation from './Navigation/Navigation';
import MovieDetails from './views/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
};
