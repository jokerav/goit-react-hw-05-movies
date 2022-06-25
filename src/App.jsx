import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const Home = lazy(() => import('./views/Home/Home'));
const MovieDetails = lazy(() => import('./views/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./views/Cast/Cast'));
const Reviews = lazy(() => import('./views/Reviews/Reviews'));
const FindMovie = lazy(() => import('./views/FindMovie/FindMovie'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="movies" element={<FindMovie />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
