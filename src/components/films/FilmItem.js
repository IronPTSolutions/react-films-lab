import React from "react";
import "./FilmItem.css";
import FilmGenre from "./FilmGenre";

const MIN_SPECIAL_FILM_RATING = 6;

const FilmItem = (props) => {
  const {
    ratings,
    genres,
    posterurl,
    title,
    onClickDelete,
    id,
    storyline,
    year,
    imdbRating,
  } = props;
  const rating = !ratings
    ? undefined
    : ratings
        .reduce((acc, rating, i, ratings) => {
          acc += rating;
          if (i === ratings.length - 1) {
            acc /= ratings.length;
          }
          return acc;
        }, 0)
        .toFixed(1);

  const genresComponents = !genres
    ? []
    : genres.map((genre, index) => <FilmGenre key={index} genre={genre} />);

  return (
    <div className="cardFilm">
      <div
        className={"card " + (rating > MIN_SPECIAL_FILM_RATING && "bg-warning")}
        id={id}
        style={{ maxWidth: "18rem" }}
      >
        <i
          className="fa fa-times text-danger delete-film"
          onClick={onClickDelete}
        ></i>
        <img className="card-img-top" src={posterurl} alt={title} />
        <div className="card-body">
          <div className="film-genres">{genresComponents}</div>
          <h5 className="card-title ">{title}</h5>
          <p className="card-text">{storyline.substring(0, 90) + "..."}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <small className="text-muted">{year}</small>
          {imdbRating ? (
            <small className="text-muted">Imdb Rating: {imdbRating}</small>
          ): ""}
          {rating && (
            <small className="text-muted">
              {rating} <i className="fa fa-star text-warning"></i>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmItem;
