const initState = {
    serie: { isLoading: true, production_companies: [], genres:[], networks:[], created_by: [], seasons: [], credits: {cast: [], crew:[]}, 
      images: {}, videos: {results: []}, similar: {results: []} },
  };
  
  const serieDetailsReducers = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_SERIE_DETAILS":
        return {
          ...state,
          serie: action.payload.serie,
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
  
  export default serieDetailsReducers;
  