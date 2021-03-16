import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchSomething } from '../actions/combinedActions';
import MovieComponent from '../components/MovieComponent'
import SerieComponent from '../components/SerieComponent'
import ReactPaginate from "react-paginate";
import Meta from '../components/Meta';

const SearchPage = ({ isOpen, isFrench, toSearch }) => {

    const dispatch = useDispatch();
    const language = isFrench ? "fr" : "";
    const [page, setPage] = useState(1);

    useEffect(() => {
      dispatch(searchSomething(toSearch, language, page))
    }, [dispatch, toSearch, page, language])

    const { searched, numOfPages } = useSelector((state) => state.allTrends);

    const printSearched = searched.map((item) => {
        if (item.media_type === "movie") {
          return (
            <MovieComponent
              key={item.id}
              id={item.id}
              title={item.title}
              rating={item.vote_average}
              release={item.release_date}
              overview={item.overview}
              cover_path={item.poster_path}
              popularity={item.popularity}
            />
          );
        } else if(item.media_type === "tv") {
          return (
            <SerieComponent
              key={item.id}
              id={item.id}
              title={item.name}
              rating={item.vote_average}
              release={item.first_air_date}
              overview={item.overview}
              cover_path={item.poster_path}
              popularity={item.popularity}
            />
          );
        }
      });

    //Changer de page
    const handlePageClick = ({ selected: selectedPage }) => {
      setPage(selectedPage + 1);
      document.documentElement.scrollTop = 0;
    };

    return ( 
        <div className={isOpen ? "search-page search-page-open" : "search-page"}>
          <Meta title= "Search" />
            <div className="searched-movies">
                <div className="movies-title">
                    <h1> {isFrench ? "Résultats trouvés pour " : "results for "} {toSearch} </h1>
                </div>
                <div className="searched-movies-list">
                    {printSearched}
                </div>
            </div>
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              forcePage={page - 1}
              pageCount={numOfPages}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
        </div>
     );
}
 
export default SearchPage;