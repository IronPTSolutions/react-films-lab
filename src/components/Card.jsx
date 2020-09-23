import React, { useState } from 'react';
import ImageDiv from './ImageDiv';
import Info from './Info';
import Footer from './Footer';
import './Card.css';

function Card(props) {

    const [allFilms, setAllFilms] = useState(props.films);
    const deleteFilm = (filmToDelete) =>  {
        const filtered = allFilms.filter(film => {
           return film.title !== filmToDelete.title
        })
        setAllFilms(filtered)
    };

    const listOfFilms = allFilms.map(film => {
        const averageRate = (film.ratings.reduce((a, b) => (a + b), 0) / film.ratings.length).toFixed(1);
        return (
            <li className={`Card ${averageRate >= 6 && 'yellow'}`} key={props.id}>
                <button className="redX" onClick={() => deleteFilm(film)}><b>x</b></button>
                <ImageDiv posterurl={film.posterurl} genre={film.genres} films={props.films}/>
                <Info title={film.title} storyline={film.storyline} />
                <Footer year={film.year} averageRate={averageRate} />
            </li>
        )
    });

    return (
        <ul>
            {listOfFilms}
        </ul>
    );
};

export default Card;