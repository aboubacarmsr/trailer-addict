import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faVideo, faGlobeAfrica, faFireAlt, faStar, faClock, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";

const SideNavEnglish = ({ isOpen, setIsOpen, isMobile }) => {

  const { watchlist } = useSelector(state => state.allTrends);

  const hideSideNav = () => {
    if(isMobile){
      setIsOpen(false);
    }
  }

  return (
    <nav className={isOpen ? "side-nav side-nav-open" : "side-nav"}>
      <div className="logo">
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <h3>TRAILER ADDICT</h3>
      </Link>
      </div>
      <div className="container-wrapper">
      <div className="classeur classeur-1">
        <h4>CATEGORIES</h4>
        <ul>
          <li><NavLink className="navlink" to="/movies" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
              <FontAwesomeIcon icon={faFilm} style={{marginRight : "1em"}}/>Movies</NavLink></li>
          <li><NavLink className="navlink" to="/series" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
            <FontAwesomeIcon icon={faVideo} style={{marginRight : "1em"}}/>Tv Shows</NavLink></li>
        </ul>
      </div>
      <div className="classeur classeur-2">
        <h4>EXPLORE</h4>
        <ul>
          <li><NavLink className="navlink" exact to="/" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faGlobeAfrica} style={{marginRight : "1em"}}/>Discover</NavLink></li>
          <li><NavLink className="navlink" to="/new" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faFireAlt} style={{marginRight : "1em"}}/>Latest</NavLink></li>
          <li><NavLink className="navlink" to="/toprated" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faStar} style={{marginRight : "1em"}}/>Top Rated</NavLink></li>
          <li><NavLink className="navlink" to="/upcoming" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faClock} style={{marginRight : "1em"}}/>Upcoming</NavLink></li>
        </ul>
      </div>
      <div className="classeur classeur-3">
        <h4>LIBRARY</h4>
        <ul>
          <li><NavLink className="navlink" to="/watchlist" onClick={hideSideNav} activeStyle= {{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faHeart} style={{color : "#482ff7", marginRight : "1em"}}/>Watch List <span> {"("}{watchlist.length}{")"} </span></NavLink></li>
          <li><NavLink className="navlink" to="/recommandation" onClick={hideSideNav} activeStyle={{ borderLeft: "4px solid #482ff7", backgroundColor : "rgba(255, 255, 255, 0.055)", color: "#fff" }}>
          <FontAwesomeIcon icon={faBookmark} style={{marginRight : "1em"}}/>Recommandations</NavLink></li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default SideNavEnglish;
