import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import './styles/App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Newest from './pages/Newest';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import WatchList from './pages/WatchList';
import SerieDetails from './pages/SerieDetails';
import MovieDetails from './pages/MovieDetails';
import SideNav from './components/SideNav';
import SideNavEnglish from './components/SideNavEnglish';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import Recommandations from './pages/Recommandations';

function App() {
  const [isFrench, setIsFrench] = useState(true);
  const [toSearch, setToSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if(windowWidth < 1024) {
        setIsOpen(false);
        setIsMobile(true);
      }
      else if(windowWidth >= 1024) {
        setIsOpen(true);
      }
    }
    window.addEventListener('load', handleResize);
  }, [windowWidth])

  return (
    <div className="App">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} isFrench={isFrench} setIsFrench={setIsFrench} toSearch={toSearch} 
        setToSearch={setToSearch} />
      {
        isFrench ? <SideNav isMobile={isMobile} setIsOpen={setIsOpen} isOpen={isOpen}/> : 
        <SideNavEnglish isMobile={isMobile} setIsOpen={setIsOpen} isOpen={isOpen}/>
      }
      <Switch>
        <Route exact path="/">
          <Home isFrench={isFrench} isOpen={isOpen}/>
        </Route>
        <Route path="/movies"> 
          <Movies isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/movie/:id">
          <MovieDetails isOpen={isOpen} isFrench={isFrench} />
        </Route>
        <Route exact path="/series"> 
          <Series isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/serie/:id">
          <SerieDetails isOpen={isOpen} isFrench={isFrench} />
        </Route>
        <Route exact path="/new">
          <Newest isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/toprated">
          <TopRated isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/upcoming">
          <Upcoming isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/watchlist">
          <WatchList isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/recommandations">
          <Recommandations isOpen={isOpen} isFrench={isFrench}/>
        </Route>
        <Route exact path="/search">
          <SearchPage isOpen={isOpen} isFrench={isFrench} toSearch={toSearch}/>
        </Route>
      </Switch>
      <Footer isOpen={isOpen}/>
    </div>
  );
}

export default App;
