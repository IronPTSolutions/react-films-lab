import React, { Component } from 'react';
import Card from './Card';

class MoviesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies || []
        }
    }

    deleteMovieHandler = id => {
        const moviesCopy = [...this.state.movies];
        const movieIndex = moviesCopy.findIndex(movie => movie.id === id);
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
    }

    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card-columns'>
                        {
                        this.state.movies.map(movie => {
                            return <Card
                                key={movie.id}
                                {...movie}
                                clickToDelete={() => this.deleteMovieHandler(movie.id)}
                                />
                        })
                        }   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesList;