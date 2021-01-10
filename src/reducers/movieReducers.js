const initState = {
  popularMovies: [],
  newMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  numOfPages: 0
};

const movieReducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        numOfPages: action.payload.numOfPages,
      };
    case "FETCH_NEW_MOVIES":
      return {
        ...state,
        newMovies: action.payload.newMovies,
        numOfPages: action.payload.numOfPages,
      };
    case "FETCH_UPCOMING_MOVIES":
      return {
        ...state,
        upcomingMovies: action.payload.upcomingMovies,
        numOfPages: action.payload.numOfPages,
      }
    case "FETCH_TOP_RATED_MOVIES":
      return {
        ...state,
        topRatedMovies: action.payload.topRatedMovies,
        numOfPages: action.payload.numOfPages,
      }
    default:
      return {
        ...state,
      };
  }
};

export default movieReducers;
