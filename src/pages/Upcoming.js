import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUpcomingMovies } from '../actions/movieActions'
import MovieComponent from '../components/MovieComponent'

const Upcoming = ({ isFrench, isOpen }) => {
    const dispatch = useDispatch();
    const language = isFrench ? "fr" : "";
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchUpcomingMovies(language, page));
    }, [dispatch, language, page])

    const { upcomingMovies } = useSelector((state) => state.movies);

    const printUpcomingMovies = upcomingMovies.map((movie) => 
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

    return ( 
        <div className={isOpen ? "upcoming upcoming-open" : "upcoming"}>
            <div className="upcoming-movies">
                <div className="movies-title">
                    <h1> {isFrench ? "Les films les plus attendus" : "Most anticipated movies"} </h1>
                </div>
                <div className="upcoming-movies-list">
                    {printUpcomingMovies}
                </div>
            </div>
        </div>
     );
}
 
export default Upcoming;