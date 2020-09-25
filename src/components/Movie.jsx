import React from 'react';
import MovieGenre from './MovieGenre'


export default function Movie(props) {

    const movieGenres = !props.genres ? [] : props.genres.map((g, i) => <MovieGenre key={i} genre={g} />)

    const rating = (props.ratings.reduce((acc, curr) => {
        return acc+curr
    })/props.ratings.length).toFixed(1);

    const topRating = (rating) => {
        return rating > 6 ? 'warning' : 'white';
    }

    return (  

        <div className={"card bg-" + topRating(rating)} id={props.id} style={{ maxWidth: "18rem"}}>

            <i className="fa fa-times text-danger delete-movie" onClick={props.deleteMovie}></i>

            <img className="card-img-top" src={props.posterurl} alt={props.title} />

            <div className="card-body">
                <div className="movie-genres">{movieGenres}</div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.storyline}</p>
            </div>

            <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">{props.year}</small>
                <small className="text-muted">{rating}<i className="fa fa-star text-warning"></i></small>
            </div>

        </div>
            
    )
}