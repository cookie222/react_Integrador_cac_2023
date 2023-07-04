import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const GenreGrid = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const genreResponse = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=0ae79f6de25ce7785d98aa3f8c99ce31'
        );
        const genreList = genreResponse.data.genres;

        const moviesResponse = await Promise.all(
          genreList.map((genre) =>
            axios.get(
              `https://api.themoviedb.org/3/discover/movie?api_key=0ae79f6de25ce7785d98aa3f8c99ce31&with_genres=${genre.id}`
            )
          )
        );
        const moviesByGenre = moviesResponse.map((response, index) => ({
          genre: genreList[index],
          movies: response.data.results,
        }));

        setGenres(moviesByGenre);
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
      }
    };

    fetchMoviesByGenre();
  }, []);

  return (
    <div>
      {genres.map((genre) => (
        <div key={genre.genre.id}>
          <h2>{genre.genre.name}</h2>
          <div className="movie-grid">
            {genre.movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img className="movie-card_img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

