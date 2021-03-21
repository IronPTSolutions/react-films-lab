import React, { Component } from 'react';


class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [...props.movies]
        }
    };


    render() {
        
        return (
           <main className="container"></main>
        )
    };

}


export default MoviesList;

