import React from 'react'
//import Movies from './Movies'

const MovieDetail = ({ id, title, posterurl, storyline, year, imdbRating }) => {
    return (
        <div className={(imdbRating >= 6.5) ? ("card h-100 bg-warning") : ("card h-100")}>
            <img src={posterurl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{storyline}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <small>{year}</small>
                <small>
                {(imdbRating > 1) ? (imdbRating) : ("N/A")} <i className={(imdbRating >= 6.5) ? ("fa fa-star") : ("fa fa-star text-warning")} />
                </small>
            </div>
        </div>
    )
}

export default MovieDetail