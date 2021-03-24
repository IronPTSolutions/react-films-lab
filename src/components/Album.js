import React, { Component } from 'react';
import MovieItem from './MovieItem'
import Data from '../data/films.json';

class Album extends Component {
    state = {
        movies: [...Data]
    }

    deleteMovie = (id) => {
        this.setState({
          movies: this.state.movies.filter((movie) => movie.id !== id)
        })
      }


    render() {
        const movies = [...this.state.movies]
        return (
            <section className='Album'>
                <div className="container">
                    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-6">
                        {movies.map((movie) => (<div className='col' key={movie.id}>
                            <MovieItem {...movie}
                            onDelete={() => this.deleteMovie(movie.id)}
                            />
                        </div>))}
                        </div>
                </div>
            </section>
        )
    }
}

export default Album;