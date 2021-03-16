import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendings } from "../actions/combinedActions";
import SerieComponent from "../components/SerieComponent";
import MovieComponent from "../components/MovieComponent";
import NetflixLogo from '../images/netflix.png';
import AmazonLogo from '../images/prime.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meta from "../components/Meta";

const Home = (props) => {

  //Charger les trendings
  const dispatch = useDispatch();
  const isFrench = props.isFrench;
  const language = isFrench ? "fr" : "";

  useEffect(() => {
    dispatch(fetchTrendings(language));
  }, [dispatch, language]);

  //Recuperer les données du store
  const { trendingsToday, trendingsThisWeek, netflixOriginals, amazonOriginals } = useSelector(
    (state) => state.allTrends
  );

  //Trendings du jour
  const trendingsDailyFiltered = trendingsToday.filter(
    (item) => item.media_type !== "person"
  );
  const printDailyTrendings = trendingsDailyFiltered.map((item) => {
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
    } else {
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

  //Trendings de la semaine
  const trendingsWeeklyFiltered = trendingsThisWeek.filter(
    (item) => item.media_type !== "person"
  );
  const printWeeklyTrendings = trendingsWeeklyFiltered.map((item) => {
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
    } else {
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

  //Netflix Originals
  const printNetflixOriginals = netflixOriginals.map((item) => 
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

  //Amazon Originals
  const printAmazonOriginals = amazonOriginals.map((item) => 
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

  //Sliders
  const responsive = {
    largedesktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  //Language Switch
  const dailyTitleFrench =
    <div className="trend-title">
            <h1>A la une</h1>
            <h3>Qu'est-ce qu'on regarde aujourd'hui ? </h3>
    </div>;
  
  const dailyTitleEnglish = 
    <div className="trend-title">
      <h1>Daily Trendings</h1>
      <h3>What are people watching today ? </h3>
    </div>;

  const weeklyTitleFrench = 
  <div className="trend-title">
    <h1>Cette semaine</h1>
    <h3>Le plus populaire de la semaine </h3>
  </div>

  const weeklyTitleEnglish = 
  <div className="trend-title">
    <h1>Weekly Trendings</h1>
    <h3>What was the most popular this week ? </h3>
  </div>

  return (
    <div className={props.isOpen ? "home home-open" : "home"}>
      <Meta />
      <div className="trendings daily">
        { isFrench ? dailyTitleFrench : dailyTitleEnglish }
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          centerMode
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .7s"
          transitionDuration={700}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {printDailyTrendings}
        </Carousel>
      </div>

      <div className="trendings weekly">
        { isFrench ? weeklyTitleFrench : weeklyTitleEnglish }
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          centerMode
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .7s"
          transitionDuration={700}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {printWeeklyTrendings}
        </Carousel>
      </div>

      <div className="trendings netflix">
        <div className="trend-title">
          <img src={NetflixLogo} alt=""/>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          centerMode
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .7s"
          transitionDuration={700}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {printNetflixOriginals}
        </Carousel>
      </div>

      <div className="trendings amazon">
        <div className="trend-title">
          <img src={AmazonLogo} alt=""/>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          centerMode
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .7s"
          transitionDuration={700}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {printAmazonOriginals}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
