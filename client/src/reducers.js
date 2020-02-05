import { combineReducers } from 'redux';
import HomePageReducer from './container/HomePage/reducer';
import MovieProfileReducer from './container/MovieProfile/reducer';

export default () => {
  return combineReducers({
    HomePage: HomePageReducer,
    MovieProfile: MovieProfileReducer,
  });
};
