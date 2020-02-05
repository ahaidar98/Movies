import { fork, all } from 'redux-saga/effects';
import HomePageSaga from './container/HomePage/saga';
import MovieProfileSaga from './container/MovieProfile/saga';

function* rootSaga() {
  yield all([
    fork(HomePageSaga),
    fork(MovieProfileSaga),
  ]);
}

export default rootSaga;
