import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatedMovies } from '../actions/movieActions'
import { fetchTopRatedSeries } from '../actions/serieActions'
import MovieComponent from '../components/MovieComponent'
import SerieComponent from '../components/SerieComponent'

const TopRated = ({ isFrench, isOpen }) => {
    const language = isFrench ? "fr" : "";
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopRatedMovies(language, page));
        dispatch(fetchTopRatedSeries(language, page));
    }, [dispatch, language, page])

    const { topRatedMovies } = useSelector((state) => state.movies);
    const { topRatedSeries } = useSelector((state) => state.series);

    const printTopMovies = topRatedMovies.map((movie) => 
        <MovieComponent
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          release={movie.release_date}
          overview={movie.overview}
          cover_path={movie.poster_path}
          popularity={movie.popularity}
        />)

    const printTopSeries = topRatedSeries.map((serie) => 
        <SerieComponent
            key={serie.id}
            id={serie.id}
            title={serie.name}
            rating={serie.vote_average}
            release={serie.first_air_date}
            overview={serie.overview}
            cover_path={serie.poster_path}
            popularity={serie.popularity}
        />)

    return ( 
        <div className={isOpen ? "top-rated top-rated-open" : "top-rated"}>
            <div className="top-movies">
                <div className="movies-title">
                    <h1> {isFrench ? "Les films les mieux notés" : "Top rated movies"} </h1>
                </div>
                <div className="top-movies-list">
                    {printTopMovies}
                </div>
            </div>
            <div className="top-series">
                <div className="series-title">
                    <h1> {isFrench ? "Les séries les mieux notées" : "Top rated series"} </h1>
                </div>
                <div className="top-series-list">
                    {printTopSeries}
                </div>
            </div>
        </div>
     );
}
 
export default TopRated;