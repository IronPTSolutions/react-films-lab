import React from 'react';
import '../assets/css/Card.css';

const Card = (props) => {
    return (
        <div className="Card border mb-3" style={{maxWidth: '18rem'}}>
            <small className="delete-movie" onClick={props.clickToDelete}>&#10060;</small>
            <img className="card-img-top border-bottom" src={props.posterurl} alt='poster'/>
            <div className="card-body">
                <div className="movie-genre">
                    <span className="badge badge-light border mr-1 mb-2">{props.genres[0]}</span>
                    <span className="badge badge-light border mr-1 mb-2">{props.genres[1]}</span>
                    <span className="badge badge-light border mr-1 mb-2">{props.genres[2]}</span>
                </div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-justify">{props.storyline}</p>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between">
                <small className="font-weight-bold">{props.year}</small>
                <small className="font-weight-bold">{props.imdbRating || '6.5'} ⭐</small>
            </div>
        </div> 
    );
}

Card.defaultProps = {
    poster: 'https://www.chiquitoipsum.com/img/chiquito-full.png',
    title: ' Está la Cosa Muy Malar',
    storyline: 'Lorem fistrum amatomaa ahorarr ese hombree mamaar por la gloria de mi madre a wan no te digo trigo por no llamarte Rodrigor de la pradera. Torpedo apetecan a peich diodeno me cago en tus muelas qué dise usteer qué dise usteer caballo blanco caballo negroorl diodeno por la gloria de mi madre.',
    year: 2018,
    imdbRating: '9.2',
    genres: [
        "Genre 1",
        "Genre 2",
        "Genre 3"
      ],
}

export default Card;