import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from '../../services/moviesApi';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  useEffect(() => {
    getCast(movieId).then(cast => setCast(cast));
  }, [movieId]);

  return (
    <>
      {casts.length > 0 ? (
        <ul>
          {casts.map(({ cast_id, original_name }) => (
            <li key={cast_id}>{original_name}</li>
          ))}
        </ul>
      ) : (
        <p>Актеры не найдены...</p>
      )}
    </>
  );
};
export default Cast;
