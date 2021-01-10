import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ isFrench, toSearch, setToSearch }) => {
    const history = useHistory();
    const [input, setInput] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        setToSearch(input);
        setInput("");
        history.push('/search');
    }

    return ( 
        <form className="search" onSubmit={searchHandler}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={searchHandler}/>
            <input type="text" placeholder={ isFrench ? "Chercher ..." : "Search ..." } 
                value={input} onChange={inputHandler} />
        </form>
     );
}
 
export default Search;