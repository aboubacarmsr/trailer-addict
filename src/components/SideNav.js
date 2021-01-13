import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faVideo, faGlobeAfrica, faFireAlt, faStar, faClock, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";

const SideNav = ({ isOpen }) => {

  const { watchlist } = useSelector(state => state.allTrends);

  return ( 
    <nav className={isOpen ? "side-nav side-nav-open" : "side-nav"}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "#f1faee" }}>
          <h3>TRAILER ADDICT</h3>
        </Link>
      </div>
      <div className="container-wrapper">
      <div className="classeur classeur-1">
        <h4>CATEGORIES</h4>
        <ul>
          <li><NavLink className="navlink" to={`/movies`} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
              <FontAwesomeIcon icon={faFilm} style={{marginRight : "1em"}}/>Films</NavLink></li>
          <li><NavLink className="navlink" to="/series" activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
            <FontAwesomeIcon icon={faVideo} style={{marginRight : "1em"}}/>Series</NavLink></li>
        </ul>
      </div>
      <div className="classeur classeur-2">
        <h4>EXPLORER</h4>
        <ul>
          <li><NavLink className="navlink" exact to="/" activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faGlobeAfrica} style={{marginRight : "1em"}}/>Découvrir</NavLink></li>
          <li><NavLink className="navlink" to="/new" activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faFireAlt} style={{marginRight : "1em"}}/>En ce moment</NavLink></li>
          <li><NavLink className="navlink" to="/toprated" activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faStar} style={{marginRight : "1em"}}/>Les mieux notés</NavLink></li>
          <li><NavLink className="navlink" to="/upcoming" activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faClock} style={{marginRight : "1em"}}/>A venir</NavLink></li>
        </ul>
      </div>
      <div className="classeur classeur-3">
        <h4>BIBLIOTHEQUE</h4>
        <ul>
          <li>
            <NavLink className="navlink" to="/watchlist" activeStyle={{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
              <FontAwesomeIcon icon={faHeart} style={{marginRight : "1em", color: "#482ff7"}}/>Watch List  <span> {"("}{watchlist.length}{")"} </span>  </NavLink></li>
          <li><NavLink className="navlink" to="/recommandation" activeStyle={{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faBookmark} style={{marginRight : "1em"}}/>Recommandations</NavLink></li>
        </ul>
      </div> 
      </div>
    </nav>
  );
};

export default SideNav;
