import React from 'react';
import './FilmItem.css';
import FilmGenre from './FilmGenre';

const MIN_SPECIAL_FILM_RATING = 6;

const FilmItem = (props) => {

  const rating = !props.ratings ? undefined : props.ratings.reduce((acc, rating, i, ratings) => {
    acc += rating;
    if (i === ratings.length - 1) {
      acc /= ratings.length;
    }
    return acc;
  }, 0).toFixed(1)

  const genres = !props.genres ? [] : props.genres.map((genre, index) => <FilmGenre key={index} genre={genre} />)

  return (
    <div className={"card " + (rating > MIN_SPECIAL_FILM_RATING && "bg-warning")} id={props.id} style={{ maxWidth: "18rem"}}>
      <i className="fa fa-times text-danger delete-film" onClick={props.onClickDelete}></i>
      <img className="card-img-top" src={props.posterurl} alt={props.title} />
      <div className="card-body">
        <div className="film-genres">{genres}</div>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.storyline}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <small className="text-muted">{props.year}</small>
      { rating && <small className="text-muted">{rating} <i className="fa fa-star text-warning"></i></small> }
      </div>
    </div>
  )
}

export default FilmItem;