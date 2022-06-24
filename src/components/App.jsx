import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Navigation from './Navigation/Navigation';
import MovieDetails from './views/MovieDetails/MovieDetails';
import Cast from './views/Cast/Cast';
import Reviews from './views/Reviews/Reviews';
import FindMovie from './views/FindMovie/FindMovie';
export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<FindMovie />}></Route>

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
