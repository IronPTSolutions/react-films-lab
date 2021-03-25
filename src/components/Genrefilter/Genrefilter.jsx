import React from 'react'
import './Genrefilter.scss'
import { genreColors } from '../../data/genres'

const Genrefilter = ({onFilter}) => {
    const gens = Object.keys(genreColors)
    const pickColorGenre = (m) => {
        return genreColors[m]
    }

    return (
        <div className="Genrefilter">
            {
                gens.map((gen) => {
                    return <button onClick={() => onFilter(gen)} key={gen} style={{backgroundColor: pickColorGenre(gen) }}>{gen}</button>
                })
            }
        </div>
    )
}

export default Genrefilter
