import axios from "axios";
import { popularSeriesURL, newSeriesURL, upcomingSeriesURL, topRatedSeriesURL } from "../api/serieAPI";

export const fetchPopularSeries = (language, page, genres) => async (dispatch) => {
    const popularSeries = await axios.get(popularSeriesURL(language, page, genres));
    dispatch({
        type: "FETCH_POPULAR_SERIES",
        payload: {
            popularSeries: popularSeries.data.results,
            numOfPages: popularSeries.data.total_pages
        }
    })
}

export const fetchNewSeries = (language, page) => async (dispatch) => {
    const newSeries = await axios.get(newSeriesURL(language, page));
    dispatch({
        type: "FETCH_NEW_SERIES",
        payload: {
            newSeries: newSeries.data.results,
            numOfPages: newSeries.data.total_pages
        }
    })
}

export const fetchUpcomingSeries = (language, page) => async (dispatch) => {
    const upcomingSeries = await axios.get(upcomingSeriesURL(language, page));
    dispatch({
        type: "FETCH_UPCOMING_SERIES",
        payload: {
            upcomingSeries: upcomingSeries.data.results,
            numOfPages: upcomingSeries.data.total_pages
        }
    })
}

export const fetchTopRatedSeries = (language, page) => async (dispatch) => {
    const topRatedSeries = await axios.get(topRatedSeriesURL(language, page));
    dispatch({
        type: "FETCH_TOP_RATED_SERIES",
        payload: {
            topRatedSeries: topRatedSeries.data.results,
            numOfPages: topRatedSeries.data.total_pages
        }
    })
}