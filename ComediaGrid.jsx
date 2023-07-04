import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ComediaGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=35'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching comedy movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <h3 className="movie-title">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

