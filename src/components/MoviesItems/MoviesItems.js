import React from 'react'
import './MoviesItems.css'

const MoviesItems = ({ id, title, storyline, posterurl, onDelete, ratings, year, genres }) => {

    const averageRatings = () => {
        const average = ratings.reduce((a, b) => (a + b)) / ratings.length;
        return average.toFixed(1)

    }

    const filmRate = (ratings) => {
        const Color = averageRatings(ratings)
        if (Color >= 6) {
            return '#ffc114'
        } else {
            return '#f8f9fa'
        }
    }

    const colorGenre = (genre) => {
        switch (genre) {
            case 'Comedy':
            case 'Sci-Fi':
            case 'Mystery':
            case 'Documentary':
            case 'Thriller':
            case 'Bigraphy':
            case 'Family':
                return '#17a2b8'

            case 'Crime':
            case 'Horror':
            case 'Drama':
                return '#6c757d'

            case 'Adventure':
            case 'Fantasy':
                return '#28a745'

            case 'Action':
            case 'Animation':
            case 'Romance':
                return '#dc3545'

            default:
                return '#007bff'


        }
    }
    //Sacar los generos por color
    const Genrefilms = genres.map((genre, i) => <span key={i} className="genre" style={{ backgroundColor: colorGenre(genre), color: '#fff' }}>{genre}</span>)




    return (
        <div className="Card card">
            <div className="Card-image">
                <i className="fa fa-trash delete" onClick={() => onDelete(id)}></i>
                <img src={posterurl} className="card-img-top" alt="..." />
                <div className="card-genre mr-1">{Genrefilms}</div>
            </div>
                <div className="card-description" style={{ backgroundColor: filmRate(averageRatings)}} >
                    
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{storyline}</p>
                   
                </div>
            
            <div className="card-averate d-flex justify-content-between">
                <small className="card-year">{year}</small>
                <p className="card-star">{averageRatings(ratings)}<span aria-label="star-emoji" role="img" >⭐</span></p>
            </div>
        </div>


    )
}

export default MoviesItems