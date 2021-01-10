import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewMovies } from '../actions/movieActions'
import { fetchNewSeries } from '../actions/serieActions'
import MovieComponent from '../components/MovieComponent'
import SerieComponent from '../components/SerieComponent'

const Newest = ({ isFrench, isOpen }) => {
    const dispatch = useDispatch();
    const language = isFrench ? "fr" : "";
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchNewMovies(language, page));
        dispatch(fetchNewSeries(language, page));
    }, [dispatch, language, page])

    const { newMovies } = useSelector((state) => state.movies);
    const { newSeries } = useSelector((state) => state.series);

    const printNewMovies = newMovies.map(movie => 
        <MovieComponent
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          release={movie.release_date}
          overview={movie.overview}
          cover_path={movie.poster_path}
          popularity={movie.popularity}
        />
    )

    const printNewSeries = newSeries.map(serie => 
        <SerieComponent
          key={serie.id}
          id={serie.id}
          title={serie.name}
          rating={serie.vote_average}
          release={serie.first_air_date}
          overview={serie.overview}
          cover_path={serie.poster_path}
          popularity={serie.popularity}
        />
    )

    return ( 
        <div className={isOpen ? "newest newest-open" : "newest"}>
            <div className="new-movies">
                <div className="movies-title">
                    <h1> {isFrench ? "Au cinéma en ce moment" : "In theathers now"} </h1>
                </div>
                <div className="new-movies-list">
                    {printNewMovies}
                </div>
            </div>
            <div className="new-series">
                <div className="series-title">
                    <h1> {isFrench ? "A la télé en ce moment" : "On air right now"} </h1>
                </div>
                <div className="new-series-list">
                    {printNewSeries}
                </div>
            </div>
        </div>
     );
}
 
export default Newest;