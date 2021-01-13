import React from 'react'
import { fetchCover } from "../api/combinedAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SerieComponent = ({id, title, cover_path, rating, release, overview, popularity}) => {
    const cover = fetchCover(cover_path);
    return ( 
        <Link style={{ textDecoration: "none" }} to={{ pathname: `/serie/${id}` }}>
            <motion.div initial={{ opacity: 0, scale: 0}} animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.7 }} className="serie">
                <div className="serie-image">
                    <img src={cover} alt=""/>
                </div>
                <div className="etiquette">
                     TV
                </div> 
                <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1}}
                transition={{ delay: 0.7}}>
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
                </motion.div>
            </motion.div>
        </Link>
     );
}
 
export default SerieComponent;