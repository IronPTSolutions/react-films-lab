import React from 'react'
import './FilmItem.scss'
import { shortLine } from '../../helpers/text'
import { meanRatings } from '../../helpers/numbers'
import { genreColors } from '../../data/genres'

const FilmItem = ({ id, title, year, genres, ratings, contentRating, duration, releaseDate, originalTitle, storyline, actors, posterurl, onDelete }) => {

    const pickColorGenre = (m) => {
        return genreColors[m]
    }
    const defaultImg = '/images/default.png'
    return (
        <div className="FilmItem">
            <img src={ posterurl || defaultImg } alt={title} />
            
            <h4>{title} </h4>
            <h5><small>{year}</small></h5>

            <p className="textLine"><small>{shortLine(storyline)}...</small></p>

            {
                meanRatings(ratings) < 6 
                ? <p className="rates"><i className="fas fa-heart"></i> {meanRatings(ratings)}</p>
                : <p className="rates rateHigh" ><i className="fas fa-heart"></i> {meanRatings(ratings)} </p>
            }
            
            <button onClick={() => onDelete(id)}><i className="fas fa-times"></i> </button>

            <div className="genres">
                {genres.map((m) => {
                    return <small key={m} style={{backgroundColor: pickColorGenre(m) }}>{m}</small>
                })}
            </div>

        </div>
    )
}

export default FilmItem
