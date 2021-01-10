import axios from 'axios';
import { dailyTrendingsURL, weeklyTrendingsURL, netflixOriginalsURL, amazonOriginalsURL, searchAll } from '../api/combinedAPI';

export const fetchTrendings = (language) => async (dispatch) => {
    const trendingsDaily = await axios.get(dailyTrendingsURL(language));
    const trendingsWeekly = await axios.get(weeklyTrendingsURL(language));
    const netflixOriginals = await axios.get(netflixOriginalsURL(language));
    const amazonOriginals = await axios.get(amazonOriginalsURL(language));

    dispatch({
        type: "FETCH_TRENDINGS",
        payload: {
            trendingsDaily: trendingsDaily.data.results,
            trendingsWeekly: trendingsWeekly.data.results,
            netflixOriginals: netflixOriginals.data.results,
            amazonOriginals: amazonOriginals.data.results,
        }
    })
}

export const searchSomething = (name, language, page) => async (dispatch) => {
    const searched = await axios.get(searchAll(name, language, page));

    dispatch({
        type: "SEARCH_SOMETHING",
        payload: {
            searched: searched.data.results,
            numOfPages: searched.data.total_pages,
            numOfResults: searched.data.total_results
        }
    })
}
