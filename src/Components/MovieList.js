import React, { Component } from 'react';
import { movies } from './GetMovie';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      hover: '',
      parr: [1]
    };
  }

  hoverBtn = (id) => {
    this.setState({
      hover: id
    });
  }

  leaveBtn = () => {
    this.setState({
      hover: ''
    });
  }

  render() {
    let movie = movies.results;

    return (
      <>
        {
          movie.length === 0 ?
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :
            <div>
              <h3 className="text-center"><strong>Trending</strong></h3>
              <div className='Movie-List' >
                {
                  movie.map((movieObj) => (
                    <MovieCard
                      key={movieObj.id}
                      movieObj={movieObj}
                      hover={this.state.hover}
                      hoverBtn={this.hoverBtn}
                      leaveBtn={this.leaveBtn}
                    />
                  ))
                }
              </div>
            </div>
        }
        <div className='Pagination' style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Prev</a></li>
              {
                this.state.parr.map((value) => (
                  <li className="page-item"><a className="page-link" href="#">{value}</a></li>
                ))
              }
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
