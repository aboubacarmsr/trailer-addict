const initState = {
    popularSeries: [],
    newSeries: [],
    upcomingSeries: [],
    topRatedSeries: [],
    numOfPages: ""
}

const serieReducers = (state = initState, action) => {
    switch(action.type){
        case "FETCH_POPULAR_SERIES":
            return {
                ...state,
                popularSeries: action.payload.popularSeries,
                numOfPages: action.payload.numOfPages
            }   
        case "FETCH_NEW_SERIES":
            return {
                ...state,
                newSeries: action.payload.newSeries,
                numOfPages: action.payload.numOfPages
            }   
        case "FETCH_UPCOMING_SERIES":
            return {
                ...state,
                upcomingSeries: action.payload.upcomingSeries,
                numOfPages: action.payload.numOfPages
            }   
        case "FETCH_TOP_RATED_SERIES":
            return {
                ...state,
                topRatedSeries: action.payload.topRatedSeries,
                numOfPages: action.payload.numOfPages
            }   
        default:   
            return {
                ...state
            }
    }
}

export default serieReducers;