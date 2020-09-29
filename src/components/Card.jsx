import React from "react";
import Genres from "./Genres";

const Card = (props) => {
  const ratings = props.ratings.reduce((acc, rating) => {
    return (acc += rating);
  });

  const averageRating = ratings / props.ratings.length;
  return (
    <div
      className={"card " + (averageRating > 6 && "bg-warning")}
      id={props.id}
      style={{ maxWidth: "18rem" }}
    >
      <i
        className="fa fa-times text-danger"
        onClick={props.deleteFilm}
        style={{ cursor: "pointer" }}
      ></i>
      <img src={props.posterurl} class="card-img-top" alt={props.title} />
      <Genres genres={props.genres}/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.storyline}</p>
      </div>
      <div class="card-footer  d-flex justify-content-between">
        <small className="text-muted">{props.year}</small>
        <small className="text-muted">
          {averageRating.toFixed(1)}
          <i className="fa fa-star text-warning"></i>
        </small>
      </div>
    </div>
  );
};

export default Card;
