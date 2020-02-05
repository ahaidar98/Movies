import {
  ON_FETCH_MOVIE_DETAIL_START,
  ON_FETCH_MOVIE_DETAIL_SUCCESS,
  ON_FETCH_MOVIE_DETAIL_FAILED,
  ON_FETCH_MOVIE_DETAIL_DONE
} from './constants';

// Intial Redux State
const initialState = {
	movieDetailData: [],
  movieDetailStatus: 'No Results',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_FETCH_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetailData: action.payload };

    case ON_FETCH_MOVIE_DETAIL_START:
      return { ...state, movieDetailStatus: 'Loading' };

    case ON_FETCH_MOVIE_DETAIL_FAILED:
      return { ...state, movieDetailStatus: 'Failed' };

    case ON_FETCH_MOVIE_DETAIL_DONE:
      return { ...state, movieDetailStatus: 'Done' };

    default:
      return state;
  }
};
