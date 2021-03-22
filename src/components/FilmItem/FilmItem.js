import React from 'react'

const FilmItem = ({ posterurl, title, genres, storyline, year, ratings }) => {
    
    //Average of ratings
    let sum = ratings.reduce((previous, current) => current += previous)
    let avgRatings = (sum / ratings.length).toFixed(1)
    
    return (
        <div className="card">
            <button className="btn btn-primary-outline">x</button>
            <img className="card-img-top" src={posterurl} alt={title}/>
            <div>
                <span>{genres}</span>
            </div>
            <div className="card-body">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{storyline}</p>
                </div>
                <div>
                    <h5 className="card-year">{year}</h5>
                    <p className="card-text">{avgRatings} ⭐</p>
                </div>
            </div>
        </div>
    )
}

export default FilmItem