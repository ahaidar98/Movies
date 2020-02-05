import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_POPULAR_MOVIE_DATA, FETCH_SEARCHED_MOVIE_DATA } from './constants';
import {
  onMovieLoadDone,
  onMovieLoadFailed,
  onMovieLoadSuccess,
  onMovieLoadStart,
} from './actions';


  function* getMovies(action) {
    try {
	    yield put(onMovieLoadStart());
	    const response = yield fetch(`/api/getPopularMovies/${action.pgNum}`);
			const jsonData = yield response.json();

      yield put(onMovieLoadSuccess(jsonData));
      yield put(onMovieLoadDone());

	  } catch (e) {
      console.log('Error Occured', e);
      alert(`Error Occured! ${e}`);
	    yield put(onMovieLoadFailed());
	  }
	}

  function* getSearchedMovies(action) {
    try {
	    yield put(onMovieLoadStart());
	    const response = yield fetch(`/api/getMovieSearchQuery/${action.searchQueryString}/${action.pgNum}`);
			const jsonData = yield response.json();

      yield put(onMovieLoadSuccess(jsonData));
      yield put(onMovieLoadDone());

	  } catch (e) {
      console.log('Error Occured', e);
      alert(`Error Occured! ${e}`);
	    yield put(onMovieLoadFailed());
	  }
	}

	export function* HomePageSaga() {
    yield takeLatest(FETCH_POPULAR_MOVIE_DATA, getMovies);
    yield takeLatest(FETCH_SEARCHED_MOVIE_DATA, getSearchedMovies);
	}

	export default HomePageSaga;
