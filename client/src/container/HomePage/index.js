import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './styles.css';
import { getMovieData, getSearchedMovieData } from './actions';
import MovieGrid from '../../components/MovieGrid/index';
import Pagination from '../../components/Pagination/index';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Popular Movies',
      pgNum: 1,
      isSearchQuery: false,
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onPgNumValueChange = this.onPgNumValueChange.bind(this);
  }

  componentDidMount() {
    this.props.getMovieData(this.state.pgNum);
  }

  async onSearchInputChange(e) {
    e.preventDefault();

    // replace all spaces with %20 for the api url query
    const apiSearchQuery = e.target.value.replace(/ /gi, '%20');
    const pageTitleStr = e.target.value !== '' ? e.target.value : 'Popular Movies';
    const isSearchQueryAPI = e.target.value !== '' ? true : false;

    await this.setState({ pageTitle: pageTitleStr, isSearchQueryAPI, pgNum: 1 });

    if(isSearchQueryAPI) {
      this.props.getSearchedMovieData(apiSearchQuery, this.state.pgNum);
    } else {
      this.props.getMovieData(1);
    }
  }


  async onPgNumValueChange(pgOperation) {
    const apiSearchQuery = this.state.isSearchQueryAPI ? this.state.pageTitle.replace(/ /gi, '%20') : undefined;
    const operation = pgOperation === '+' ? parseInt(this.state.pgNum + 1) : parseInt(this.state.pgNum - 1);

    await this.setState({ pgNum: operation });

    if(this.state.isSearchQueryAPI) {
      this.props.getSearchedMovieData(apiSearchQuery, this.state.pgNum);
    } else {
      this.props.getMovieData(this.state.pgNum);
    }
  }

  render() {
    console.log('dat', this.props.movieData)
    return(
      <div className="containerWrapper">
        <div className="searchbarRow">
          <input className="movieSearchbar movieInput" onChange={this.onSearchInputChange} placeholder="Enter a title of a movie" />
        </div>
        {this.props.movieStatus === 'Done' ?
          <div>
            <MovieGrid id={this.props.movieData.page} movies={this.props.movieData} pgTitle={this.state.pageTitle} />
            {this.props.movieData.total_results > 0 ?
              <Pagination
                onPgNumValueChange={this.onPgNumValueChange}
                pgValue={this.state.pgNum}
                pgMaxValue={this.props.movieData.total_pages}
              />
            : null}
          </div>
        :
          <h3>LOADING...</h3>
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  getMovieData: PropTypes.func.isRequired,
};

HomePage.defaultProps = {

};

function mapStateToProps(state) {
  return {
    movieData: state.HomePage.movieData,
    movieStatus: state.HomePage.movieStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMovieData, getSearchedMovieData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
