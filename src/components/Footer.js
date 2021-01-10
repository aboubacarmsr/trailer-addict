import React from 'react'
import TMDB from '../images/tmdb.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ isOpen }) => {
    return ( 
        <div className={isOpen ? "footer footer-open" : "footer"}>
            <div className="brand">
                {/* <div className="brand-logo">
                    <h3>TRAILER ADDICT</h3>
                </div> */}
                <div className="brand-name">
                    <p>
                        Designed and built by <span id="signature">@Aboubacar Mansare</span>
                    </p>
                </div>
                <div className="brand-social">
                    <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                    <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                    <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                </div>
            </div>
            <div className="copyright">
                <p>This product uses the TMDb API but is not endorsed or certified by TMDb.
                </p>
                <a href="https://www.themoviedb.org/?language=fr" target="_blank" rel="noopener noreferrer">
                    <img src={TMDB} alt=""/>
                </a>
            </div>
        </div>
     );
}
 
export default Footer;