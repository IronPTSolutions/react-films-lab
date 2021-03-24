import React, { Component } from "react";
import FilmItem from "./FilmItem";
import filmsData from "../../data/films.json";
import "./FilmItem.css";


export default class FilmList extends Component {
  state = {
    films: filmsData || [],
  };

  onClickDeleteFilm = (film) => {
    console.log(film);
    this.setState({
      films: this.state.films.filter((f) => f !== film),
    });
  };

  onClickRatingFilter = () => {
    this.setState({
      films: this.state.films.filter(
        (peli) => peli.imdbRating && peli.imdbRating > 7.5
      ),
    });
  };

  render() {
    const { films } = this.state;
    console.log(films);
    return (
      <>
        <div className="button">
          <button className="btn btn-warning" onClick={this.onClickRatingFilter}>
            Best Imdb rated films
          </button>
        </div>
        <div className="card-columns">
          {films.map((film, i) => {
            return (
              <FilmItem
                key={film.id}
                {...film}
                onClickDelete={this.onClickDeleteFilm.bind(this, film)}
              />
            );
          })}
        </div>
      </>
    );
  }
}
