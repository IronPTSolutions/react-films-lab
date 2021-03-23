import React from 'react'
import './FilmItem.css'

const FilmItem = ({ posterurl, title, genres, storyline, year, ratings, onDelete }) => {
    
    //Average of ratings
    let sum = ratings.reduce((previous, current) => current += previous)
    let avgRatings = (sum / ratings.length).toFixed(1)

    //Color of genres
    const styleGenre = (genre) => {
        switch(genre) {
            case 'Action':
            case 'Animation':
            case 'Romance' :
                return '#E62D17'
            
            case 'Comedy':
            case 'Sci-Fi':
            case 'Mystery':
            case 'Documentary':
            case 'Thriller':
            case 'Biography':
            case 'Family':
                return '#18a2b8'
            
            case 'Crime':
            case 'Horror':
            case 'Drama':
                return '#1D48E8'
            
            case 'Adventure':
            case 'Fantasy':
                return '#29a745'
            
            default:
                return '#878281'
            
        }
    }
    //Use index in Key, because prop.id doesn't work
    const genresWithColor = genres.map((genre, i) => <span key={i} className="genre" style={{ backgroundColor: styleGenre(genre), color:'#fff' }}>{genre}</span>)

    //Color of cards
    const styleCards = (avgRatings) => {
        if (avgRatings > 6) {
            return '#ffc107'
        }
    }
    
    return (
        <div className="card FilmItem mb-3">
            <button onClick={ onDelete }className="btn btn-primary-outline delete-button">x</button>
            <img className="card-img-top image-Movie" src={posterurl} alt={title}/>
            <div className="card-body" style={{backgroundColor: styleCards(avgRatings)}}>
                <div className="mt-1 mb-3">
                    {genresWithColor}
                </div>
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{storyline}</p>
                </div>
                <div className="footer-card mt-3 pt-3">
                    <h5 className="card-year">{year}</h5>
                    <p className="card-text">{avgRatings} <span role="img" aria-label="star">⭐</span></p>
                </div>
            </div>
        </div>
    )
}

export default FilmItem