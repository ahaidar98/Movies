import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import MovieItem from '../MovieItem/index';

function movieItem(movies) {
  return movies && movies.map((movie) => {
      return (
        <MovieItem
          id={movie.id}
          imgURL={movie.poster_path}
          title={movie.title}
          voteAvg={movie.vote_average}
          overview={movie.overview}
          releaseDate={movie.release_date}
        />
      );
    });
}

const MovieGrid = ({ movies, pgTitle, id }) => {
  return (
    <div>
      <div>
        <h2 className="gridHeader">{pgTitle}:</h2>
        <p className="resultText">{movies.total_results.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Results</p>
      </div>
      <div className="movieGrid">
        {movieItem(movies.results)}
      </div>
    </div>
  );
};

MovieGrid.propTypes = {
  movies: PropTypes.object.isRequired,
  pgTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

MovieGrid.defaultProps = {

};

export default MovieGrid;
