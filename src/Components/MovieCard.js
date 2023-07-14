import React from 'react';

const MovieCard = ({ movieObj, hover, hoverBtn, leaveBtn }) => {
  return (
    <div className="card Movie-Element" onMouseEnter={() => hoverBtn(movieObj.id)} onMouseLeave={leaveBtn}>
      <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top Movie-Img" alt="..." />
      <div className="card-body">
        <h5 className="card-title Movie-Title">{movieObj.original_title}</h5>
        <p className="card-text Movie-Text">{movieObj.overview}</p>
        <div className='button-wrapper Movie-Button-Container'>
          {hover === movieObj.id && <button type="button" className="btn btn-info Movie-Button">Add to fav</button>}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
