import {
  FETCH_MOVIE_DETAIL_DATA,
  ON_FETCH_MOVIE_DETAIL_START,
  ON_FETCH_MOVIE_DETAIL_SUCCESS,
  ON_FETCH_MOVIE_DETAIL_FAILED,
  ON_FETCH_MOVIE_DETAIL_DONE
} from './constants';

export const getMovieDetailData = (movieId) => {
  return ({
    type: FETCH_MOVIE_DETAIL_DATA,
    movieId
  });
}

export const onMovieDetailLoadStart = () => {
  return ({
    type: ON_FETCH_MOVIE_DETAIL_START
  });
}
export const onMovieDetailLoadSuccess = (data) => {
  return ({
    type: ON_FETCH_MOVIE_DETAIL_SUCCESS,
    payload: data
  });
}
export const onMovieDetailLoadFailed = () => {
  return ({
    type: ON_FETCH_MOVIE_DETAIL_FAILED
  });
}
export const onMovieDetailLoadDone = () => {
  return ({
    type: ON_FETCH_MOVIE_DETAIL_DONE
  });
}
