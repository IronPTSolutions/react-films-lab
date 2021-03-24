import React, {Component} from "react";
import '../assets/css/Movie.css'
import movies from '../data/films.json'
import MovieItem from '../components/MovieItem'


class Movie extends Component {
    state = { 
        movies: [...movies]
     }

    render() { 
        return ( 
            <div className="Movie">
                <div className="container">
                    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <MovieItem {...movie}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Movie;