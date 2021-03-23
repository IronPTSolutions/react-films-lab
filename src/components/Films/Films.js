import React, { Component } from 'react'
import FilmItem from '../FilmItem/FilmItem'
import data from '../../data/films.json'

class Films extends Component {
    state = {
        movies: [...data]
    }

    deleteMovie = (id) => {
        this.setState({
            movies: this.state.movies.filter((movie)=> movie.id !== id)
        })
    }

    render() {
        return (
            <div className="Films py-5">
                <div className="container">
                    <div className="row">
                        {
                            this.state.movies.map((movie) => {
                                return (      
                                <div key={movie.id} className="col-4">
                                    <FilmItem {...movie} onDelete={() => this.deleteMovie(movie.id)} />           
                                </div>
                            )
                            }) 
                        }
                    </div>
                </div>                
            </div>
        )
    }
}

export default Films