import React, { useState } from 'react'
import FilmItem from '../FilmItem/FilmItem'
import films from '../../data/films.json'
import './FilmContainer.scss'

const FilmContainer = () => {
    const [movies, setMovies] = useState(films)
    
    const onDelete = (id) => {
        setMovies(movies.filter((m) => m.id !== id))
    }

    return (
        <div className="FilmContainer">
            {movies.map((f) => (
                    <FilmItem {...f} key={f.id} onDelete={onDelete} />
                )
            )}
        </div>
    )
}

export default FilmContainer
