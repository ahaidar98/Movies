import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import files here
import HomePage from './container/HomePage/index';
import MovieProfile from './container/MovieProfile/index';

const Routes = history => {
  return (
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={HomePage}
          />
          <Route
            exact
            path="/movie/:id([0-9]+)"
            render={props => <MovieProfile movieID={props.match.params.id} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
