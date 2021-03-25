import React, { useState } from 'react'
import FilmItem from '../FilmItem/FilmItem'
import Genrefilter from '../Genrefilter/Genrefilter'
import films from '../../data/films.json'
import './FilmContainer.scss'

const FilmContainer = () => {
    const [movies, setMovies] = useState([...films])
    
    const onDelete = (id) => {
        setMovies(movies.filter((m) => m.id !== id))
    }

    const onFilter = (g) => {
        setMovies([...films].filter((m) => m.genres.includes(`${g}`)))
    }

    return (
        <div>
            <div className="FilmContainer">

            <Genrefilter onFilter={onFilter}/>
            <div className="allContainer">
                {movies.map((f) => (
                        <FilmItem {...f} key={f.id} onDelete={onDelete} />
                    )
                )}
            </div>
            </div>
        </div>
    )
}

export default FilmContainer
