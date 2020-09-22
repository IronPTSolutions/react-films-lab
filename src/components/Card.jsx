import React from 'react';
import ImageDiv from './ImageDiv';
import Info from './Info';
import Footer from './Footer';
import './Card.css';

function Card(props) {
    const listOfFilms = props.films.map(film => {
        const averageRate = (film.ratings.reduce((a, b) => (a + b), 0) / film.ratings.length).toFixed(1);
        return (
            <li className="Card" key={props.id}>
                <ImageDiv posterurl={film.posterurl} genre={film.genres}/>
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