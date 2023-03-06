import { useState } from 'react';

import Card from './Card';

import getData from '../utils/getData';

import arrows from '../assets/arrows.svg';

const Test = () => {
  const [movie, setMovie] = useState(null);

  const newMovie = async () => {
    const data = await getData();
    setMovie(data);
  };

  return (
    <div className="movie-container">
      {movie ? <Card data={movie} /> : null}

      <button className="btn" onClick={newMovie}>
        <img src={arrows} alt="logo" className="btn-arrows" />
        <span className="btn-text">Encontrar filme</span>
      </button>
    </div>
  );
};

export default Test;
