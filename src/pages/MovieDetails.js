import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { fetchMovieDetails } from '../actions/movieDetailsActions'
import { addToWatchlist, removeFromWatchlist } from '../actions/combinedActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faPlay, faCheck } from '@fortawesome/free-solid-svg-icons'
import { fetchCover } from '../api/combinedAPI'
import MovieComponent from '../components/MovieComponent'
import Meta from '../components/Meta'

const MovieDetails = ({ isOpen, isFrench }) => {
    //Obtention de l'id passé en paramètre 
    const { id } = useParams();

    //Language
    const language = isFrench ? "fr" : "";

    //Fetch les détails
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovieDetails(id, language))
    }, [dispatch, id, language]);

    //Recuperer les détails
    const { movie, isLoading} = useSelector((state) => state.movieDetails);
    const { watchlist } = useSelector((state) => state.allTrends);

    //Watchlist
    //Verifier que le film existe dans la watchlist
    const movieExists = watchlist.find(item => item.id === movie.id); 

    const addToWatchListHandler = () => {
        if(movieExists){
            const newWatchlist =  watchlist.filter(item => item.id !== movie.id);
            dispatch(removeFromWatchlist(newWatchlist));
        } else {
            dispatch(addToWatchlist(movie));
        }
    }

    //Realisateur
    const crewList = movie.credits.crew;
    const filterList = crewList.filter(
        (crewMember) => crewMember.job === "Director"
    );
    const directors = filterList.map((element) => (
        <span key={element.id}>{element.name}</span>
    ));

    //Acteurs
    const castList = movie.credits.cast;
    const actors = castList
        .slice(0, 3)
        .map((actor) => <span key={actor.id}>{actor.name}</span>);

    //Pays
    const countryList = movie.production_countries;
    const countries = countryList.map((country) => (
        <span key={country.id}>{country.name}</span>
    ));

    //Genres
    const genres = movie.genres.map((genre) => (<span key={genre.id}>{genre.name}</span>));

    //Autres
    const title = movie.title;
    const release = movie.release_date;
    const overview = movie.overview;
    const budget = movie.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const boxoffice = movie.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const voteCount = movie.vote_count;
    const voteAverage = movie.vote_average;
    const cover = fetchCover(movie.poster_path);
    const homepage = movie.homepage;

    //Durée
    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        return `${h}h${m}mn`;
    }

    let runtimeConverted = convertMinsToHrsMins(movie.runtime);

    //Trailer
    let videos = movie.videos.results;
    let trailers = videos.filter(video => video.type === "Trailer" && !video.key.includes("_"));
    let trailerKey = trailers.slice(0,1).map(trailer => trailer.key);
    let trailerKeyNew = trailerKey.toString();
    let ytBaseLink ="https://www.youtube.com/embed/"
    let trailerLink = `${ytBaseLink}${trailerKeyNew}`;

    //Similaires
    let similar = movie.similar.results;
    const similarMovies = similar
        .slice(0, 12)
        .map((movie) => (
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
    ));

    return ( 
        <div className={isOpen ? "movie-details movie-details-open" : "movie-details"}>
            {
                !isLoading && 
                <div className={isOpen ? "all-details all-details-open" : "all-details"}>
                    <Meta title={title} />
                    <div className="top-details">
                        <div className="poster">
                            <img src={cover} alt=""/>
                        </div>
                        <div className="other">
                            <div className="other-top">
                                <h1> {title} </h1>
                                <h3><FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> 
                                <span className="rating">{voteAverage}</span>/ {voteCount} votes </h3>
                                <div className="genres">
                                    {genres}
                                </div>
                                <div className="buttons">
                                    <div className={movieExists ? "add-button button active" : "add-button button"} 
                                        onClick={addToWatchListHandler}>
                                        <FontAwesomeIcon icon={ movieExists ? faCheck : faPlus } className="add-icon" /> WATCH LIST
                                    </div>
                                    {
                                        homepage &&
                                        <a href={homepage} target="_blank" rel="noopener noreferrer">
                                            <div className="play-button button">
                                                <FontAwesomeIcon icon={faPlay} className="play-icon" />
                                                {isFrench ? "REGARDER" : "WATCH"}
                                            </div>
                                        </a>
                                    }
                                </div>
                            </div>
                            <div className="other-bottom">
                                <h4> {isFrench ? "Réalisateur(s) : " : "Director(s) : " } {directors}</h4>
                                <h4> {isFrench ? "Avec : " : "With : "} {actors} </h4>
                                <h4> {isFrench ? "Pays d'origine : " : "Production countries : "} {countries} </h4>
                                <h4> {isFrench ? "Date de sortie : " : "Release Date : "} <span>{release}</span> </h4>
                                <h4> {isFrench ? "Budget : " : "Budget : "} <span>{budget}</span> </h4>
                                <h4> {isFrench ? "Box Office : " : "Box Office : "} <span>{boxoffice}</span> </h4>
                                <h4> {isFrench ? "Durée : " : "Duration : "} <span>{runtimeConverted}</span> </h4>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-details">
                        {
                            overview &&
                            <div className="details-overview">
                                <h3> {isFrench ? "Resumé" : "Plot"} </h3>
                                <p> {overview} </p>
                            </div>
                        }
                        {
                            trailerKeyNew.length > 0 &&
                            <div className="trailer">
                                <h3> { isFrench ? "Bande annonce" : "Trailer"} </h3>
                                <iframe title="youtube player" frameBorder="0" width="420" height="315" 
                                    allowFullScreen="allowfullscreen"src={trailerLink}>
                                </iframe>
                            </div>
                        }
                        {
                            similar.length > 0 &&
                            <div className="similar">
                                <h3 className="similar-title">{isFrench ? "Vous aimerez peut-être" : "You may also like" }</h3>
                                <div className="similarList">
                                    {similarMovies}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
     );
}
 
export default MovieDetails;