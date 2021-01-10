import axios from "axios";
import { popularMoviesURL, newMoviesURL, upcomingMoviesURL, topRatedMoviesURL } from '../api/movieAPI';

export const fetchPopularMovies = (language, page, genres) => async (dispatch) => {
    const popularMovies = await axios.get(popularMoviesURL(language, page, genres));
    dispatch({
        type: "FETCH_POPULAR_MOVIES",
        payload: {
            popularMovies: popularMovies.data.results,
            numOfPages: popularMovies.data.total_pages
        } 
    })
}

export const fetchNewMovies = (language, page) => async (dispatch) => {
    const newMovies = await axios.get(newMoviesURL(language, page));
    dispatch({
        type: "FETCH_NEW_MOVIES",
        payload: {
            newMovies: newMovies.data.results,
            numOfPages: newMovies.data.total_pages
        } 
    })
}

export const fetchUpcomingMovies = (language, page) => async (dispatch) => {
    const upcomingMovies = await axios.get(upcomingMoviesURL(language, page));
    dispatch({
        type:"FETCH_UPCOMING_MOVIES",
        payload: {
            upcomingMovies: upcomingMovies.data.results,
            numOfPages: upcomingMovies.data.total_pages
        }
    })
}

export const fetchTopRatedMovies = (language, page) => async (dispatch) => {
    const topRatedMovies = await axios.get(topRatedMoviesURL(language, page));
    dispatch({
        type: "FETCH_TOP_RATED_MOVIES",
        payload: {
            topRatedMovies: topRatedMovies.data.results,
            numOfPages: topRatedMovies.data.total_pages
        }
    })
}
