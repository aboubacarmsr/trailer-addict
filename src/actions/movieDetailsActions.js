import axios from 'axios'
import { movieDetailsURL } from '../api/movieAPI'

export const fetchMovieDetails = (movie_id, language) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAILS",
    });
    const movieDetails = await axios.get(movieDetailsURL(movie_id, language));
    dispatch({
        type: "FETCH_MOVIE_DETAILS",
        payload: {
            movie: movieDetails.data
        }
    })
}