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
// const currentDateLastMonth = `${currentYear}-${currentMonth - 2}-${currentDay}`;

//Popular Movies
const popular_movies = `discover/movie?api_key=${API_KEY}`;
const new_movies = `movie/now_playing?api_key=${API_KEY}`;
const upcoming_movies = `discover/movie?primary_release_date.gte=${currentDate}&sort_by=popularity.desc&api_key=${API_KEY}`;
const top_rated_movies = `movie/top_rated?api_key=${API_KEY}`;

export const popularMoviesURL = (language = "en", page = 1, genres = "") =>
  `${base_url}${popular_movies}&language=${language}&with_genres=${genres}&page=${page}&sort_by=popularity.desc`;
export const newMoviesURL = (language = "en", page = 1) =>
  `${base_url}${new_movies}&language=${language}&page=${page}`;
export const upcomingMoviesURL = (language = "en", page = 1) =>
  `${base_url}${upcoming_movies}&language=${language}&page=${page}`;
export const topRatedMoviesURL = (language = "en", page = 1) =>
  `${base_url}${top_rated_movies}&language=${language}&page=${page}`;

//Movie DETAILS
export const movieDetailsURL = (movie_id, language = "en") =>
  `${base_url}movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images,credits,similar&language=${language}`;

//Searched movie
export const searchMovieURL = (movie_name) =>
  `${base_url}movie?api_key=${API_KEY}&query=${movie_name}`;
