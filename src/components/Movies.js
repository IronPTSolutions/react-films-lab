import React, { Component } from "react";
import data from "../data/films.json";
import MovieItem from "./MovieItem";

class Movies extends Component {
  state = {
    movies: [...data],
  };

  deleteItem = (movieId) => {
    this.setState({
      movies: this.state.movies.filter((movie) => movie.id !== movieId),
    });
  };

  render() {
    const movies = [...this.state.movies];

    return (
      <section className="Movies bg-light py-5">
        <div className="container">
          <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-6">
            {movies.map((movie) => (
              <div className="col" key={movie.id}>
                <MovieItem
                  {...movie}
                  onDelete={() => this.deleteItem(movie.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Movies;
