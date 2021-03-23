import React from "react";

const spanGenre = (genre) => {
    return (<span className="badge mr-1">{genre}</span>)
}

const averageRatings = (ratings) =>{
    const total = ratings.reduce((acc,rating) => acc +rating);
    const average = total / ratings.length;

    return average.toString().slice(0,3);
}

const MovieItem = ({ title, year, genres, ratings, posterurl, storyline, clickToDelete }) => {
    return (
        <div className="card" >
            <i className="fa fa-times text-danger delete-film" onClick={clickToDelete}></i>
            <img className="card-img-top" src={posterurl} alt=""></img>
            <div className='card-body'>
                <div className="film-genres">
                    {genres.map(genre => spanGenre(genre))}
                </div>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{storyline}</p>



            </div>
            <div className='card-footer d-flex justify-content-between'>
                <small className='text-mute'>{year}</small>
                <small className='text-mute'>{averageRatings(ratings)}
                <i className='fa fa-star text-warning' />
                </small>
            
            </div>
        </div>
    )
}

export default MovieItem;