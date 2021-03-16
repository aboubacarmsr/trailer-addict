import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../actions/movieActions";
import { categoriesMoviesEN, categoriesMoviesFR } from "../api/categories";
import MovieComponent from "../components/MovieComponent";
import ReactPaginate from "react-paginate";
import Meta from "../components/Meta";

const Movies = ({ isFrench, isOpen }) => { 
 
  const dispatch = useDispatch();
  const language = isFrench ? "fr" : "";
  const [genres, setGenres] = useState("");
  const [page, setPage] = useState(1); 

  useEffect(() => {
    dispatch(fetchPopularMovies(language, page, genres));
  }, [dispatch, language, page, genres]);

  const { popularMovies, numOfPages } = useSelector(
    (state) => state.movies
  );

  //Changer de catégorie
  const changeCategoryHandler = (id) => {
    setPage(1);
    setGenres(id);
    getCategoryName(id);
  };

  const getCategoryName = (id) => {
    if (isFrench) {
      const categoryFilter = categoriesMoviesFR.filter(
        (category) => category.id === id
      );
      const categoryName = categoryFilter.map((category) => category.name);
      return categoryName.toString();
    } else {
      const categoryFilter = categoriesMoviesEN.filter(
        (category) => category.id === id
      );
      const categoryName = categoryFilter.map((category) => category.name);
      return categoryName.toString();
    }
  };

  //Changer de page
  const handlePageClick = ({ selected: selectedPage }) => {
    setPage(selectedPage + 1);
    document.documentElement.scrollTop = 0;
  };

  //Affichage des categories
  const frenchCategories = categoriesMoviesFR.map((category) => (
    <li onClick={() => changeCategoryHandler(category.id)} id={category.id}
    className={ genres === category.id ? "category-active" : ""}>
      {category.name}
    </li>
  ));
  const englishCategories = categoriesMoviesEN.map((category) => (
    <li onClick={() => changeCategoryHandler(category.id)} id={category.id}
    className={ genres === category.id ? "category-active" : ""}>
      {category.name}
    </li>
  ));

  const printPopularMovies = popularMovies.map((item) => (
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
  ));

  return (
    <div className={isOpen ? "movies movies-open" : "movies"}>
      <Meta title='Movies' />
          <div className="movies-title">
            <ul>{isFrench ? frenchCategories : englishCategories}</ul>
          </div>
            <div className="popular-movies">{printPopularMovies}</div>
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
};

export default Movies;
