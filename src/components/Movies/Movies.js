import React, { Component } from 'react'
import data from '../../data/films.json'
import MoviesItems from '../MoviesItems/MoviesItems'
class Movies extends Component {
    state = {
        films: [...data]
    }

deleteMovie = (id) => {
   this.setState({
       films: this.state.films.filter(films => films.id !== id)
   })
}

    render() {
        return (
            <div className="Movies py-5">
                <div className="container">
                <div className="row">
                        {
                            this.state.films.map((films) => {
                                return (
                                    <div className="col-4" key={films.id}>
                                    <MoviesItems {...films} onDelete={this.deleteMovie} />
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


export default Movies