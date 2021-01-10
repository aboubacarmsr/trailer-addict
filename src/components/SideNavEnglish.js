import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faVideo, faGlobeAfrica, faFireAlt, faStar, faClock, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";

const SideNavEnglish = ({isOpen}) => {
  return (
    <nav className={isOpen ? "side-nav side-nav-open" : "side-nav"}>
      <div className="logo">
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <h3>TRAILER ADDICT</h3>
      </Link>
      </div>
      <div className="container-wrapper">
      <div className="classeur classeur-1">
        <ul>
          <li><NavLink className="navlink" to="/movies" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
              <FontAwesomeIcon icon={faFilm} style={{marginRight : "1em"}}/>Movies</NavLink></li>
          <li><NavLink className="navlink" to="/series" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
            <FontAwesomeIcon icon={faVideo} style={{marginRight : "1em"}}/>Tv Shows</NavLink></li>
        </ul>
      </div>
      <div className="classeur classeur-2">
        <ul>
          <li><NavLink className="navlink" exact to="/" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
          <FontAwesomeIcon icon={faGlobeAfrica} style={{marginRight : "1em"}}/>Discover</NavLink></li>
          <li><NavLink className="navlink" to="/new" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
          <FontAwesomeIcon icon={faFireAlt} style={{marginRight : "1em"}}/>Latest</NavLink></li>
          <li><NavLink className="navlink" to="/toprated" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
          <FontAwesomeIcon icon={faStar} style={{marginRight : "1em"}}/>Top Rated</NavLink></li>
          <li><NavLink className="navlink" to="/upcoming" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
          <FontAwesomeIcon icon={faClock} style={{marginRight : "1em"}}/>Upcoming</NavLink></li>
        </ul>
      </div>
      <div className="classeur classeur-3">
        <ul>
          <li><NavLink className="navlink" to="/recommandation" activeStyle={{ backgroundColor: "#d90429", color: "#fff" }}>
          <FontAwesomeIcon icon={faBookmark} style={{marginRight : "1em"}}/>Recommandations</NavLink></li>
          <li><NavLink className="navlink" to="/watchlist" activeStyle= {{ backgroundColor : "#d90429", color: "#fff" }}>
          <FontAwesomeIcon icon={faHeart} style={{marginRight : "1em"}}/>Watch List</NavLink></li>
        </ul>
      </div>
      {/* <div className="classeur classeur-4">
        <ul>
          <li> <FontAwesomeIcon style={{ fontSize: "1.2em"}} icon={faFacebook}/></li>
          <li> <FontAwesomeIcon style={{ fontSize: "1.2em"}} icon={faInstagram}/></li>
          <li> <FontAwesomeIcon style={{ fontSize: "1.2em"}} icon={faTwitter}/></li>
        </ul>
      </div> */}
      </div>
    </nav>
  );
};

export default SideNavEnglish;
