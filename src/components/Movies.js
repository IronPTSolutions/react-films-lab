import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import data from '../data/films.json'

class Movies extends Component {
    state = {
        movies: [...data],
        search: '',
    }

    deleteItem = (movieId) => {
        this.setState(
            { movies: this.state.movies.filter(movie => movie.id !== movieId) }
        )
    }

    onSearch = (e) => {
        this.setState(
            { search: e.target.value }
        )
    }

    filterMovies = () => {
        let movies = [...this.state.movies]
        if (this.state.search) {
            movies = this.state.movies.filter(({ title }) => title.toLowerCase().includes(this.state.search))
        }
        return movies
    }

    render() {
        const movies = this.filterMovies()

        return (    
            <section className="MovieList">
                <div className="row mb-3 mx-5">
                    <div className="col"  style={{ maxWidth: '18rem' }}>
                    <input
                        placeholder="Filter films..." type="text"
                        className="form-control" onChange={this.onSearch}
                    />
                    </div>
                    <div className="col">
                        <p className="pt-2">{movies.length} films found</p>
                    </div>
                </div>
                <div className="row row-cols-3 row-cols-md-3 g-4 mx-5">
                        {movies.map(movie => (
                            <div className="col p-3" key={movie.id}>
                            <i  className="fa fa-times text-danger delete-film fs-4" 
                                onClick={() => this.deleteItem(movie.id)}/>
                                <MovieDetail {...movie} />
                            </div>
                        ))}
                </div>
            </section>            
        )
    }
}


export default Movies