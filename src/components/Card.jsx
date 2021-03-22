import React from 'react'
import '../assets/css/Card.css'

const Card = ({title, posterurl, storyline, year, genres, ratings, onDelete}) => {

    const rateAverage = () => (ratings.reduce((acc, rate) => acc + rate) / ratings.length).toFixed(1)

    const featuredFilmColor = (value) => value >= 6 ? "#ffc107" : "#ffffff"


    const getGender = () => {
        let filmGenres =[]
        genres.forEach(genre => {
            switch (genre) {
                case 'Action':
                    filmGenres.push(<span class="badge mr-1 badge-danger">Action</span>)
                    break;
                case 'Adventure':
                    filmGenres.push(<span class="badge mr-1 badge-success">Adventure</span>)
                    break;
                case 'Sci-Fi':
                    filmGenres.push(<span class="badge mr-1 badge-info">Sci-Fi</span>)
                    break;
                case 'Animation':
                    filmGenres.push(<span class="badge mr-1 badge-danger">Animation</span>)
                    break;
                case 'Drama':
                    filmGenres.push(<span class="badge mr-1 badge-secondary">Drama</span>)
                    break;
                case 'Fantasy':
                    filmGenres.push(<span class="badge mr-1 badge-success">Fantasy</span>)
                    break;
                case 'Horror':
                    filmGenres.push(<span class="badge mr-1 badge-warning">Horror</span>)
                    break;
                case 'Romance':
                    filmGenres.push(<span class="badge mr-1 badge-danger">Romance</span>)
                    break;
                case 'Documentary':
                    filmGenres.push(<span class="badge mr-1 badge-info">Documentary</span>)
                    break;
                case 'Crime':
                    filmGenres.push(<span class="badge mr-1 badge-warning">Crime</span>)
                    break;
                case 'Thriller':
                    filmGenres.push(<span class="badge mr-1 badge-info">Thriller</span>)
                    break;
                default:
                    break;
            }
        })
        return filmGenres
    }

    const description = () => {
        let shortDescription = storyline
        if(storyline.length > 300){
            shortDescription = storyline.slice(0,300) + "..."
        }
        return shortDescription
    }
        

    return(
        <div className="card card__style">
            <img src={posterurl} className="card-img-top" alt={title}/>
            <div className="card-body" style={{backgroundColor:featuredFilmColor(rateAverage())}}>
                {getGender()}
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <i className="fa fa-times text-danger delete-film" onClick={onDelete}></i>
                </div>
                <p className="card-text">{description()}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">{year}</small>
                <small className="text-muted"><i className="fa fa-star text-warning"></i>{rateAverage()}</small>
            </div>
        </div>
    )
}

export default Card