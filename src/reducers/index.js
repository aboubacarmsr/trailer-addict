import { combineReducers } from "redux";
import combinedReducers from './combinedReducers';
import movieReducers from './movieReducers';
import serieReducers from './serieReducers';
import movieDetailsReducers from './movieDetailsReducers';
import serieDetailsReducers from './serieDetailsReducers';

const rootReducer = combineReducers({
    allTrends: combinedReducers, 
    movies: movieReducers,
    series: serieReducers,
    movieDetails: movieDetailsReducers,
    serieDetails: serieDetailsReducers
})

export default rootReducer;