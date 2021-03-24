import React from 'react';
import GenreList from './GenreList'
import '../asstes/css/MovieItem.css'

const MovieItem = (
    {
        title,
        storyline,
        posterurl,
        year,
        ratings,
        onDelete,
        genres
    }
) => {
    const averageRating = (ratings.reduce((a, b) => a + b) / ratings.length).toFixed(1)
    const starStyle = {
        color: `#f7d944`
    }
    return (

        <div className="MovieItem card my-3">
            <div className="card bg-dark text-white">
            <img className="card-img-top" src={posterurl} alt={`Poster ${title}`} />
                <div className="card-img-overlay p-0">
                    <button onClick={onDelete} className='mx-0 float-right btn btn-outline-danger border-0'><b>X</b></button>
                    <GenreList genres={genres}/>                    
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{storyline}</p>
            </div>

            
            <div className="card-footer text-muted d-flex justify-content-between">
                <p>{year}</p>
                <div className='d-flex'>
                    <p>{averageRating}</p>
                    {averageRating >= 5
                        ? (<p className='px-2' style={starStyle}><b> ★</b></p>)
                        : (<p className='px-2'><b> ☆</b></p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieItem;