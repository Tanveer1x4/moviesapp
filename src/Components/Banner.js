import React, { Component } from 'react'
import { movies } from './GetMovie'
export default class Banner extends Component {
  render() {
    let movie=movies.results[0];
    // console.log(movies);
    return (
      <>{
       
        movie === ''?
      <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>:
          <div className="card Banner-Card" >
  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top Banner-Img" alt="..."/>

    <h5 className="card-title Banner-Title">{movie.original_title}</h5>
    <p className="card-text Banner-Text">{movie.overview}</p>
 
</div>
  }
      </>
    )
  }
}
