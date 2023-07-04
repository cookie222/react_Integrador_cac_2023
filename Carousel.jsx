import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export const CarouselComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=0ae79f6de25ce7785d98aa3f8c99ce31'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="carousel-container">
      <h2>Trending esta semana:</h2>
    <Carousel
     showArrows={true}
        showStatus={false}
        showThumbs={true}
        centerMode={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        centerSlidePercentage={30}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img className="trending_img"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

