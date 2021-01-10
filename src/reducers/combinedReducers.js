const initState = {
    trendingsToday: [],
    trendingsThisWeek: [],
    netflixOriginals: [],
    amazonOriginals: [],
    searched: [],
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
        default:
            return {
                ...state
            }
    }
}

export default combinedReducers;