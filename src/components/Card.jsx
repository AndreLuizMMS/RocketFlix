import React from 'react';

const Card = ({ data }) => {
  const { title, overview, release_date, poster_path, genres } = data;

  const allGenres = genres.map(i => i.name);
  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie">
      <div className="banner">
        <img src={image} alt="" className="movie-poster" />
      </div>
      <div className="description">
        <span className="movie-title">{title}</span>
        <span className="release-date">{release_date}</span>
        <span className="movie-desc">{overview}</span>
        <span className="genre">{allGenres.join(' - ')}</span>
      </div>
    </div>
  );
};

export default Card;
