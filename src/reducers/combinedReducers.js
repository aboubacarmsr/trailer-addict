const initState = {
    trendingsToday: [],
    trendingsThisWeek: [],
    netflixOriginals: [],
    amazonOriginals: [],
    searched: [],
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
}

const combinedReducers = ( state = initState, action ) => {
    switch(action.type){
        case "FETCH_TRENDINGS":
            return {
                ...state,
                trendingsToday: action.payload.trendingsDaily,
                trendingsThisWeek: action.payload.trendingsWeekly,
                netflixOriginals: action.payload.netflixOriginals,
                amazonOriginals: action.payload.amazonOriginals,
            }
        case "SEARCH_SOMETHING": 
            return {
                ...state,
                searched: action.payload.searched,
                numOfPages: action.payload.numOfPages,
                numOfResults: action.payload.numOfResults
            }
        case "ADD_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload.movie],
            }
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: action.payload.watchlist
            }
        default:
            return {
                ...state
            }
    }
}

export default combinedReducers;