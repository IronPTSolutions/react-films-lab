import React from 'react'
import '../assets/css/MovieItem.css'

const MovieItem = ({ id, title, year, genres, ratings, posterurl, storyline, onDelete }) => {

    let sum = ratings.reduce((acc, cur) => acc += cur)
    let avgRatings = (sum / ratings.length).toFixed(1)

    const ratingGold = (avgRatings) => {
        if (avgRatings > 6) {
            return '#ffc107'
        }
    }

    const genresColor = (genre) => {
        switch (genre) {
            case 'Action':
            case 'Animation':
            case 'Romance':
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

    const genresWithColor = genres.map((genre, i) => <span key={i} className="genre" style={{ backgroundColor: genresColor(genre), color: '#fff' }}>{genre}</span>)

    return (
        <div className="card-group">
            <div className="card" style={{ backgroundColor: `${ratingGold(avgRatings)}` }}>
                <button onClick={onDelete} className="btn__remove"></button>
                <img src={posterurl} className="card-img-top img__top" alt={title} />
                <div className="mt-1 mb-3 genres">
                    {genresWithColor}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{storyline}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{year}</small>
                    <small className="text-muted"> {avgRatings} ⭐</small>
                </div>
            </div>
        </div>
    )
}

export default MovieItem