import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/movies'}>Movies</NavLink>
    <NavLink to={'/movies/:movieId'}></NavLink>
    <NavLink to={'/movies/:movieId/cast'}></NavLink>
    <NavLink to={'/movies/:movieId/reviews'}></NavLink>
  </nav>
);
export default Navigation;
