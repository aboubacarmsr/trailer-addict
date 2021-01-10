import React from 'react'
import { fetchCover } from "../api/combinedAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MovieComponent = ({ id, title, rating, release, overview, cover_path}) => {
    const cover = fetchCover(cover_path);
    return ( 
        <Link style={{ textDecoration: "none" }} to={{ pathname: `/movie/${id}` }}>
            <motion.div initial={{ opacity: 0, scale: 0}} animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.7 }} className="movie">
                <div className="movie-image">
                    <img src={cover} alt=""/>
                </div> 
                <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1}}
                transition={{ delay: 0.7}}>
                    <div className="title">
                        <h3> {title} </h3>
                    </div>
                    <div className="subtitle">
                        <h4> <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }}/> {rating} </h4>
                        <h5> {release} </h5>
                        {/* <FontAwesomeIcon icon={faHeart} className="heart"/> */}
                    </div>
                    <div className="overview">
                        <p> {overview} </p>
                    </div>
                </motion.div>
            </motion.div>
        </Link>
     );
}
 
export default MovieComponent;