import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularSeries } from '../actions/serieActions';
import SerieComponent from '../components/SerieComponent';
import { categoriesSeriesEN, categoriesSeriesFR } from '../api/categories';
import ReactPaginate from "react-paginate";

const Series = ({isFrench, isOpen}) => {
    const dispatch = useDispatch();
    const language = isFrench ? "fr" : "";
    const [page, setPage] = useState(1);
    const [genres, setGenres] = useState("");

    useEffect(() => {
        dispatch(fetchPopularSeries(language, page, genres));
    }, [dispatch, language, page, genres]);

    const { popularSeries, numOfPages } = useSelector((state) => state.series);

    //Changer de catégorie
    const changeCategoryHandler = (id) => {
        setPage(1);
        setGenres(id);
        getCategoryName(id);
    };

    const getCategoryName = (id) => {
        if (isFrench) {
            const categoryFilter = categoriesSeriesFR.filter(
                (category) => category.id === id
            );
            const categoryName = categoryFilter.map((category) => category.name);
            return categoryName.toString();
        } else {
            const categoryFilter = categoriesSeriesEN.filter(
                (category) => category.id === id
            );
            const categoryName = categoryFilter.map((category) => category.name);
            return categoryName.toString();
        }
    };

    //Changer de page
    const handlePageClick = ({ selected: selectedPage }) => {
        setPage(selectedPage + 1);
        //Defiler vers le haut
        document.documentElement.scrollTop = 0;
    };

    //Affichage des categories
    const frenchCategories = categoriesSeriesFR.map((category) => (
        <li onClick={() => changeCategoryHandler(category.id)} id={category.id} 
            className={ genres === category.id ? "category-active" : ""}>
            {category.name}
        </li>
    ));
    const englishCategories = categoriesSeriesEN.map((category) => (
        <li onClick={() => changeCategoryHandler(category.id)} id={category.id} 
            className={ genres === category.id ? "category-active" : ""}>
            {category.name}
        </li>
    ));

  //Affichage des séries
    const printPopularSeries = popularSeries.map(item => 
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
    )

    return ( 
        <div className={isOpen ? "series series-open" : "series"}>
            <div className="series-title">
                <ul>{isFrench ? frenchCategories : englishCategories}</ul>
            </div>
            <div className="popular-series">
                {printPopularSeries}
            </div>
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                forcePage={page - 1}
                pageCount={numOfPages}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
     );
}
 
export default Series;