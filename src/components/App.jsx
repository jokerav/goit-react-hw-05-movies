import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Navigation from './Navigation/Navigation';
import MovieDetails from './views/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );
};
