import React, { useState, useEffect } from "react";
import DataFilms from "../../data/films.json";

function rating(element) {
  let average = element.ratings.reduce((a, c, _, { length }) => {
    return a + c / length;
  }, 0);
  return average.toFixed(1);
}

function genres(film) {
  console.log(film);
}


function Card(props) {
  const [films, setFilms] = useState(DataFilms);
  
  const hide = (film) => {
    setFilms({films: films.filter(el => el != film)})
  }

  return films.map((film, i) => {
    const bg = rating(film) > 6 ? "card bg-warning" : "card false";
    genres(film.genres);
    return (
      // <div key={i}>{film.id}</div>
      <div className={bg} id={film.id} key={film.id}  >
        <i className="fa fa-times text-danger delete-film" onClick={() => setFilms(films.filter(el => el !== film))}></i>

        <img className="card-img-top" src={film.posterurl} alt="Game Night" />
        <div className="card-body">
          <div className="film-genres">
            {film.genres.map((el) => {
              if (el === "Action" || el === "Animation" || el === "Romance") {
                return <span className="badge mr-1 badge-danger">{el}</span>;
              } else if (
                el === "Action" ||
                el === "Animation" ||
                el === "Romance" 
              ) {
                return <span className="badge mr-1 badge-info">{el}</span>;
              } else if (
                el === "Comedy" ||
                el === "Sci-Fi" ||
                el === "Mystery" ||
                el === "Biography" ||
                el === "Documentary" ||
                el === "Thriller" ||
                el === "Family" 

              ) {
                return <span className="badge mr-1 badge-info">{el}</span>;
              } else if (
                el === "Crime" ||
                el === "Horror" 

              ) {
                return <span className="badge mr-1 badge-warning">{el}</span>;
              }
              else if (
                el === "Adventure" ||
                el === "Fantasy" 

              ) {
                return <span className="badge mr-1 badge-success">{el}</span>;
              } else {
                return <span className="badge mr-1 badge-secondary">{el}</span>
              }
              
            })}
          </div>
          <h5 className="card-title">{film.title}</h5>
          <p className="card-text">{film.storyline}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <small className="text-muted">{film.year}</small>
          <small className="text-muted">
            {rating(film)} <i className="fa fa-star text-warning"></i>
          </small>
        </div>
      </div>
    );
  });
}

export default Card;
