import React, { Component } from 'react'
import FilmItem from '../FilmItem/FilmItem'
import data from '../../data/films.json'

class Films extends Component {
    state = {
        movies: [...data]
    }

    render() {
        return (
            <div className="Films py-5">
                <div className="container">
                    <div className="row">
                        {
                            this.state.movies.map((movie) => {
                                return (      
                                <div className="col-4">
                                    <FilmItem key={movie.id} {...movie} />           
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