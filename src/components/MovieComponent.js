import React from 'react'
import { fetchCover } from "../api/combinedAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MovieComponent = ({ id, title, rating, release, overview, cover_path}) => {
    const cover = fetchCover(cover_path);
    return ( 
        <Link style={{ textDecoration: "none" }} to={{ pathname: `/movie/${id}` }}>
            <div className="movie">
                <div className="movie-image">
                    <img src={cover} alt=""/>
                </div> 
                <div className="overlay">
                    <div className="title">
                        <h3> {title} </h3>
                    </div>
                    <div className="subtitle">
                        <h4> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }}/> {rating} </h4>
                        <h5> {release ? release.substring(0, 4) : "" } </h5>
                    </div>
                    <div className="overview">
                        <p> {overview} </p>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default MovieComponent;