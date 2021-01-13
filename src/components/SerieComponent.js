import React from 'react'
import { fetchCover } from "../api/combinedAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SerieComponent = ({id, title, cover_path, rating, release, overview, popularity}) => {
    const cover = fetchCover(cover_path);
    return ( 
        <Link style={{ textDecoration: "none" }} to={{ pathname: `/serie/${id}` }}>
            <div className="serie">
                <div className="serie-image">
                    <img src={cover} alt=""/>
                </div>
                <div className="etiquette">
                     TV
                </div> 
                <div className="overlay">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <div className="subtitle">
                    <h4> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }}/> {rating} </h4>
                    <h5> {release ? release.substring(0,4) : ""} </h5>
                    </div>
                    <div className="overview">
                        <p> {overview} </p>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default SerieComponent;