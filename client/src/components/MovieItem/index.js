import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './styles.css';

const MovieItem = ({ id, imgURL, title, voteAvg }) => {
  return (
    <Link to={`/movie/${id}`} id={id} className="itemWrapper">
      <div className="movieImgWrapper">
        {<img src={imgURL ? `http://image.tmdb.org/t/p/w185/${imgURL}` : ''} alt={`${title} Movie`}/>}
      </div>
      <h3 className="title">{title}</h3>
      <div className="ratingWrapper">
        <h5 className="rating">{voteAvg}/10</h5>
      </div>
    </Link>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number,
};

MovieItem.defaultProps = {
  imgURL: null,
  voteAvg: '?',
};

export default MovieItem;
