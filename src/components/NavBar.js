import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Search from './Search';

const NavBar = ({isFrench, setIsFrench, isOpen, setIsOpen, toSearch, setToSearch}) => {
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    return ( 
        <nav className={ isOpen ? "navbar navbar-open" : "navbar"}>
                <div className="navbar-logo hidden">
                    <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                        <h3>TRAILER ADDICT</h3>
                    </Link>
                </div>
                <div className={searchBarOpen ? "search-bar search-bar-open" : "search-bar search-bar-close"}>
                    <Search isFrench={isFrench} toSearch={toSearch} 
                        setToSearch={setToSearch} className="search-bar-component" />
                </div>
            <div className="rightNav">
                <ul>
                        <li onClick={() => setIsFrench(!isFrench)}> 
                            <span className={isFrench ? "notSelected" : "selected"}>EN/</span>
                            <span className={isFrench ? "selected" : "notSelected"}>FR</span> 
                        </li>
                        <li onClick={() => setSearchBarOpen(!searchBarOpen)} className="search-logo">
                            <FontAwesomeIcon icon={ searchBarOpen ? faTimes : faSearch} style={{ fontSize : "1.2em" }} />
                        </li>
                        <li 
                            onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon className="bars" icon={faBars} 
                            style={{ fontSize : "1.2em" }} />
                        </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;