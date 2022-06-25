import axios from 'axios';
async function getCastById(movieId) {
  axios
    .get(
      `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US`
    )
    .then(response => response.data.cast);
}
export { getCastById };
