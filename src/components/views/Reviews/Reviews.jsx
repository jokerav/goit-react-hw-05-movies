import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const getMovie = movieId => {
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US&page=1`
      )
      .then(response => setReviews(response.data.results));
  };
  useEffect(() => getMovie(movieId), [movieId]);
  console.log(reviews);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
