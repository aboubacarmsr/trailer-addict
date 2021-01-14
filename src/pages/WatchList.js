import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieComponent from '../components/MovieComponent'
import SerieComponent from '../components/SerieComponent'


const WatchList = ({ isFrench, isOpen }) => {
    const dispatch = useDispatch();
    
    const { watchlist } = useSelector((state) => state.allTrends);

    const printWatchList = watchlist.map(item => {
        if (item.hasOwnProperty('title')) {
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
          } else if(item.hasOwnProperty('name')) {
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
    })
    return ( 
        <div className={ isOpen ? "watchlist watchlist-open" : "watchlist"} >
            <div className="watchlist-title">
                <h1> Watch list </h1>
                <h3> {isFrench ? "Des films que vous voulez voir plus tard ? Enregistrez-les dans votre watchlist pour ne pas les perdre" : 
                "Movies you want to see later ? Save them in your watchlist so as not to lose them"} </h3>
            </div>
            <div className="watchlist-list">
                {printWatchList}
            </div>
        </div>
     );
}
 
export default WatchList;