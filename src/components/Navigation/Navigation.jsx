import { Link } from 'react-router-dom';
const Navigation = () => (
  <nav>
    <Link to={'/'}>Home</Link>
    <Link to={'/movies'}>Movies</Link>
    <Link to={'/movies/:movieId'}></Link>
    <Link to={'/movies/:movieId/cast'}></Link>
    <Link to={'/movies/:movieId/reviews'}></Link>
  </nav>
);
export default Navigation;
