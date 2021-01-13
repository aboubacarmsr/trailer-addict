import React, { useEffect } from 'react'
import SerieComponent from '../components/SerieComponent'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSerieDetails } from '../actions/serieDetailsActions'
import { addToWatchlist, removeFromWatchlist } from '../actions/combinedActions'
import { fetchCover } from '../api/combinedAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

const SerieDetails = ({isOpen, isFrench}) => {
    //Obtention de l'id passé en paramètre
    const { id } = useParams();

    //Language
    const language = isFrench ? "fr" : "";

    //Envoi de la requete
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSerieDetails(id, language));
    }, [dispatch, id, language]);

    const { serie, isLoading } = useSelector((state) => state.serieDetails);
    const { watchlist } = useSelector((state) => state.allTrends);

    //Watchlist
    //Verifier que le film existe dans la watchlist
    const checkExistence = watchlist.find(item => item.id === serie.id); 
    const serieExists = checkExistence ? true : false;

    const addToWatchListHandler = () => {
        if(serieExists){
            const newWatchlist =  watchlist.filter(item => item.id !== serie.id);
            dispatch(removeFromWatchlist(newWatchlist));
        } else {
            dispatch(addToWatchlist(serie));
        }
    }

    //INFOS
    const title = serie.name;
    const release = serie.first_air_date;
    const overview = serie.overview;
    const inProduction = serie.in_production;
    const numberOfSeasons = serie.number_of_seasons;
    const numberOfEpisodes = serie.number_of_episodes;
    const country = serie.origin_country;
    const voteCount = serie.vote_count;
    const voteAverage = serie.vote_average;
    const homepage = serie.homepage;
    const cover = fetchCover(serie.poster_path); 
    const genres = serie.genres.map((genre) => (<span key={genre.id}>{genre.name}</span>));
    const creators = serie.created_by.map(creator => <span key={creator.id}> {creator.name} </span>);
    const networks = serie.networks.map(network => <span key={network.id}> {network.name} </span>)

    //Trailer
    let videos = serie.videos.results;
    let trailers = videos.filter(video => video.type === "Trailer" && !video.key.includes("_"));
    let trailerKey = trailers.slice(0,1).map(trailer => trailer.key);
    let trailerKeyNew = trailerKey.toString();
    let ytBaseLink ="https://www.youtube.com/embed/"
    let trailerLink = `${ytBaseLink}${trailerKeyNew}`;


    //Similaires
    let similar = serie.similar.results;
    const similarSeries = similar
        .slice(0, 12)
        .map((serie) => (
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
    ));



    return ( 
        <div className={isOpen ? "serie-details serie-details-open" : "serie-details"}>
            {
                !isLoading && 
                <div className={isOpen ? "all-details all-details-open" : "all-details"}>
                    {/* <div className="backdrop">
                        <img src={backdrop} alt=""/>
                    </div> */}
                    <div className="top-details">
                        <div className="poster">
                            <img src={cover} alt=""/>
                        </div>
                        <div className="other">
                            <div className="other-top">
                                <h1> {title} </h1>
                                <h3><FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> <span className="rating">{voteAverage}</span>/ {voteCount} votes </h3>
                                <div className="genres">
                                    {genres}
                                </div>
                                <div className="buttons">
                                    <div className={serieExists ? "add-button button active" : "add-button button"} 
                                        onClick={addToWatchListHandler}>
                                        <FontAwesomeIcon icon={ serieExists ? faCheck : faPlus } className="add-icon" /> WATCH LIST
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
                                <h4> {isFrench ? "Créée par : " : "Created by : " } {creators}</h4>
                                <h4> {isFrench ? "Diffuseur : " : "Networks : "} {networks} </h4>
                                <h4> {isFrench ? "Pays d'origine : " : "Origin country : "} <span> {country} </span>  </h4>
                                <h4> {isFrench ? "Date de sortie : " : "Release Date : "} <span>{release}</span> </h4>
                                <h4> {isFrench ? "Saisons : " : "Seasons : "} <span>{numberOfSeasons}</span> </h4>
                                <h4> {isFrench ? "Episodes : " : "Episodes : "} <span>{numberOfEpisodes}</span> </h4>
                                {
                                    inProduction &&
                                    <h4 style={{ color: "#ef233c" }}> {isFrench ? "En cours de production" : "In production"}</h4>
                                }
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
                                    {similarSeries}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
     );
}
 
export default SerieDetails;