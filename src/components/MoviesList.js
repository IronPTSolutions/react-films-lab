import React, { Component } from 'react';
import Card from './Card';

class MoviesList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies
        }
    }

    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card-columns'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    {/* {
                        this.state.movies.map(movie => {
                            return <Card
                                key={movie.id}
                                {...movie}
                                />
                        })
                    } */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesList;