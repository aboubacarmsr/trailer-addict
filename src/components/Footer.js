import React from 'react'
import TMDB from '../images/tmdb.svg';

const Footer = ({ isOpen }) => {
    return ( 
        <div className={isOpen ? "footer footer-open" : "footer"}>
            <div className="brand">
                <div className="brand-name">
                    <p>
                        Designed and built by <span id="signature">@Aboubacar Mansare</span>
                    </p>
                    <p>
                        Any feedback ? Want to talk ? Send me an <span><a href = "mailto: aboubacarmsr@gmail.com">email</a></span> or add me on 
                        <span> <a href="https://www.facebook.com/aboubacarmsr" target="_blank" rel="noopener noreferrer"> Facebook </a> </span> !
                    </p>
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