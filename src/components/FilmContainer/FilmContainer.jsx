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
        setMovies(movies.filter((m) => m.genres.includes(`${g}`)))
    }

    return (
        <div>
            <Genrefilter onFilter={onFilter}/>

            <div className="FilmContainer">
                {movies.map((f) => (
                        <FilmItem {...f} key={f.id} onDelete={onDelete} />
                    )
                )}
            </div>
        </div>
    )
}

export default FilmContainer
