import React, { Component } from 'react';
import MovieItem from './MovieItem';
import movieData from '../data/films.json';


class MoviesList extends Component {

    state = {
        movies: [...movieData]
    }
    deleteMovieHandler = id =>{
        // const moviesCopy = this.state.movies; // esta manera cambia el estado original completo no debemos hacer esto
         const moviesCopy = [...this.state.movies]; // <== notice the spread operator Esto hace una copia y cambia la copia
         const movieIndex = moviesCopy.findIndex(item => item.id === id);
         moviesCopy.splice(movieIndex,1);
         this.setState({
             movies: moviesCopy
         })
   
     }


    render() {

        return (
            <div className="MoviesList">
                <div className="container ">
                    <div className="row" >                    {
                        this.state.movies.map((movie) => ( // Mapeamos el array y sacamos el título.
                            <div className="col-6" key={movie.id}>
                                <MovieItem  {...movie} clickToDelete = { () => this.deleteMovieHandler(movie.id)}/>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    };

}


export default MoviesList;

