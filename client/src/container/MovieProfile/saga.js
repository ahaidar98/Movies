import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_MOVIE_DETAIL_DATA } from './constants';
import {
  onMovieDetailLoadStart,
  onMovieDetailLoadSuccess,
  onMovieDetailLoadFailed,
  onMovieDetailLoadDone,
} from './actions';


  function* getMoviesDetail(action) {
    try {
	    yield put(onMovieDetailLoadStart());
	    const response = yield fetch(`/api/getMovieProfile/${action.movieId}`);
			const jsonData = yield response.json();
      yield put(onMovieDetailLoadSuccess(jsonData));
      yield put(onMovieDetailLoadDone());

	  } catch (e) {
      console.log('Error Occured', e);
      alert(`Error Occured! ${e}`);
	    yield put(onMovieDetailLoadFailed());
	  }
	}

	export function* MovieProfileSaga() {
    yield takeLatest(FETCH_MOVIE_DETAIL_DATA, getMoviesDetail);
	}

	export default MovieProfileSaga;
