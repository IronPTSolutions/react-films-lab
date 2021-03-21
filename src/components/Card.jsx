import React from 'react'
import '../assets/css/Card.css'

const Card = ({title, posterurl, storyline, year, genres, ratings}) => {

    const rateAverage = () => (ratings.reduce((acc, rate) => acc + rate) / ratings.length).toFixed(1)

    const featuredFilmColor = (value) => value >= 6 ? "#ffc107" : "#ffffff"
    

    return(
        <div className="card card__style">
            <img src={posterurl} className="card-img-top" alt={title}/>
            <div className="card-body" style={{backgroundColor:featuredFilmColor(rateAverage())}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{storyline}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">{year}</small>
                <small className="text-muted"><i className="fa fa-star text-warning"></i>{rateAverage()}</small>
            </div>
        </div>
    )
}

export default Card