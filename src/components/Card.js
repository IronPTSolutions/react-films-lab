import React from 'react';
import Genre from './Genre';
import '../assets/css/Card.css';

const Card = (props) => {
    const rating = props.imdbRating
    const genres = props.genres.map((genre, idx) => <Genre id={idx} genre={genre} />)
    return (
        <div className="Card border mb-3" id={props.id} style={{maxWidth: '18rem'}}>
            <small className="delete-movie" onClick={props.clickToDelete}>&#10060;</small>
            <img className="card-img-top border-bottom" src={props.posterurl || Card.defaultProps.posterurl} alt='poster'/>
            <div className="card-body">
                <div className="movie-genre">
                    {genres}
                </div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-justify">{props.storyline}</p>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between">
                <small className="font-weight-bold">{props.year}</small>
                <small className="font-weight-bold">{rating || Card.defaultProps.imdbRating} ⭐</small>
            </div>
        </div> 
    );
}

Card.defaultProps = {
    posterurl: 'https://www.chiquitoipsum.com/img/chiquito-full.png',
    title: ' Está la Cosa Muy Malar',
    storyline: 'Lorem fistrum amatomaa ahorarr ese hombree mamaar por la gloria de mi madre a wan no te digo trigo por no llamarte Rodrigor de la pradera. Torpedo apetecan a peich diodeno me cago en tus muelas qué dise usteer qué dise usteer caballo blanco caballo negroorl diodeno por la gloria de mi madre.',
    year: 2018,
    imdbRating: 6.5,
    genres: [
        "Genre 1",
        "Genre 2",
        "Genre 3"
      ],
}

export default Card;