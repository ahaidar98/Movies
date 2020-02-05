import {
  FETCH_POPULAR_MOVIE_DATA,
  FETCH_SEARCHED_MOVIE_DATA,
  ON_FETCH_MOVIE_START,
  ON_FETCH_MOVIE_SUCCESS,
  ON_FETCH_MOVIE_FAILED,
  ON_FETCH_MOVIE_DONE
} from './constants';

export const getMovieData = (pgNum) => {
  return ({
    type: FETCH_POPULAR_MOVIE_DATA,
    pgNum,
  });
}

export const getSearchedMovieData = (searchQueryString, pgNum) => {
  return ({
    type: FETCH_SEARCHED_MOVIE_DATA,
    pgNum,
		searchQueryString,
  });
}

export const onMovieLoadStart = () => {
  return ({
    type: ON_FETCH_MOVIE_START,
  });
}
export const onMovieLoadSuccess = (data) => {
  return ({
    type: ON_FETCH_MOVIE_SUCCESS,
    payload: data,
  });
}
export const onMovieLoadFailed = () => {
  return ({
    type: ON_FETCH_MOVIE_FAILED,
  });
}
export const onMovieLoadDone = () => {
  return ({
    type: ON_FETCH_MOVIE_DONE,
  });
}
