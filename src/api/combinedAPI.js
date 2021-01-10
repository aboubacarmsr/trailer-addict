const base_url = "https://api.themoviedb.org/3/";
const image_url = "https://image.tmdb.org/t/p/w500";
const API_KEY = process.env.REACT_APP_API_KEY;
const backdrop_url = "https://image.tmdb.org/t/p/w1280";

const trendingsDaily = `trending/all/day?api_key=${API_KEY}`;
const trendingsWeekly = `trending/all/week?api_key=${API_KEY}`;
const netflixOriginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
const amazonOriginals = `discover/tv?api_key=${API_KEY}&with_networks=1024`;
const hboOriginals = `discover/tv?api_key=${API_KEY}&with_networks=49`;

export const dailyTrendingsURL = (language) =>
  `${base_url}${trendingsDaily}&language=${language}`;
export const weeklyTrendingsURL = (language) =>
  `${base_url}${trendingsWeekly}&language=${language}`;
export const netflixOriginalsURL = (language) =>
  `${base_url}${netflixOriginals}&language=${language}`;
export const amazonOriginalsURL = (language) =>
  `${base_url}${amazonOriginals}&language=${language}`;
export const hboOriginalsURL = (language) =>
  `${base_url}${hboOriginals}&language=${language}`;

export const fetchCover = (poster_path) => `${image_url}${poster_path}`;
export const fetchBackdrop = (backdrop_path) =>
  `${backdrop_url}${backdrop_path}`;

export const searchAll = (name, language = "", page = 1) =>
  `${base_url}search/multi?api_key=${API_KEY}&language=${language}&query=${name}&page=${page}&include_adult=false`;
