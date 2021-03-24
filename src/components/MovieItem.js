import React from 'react'
import '../assets/css/MovieItem.css'

const MovieItem = ({title, year, genres, posterurl, storyline}) => {
    return(
        <div class="card-group">
            <div class="card">
                <img src={posterurl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{storyline}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">year</small>
                    </div>
            </div>
        </div>
    )
}

export default MovieItem