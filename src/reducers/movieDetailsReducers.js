const initState = {
    movie: { isLoading: true, budget: 0, revenue: 0, production_countries: [], genres: [], credits: {cast: [], crew:[]}, 
      images: {}, videos: {results: []}, similar: {results: []} },
  };
  
  const movieDetailsReducers = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_MOVIE_DETAILS":
        return {
          ...state,
          movie: action.payload.movie,
          isLoading: false,
        };
      case "LOADING_DETAILS":
        return {
          ...state,
          isLoading: true,
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  export default movieDetailsReducers;
  