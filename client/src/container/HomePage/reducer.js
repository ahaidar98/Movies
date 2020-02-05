import {
  ON_FETCH_MOVIE_START,
  ON_FETCH_MOVIE_SUCCESS,
  ON_FETCH_MOVIE_FAILED,
  ON_FETCH_MOVIE_DONE
} from './constants';

// Intial Redux State
const initialState = {
	movieData: [],
  movieStatus: 'No Results',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_FETCH_MOVIE_SUCCESS:
      return { ...state, movieData: action.payload };

    case ON_FETCH_MOVIE_START:
      return { ...state, movieStatus: 'Loading' };

    case ON_FETCH_MOVIE_FAILED:
      return { ...state, movieStatus: 'Failed' };

    case ON_FETCH_MOVIE_DONE:
      return { ...state, movieStatus: 'Done' };

    default:
      return state;
  }
};
