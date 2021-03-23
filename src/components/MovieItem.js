import React from "react";

import GenreList from "./GenreList";

const MovieItem = ({
  title,
  storyline,
  posterurl,
  year,
  ratings,
  genres,
  contentRating,
  onDelete,
}) => {
  const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
  const averageRating = average(ratings).toFixed(1);
  return (
    <div className="Card card shadow-sm h-100" style={{ width: "20rem" }}>
      <div className="position-relative">
        <button
          onClick={onDelete}
          className="btn btn-outline-danger btn-sm position-absolute top-0 end-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <img src={posterurl} className="card-img-top" alt={title} />
        <GenreList genres={genres} />
      </div>

      <div
        className={`card-body ${
          contentRating === "R" ? "bg-warning" : "bg-light"
        }`}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text fs-6">{storyline}</p>
        <div className="card-footer d-flex flex-row align-items-baseline justify-content-between">
          <small className="text-muted">{year}</small>
          <small className="text-muted">
            {averageRating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="orange"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
