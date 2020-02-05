import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

import './styles.css';
import { getMovieDetailData } from './actions';


class MovieProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getArrayInfo = this.getArrayInfo.bind(this);
    this.convertMinToHours = this.convertMinToHours.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    this.props.getMovieDetailData(this.props.movieID);
  }

  getArrayInfo(genres) {
    return genres && genres.map((genre, i) => {
      if((i+1) === genres.length) {
        return genre.name;
      }

      return `${genre.name}, `;
    });
  }

  convertMinToHours(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h ${minutes}mins`;
  }

  formatDate(date) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const parts = date.split('-');

    return `${monthNames[parts[1] -1]} ${parts[2]} ${parts[0]}`;
  }

  movieFacts() {
    if((this.props.movieDetailData.budget !== 0) || (this.props.movieDetailData.revenue !== 0) || (this.props.movieDetailData.production_companies.length !== 0)) {
      const budget = this.props.movieDetailData.budget !== 0 ? true : false;
      const revenue = this.props.movieDetailData.revenue !== 0 ? true : false;
      const productionCompanies = this.props.movieDetailData.production_companies.length !== 0 ? true : false;

      return (
        <div>
          <h3><u>Facts:</u></h3>
          {budget ? <p><b>Budget: </b> ${this.props.movieDetailData.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> : null}
          {revenue ? <p><b>Revenue: </b> ${this.props.movieDetailData.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> : null}
          {productionCompanies ? <p><b>Production Companies: </b> {this.getArrayInfo(this.props.movieDetailData.production_companies)}</p> : null}
        </div>
      );
    }
  }

  render() {
    const original_title = this.props.movieDetailData.title !== this.props.movieDetailData.original_title ? `(Orginal Title: ${this.props.movieDetailData.original_title})` : '';
    return(
      <div>
        {this.props.movieDetailStatus === 'Done' ?
          <div className="mpContainerWrapper">
            <div className="movieDetailImg">
              <img src={this.props.movieDetailData.poster_path ? `http://image.tmdb.org/t/p/w342/${this.props.movieDetailData.poster_path}` : ''} alt={`${this.props.movieDetailData.title} Movie`}/>
            </div>
            <div className="movieInfoWrapper">
              <div className="movieInfo">
                <h1 className="movieTitle">{this.props.movieDetailData.title} {original_title}</h1>
                <h4 className="movieStatusHeader">
                  <div className="movieStatusInfo">{this.props.movieDetailData.status} | {this.convertMinToHours(this.props.movieDetailData.runtime)} | {this.props.movieDetailData.release_date && this.formatDate(this.props.movieDetailData.release_date)}</div>
                  <div className="ratingWrapper">{this.props.movieDetailData.vote_average}/10</div>
                </h4>
                <h4 className="genreHeader">{this.getArrayInfo(this.props.movieDetailData.genres)} </h4>
              </div>
              <div>
                <p>{this.props.movieDetailData.tagline}</p>
                {this.props.movieDetailData.homepage && <p>{this.props.movieDetailData.overview} More information at
                  <a className="movieHomeLink" href={this.props.movieDetailData.homepage}>{this.props.movieDetailData.homepage}</a>.
                </p>}
              </div>
              <div>
                {this.movieFacts()}
              </div>
            </div>
          </div>
        :
          <div>LOADING...</div>
        }
      </div>
    );
  }
}

MovieProfile.propTypes = {
  getMovieDetailData: PropTypes.func.isRequired,
};

MovieProfile.defaultProps = {

};

function mapStateToProps(state) {
  return {
    movieDetailData: state.MovieProfile.movieDetailData,
    movieDetailStatus: state.MovieProfile.movieDetailStatus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMovieDetailData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieProfile);
