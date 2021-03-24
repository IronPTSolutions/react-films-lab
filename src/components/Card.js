import React from 'react';
import Genre from './Genre';
import '../assets/css/Card.css';

const Card = (props) => {
    let rating = props.ratings;
    rating = (rating.reduce((acc, val) => (acc+val)) / rating.length).toFixed(1);

    if (props.imdbRating !== "") {
        rating = props.imdbRating;
    }

    const genres = props.genres.map((genre, idx) => <Genre key={idx} genre={genre} />)

    let footerColor;
    let footerTextColor = 'text-muted';
    if (rating >= 7) {
        footerColor = 'bg-success';
        footerTextColor = 'text-white';
    } else if (rating < 7 && rating > 5.5) {
        footerColor = 'bg-warning';
    } else if (rating <= 5.5) {
        footerColor = 'bg-danger';
        footerTextColor = 'text-white';
    }

    if (typeof rating === 'number') rating = parseFloat(rating).toFixed(1)

    return (
        <div className={"Card border mb-3 "} key={props.id} style={{maxWidth: '18rem'}}>
            <small className="delete-movie" onClick={props.clickToDelete}>&#10060;</small>
            <img className="card-img-top border-bottom" src={props.posterurl || Card.defaultProps.posterurl} alt='poster'/>
            <div className="card-body">
                <div className="movie-genre">
                    {genres}
                </div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-justify">{props.storyline}</p>
            </div>
            <div className={`card-footer ${footerTextColor} d-flex justify-content-between ${footerColor}`}>
                <small className="font-weight-bold">{props.year}</small>
                <small className="font-weight-bold">{ rating || Card.defaultProps.imdbRating } ⭐</small>
            </div>
        </div> 
    );
}

Card.defaultProps = {
    posterurl: 'https://www.chiquitoipsum.com/img/chiquito-full.png',
    title: 'Está la Cosa Muy Malar',
    storyline: 'Lorem fistrum amatomaa ahorarr ese hombree mamaar por la gloria de mi madre a wan no te digo trigo por no llamarte Rodrigor de la pradera. Torpedo apetecan a peich diodeno me cago en tus muelas qué dise usteer qué dise usteer caballo blanco caballo negroorl diodeno por la gloria de mi madre.',
    year: 2018,
    imdbRating: 'No rating provided',
    genres: [
        "Genre 1",
        "Genre 2",
        "Genre 3"
      ],
}

export default Card;