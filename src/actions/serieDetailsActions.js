import axios from 'axios';
import { serieDetailsURL } from '../api/serieAPI';

export const fetchSerieDetails = (serie_id, language) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAILS",
    });
    const serieDetails = await axios.get(serieDetailsURL(serie_id, language));
    dispatch({
        type: "FETCH_SERIE_DETAILS",
        payload: {
            serie: serieDetails.data
        }
    })
}