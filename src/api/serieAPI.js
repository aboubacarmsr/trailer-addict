//Base URL
const base_url = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

//Popular Movies
const popular_series = `discover/tv?api_key=${API_KEY}`;
const new_series = `discover/tv?now_playing&api_key=${API_KEY}`;
const upcoming_series = `discover/tv?primary_release_date.gte=${currentDate}&sort_by=popularity.desc&api_key=${API_KEY}`;
const top_rated_series = `tv/top_rated?api_key=${API_KEY}`;

export const popularSeriesURL = (language = "en", page = 1, genres = "") =>
  `${base_url}${popular_series}&language=${language}&page=${page}&with_genres=${genres}&sort_by=popularity.desc`;
export const newSeriesURL = (language = "en", page = 1) =>
  `${base_url}${new_series}&language=${language}&page=${page}`;
export const upcomingSeriesURL = (language = "en", page = 1) =>
  `${base_url}${upcoming_series}&language=${language}&page=${page}`;
export const topRatedSeriesURL = (language = "en", page = 1) =>
  `${base_url}${top_rated_series}&language=${language}&page=${page}`;

//Serie DETAILS
export const serieDetailsURL = (serie_id, language = "en") =>
  `${base_url}tv/${serie_id}?api_key=${API_KEY}&append_to_response=videos,images,credits,similar&language=${language}`;

//Searched movie
export const searchSerieURL = (serie_name) =>
  `${base_url}tv?api_key=${API_KEY}&query=${serie_name}`;
