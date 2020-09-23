import React from 'react';
import './ImageDiv.css';

function ImageDiv(props) {
    const genres = props.genre.map(genre => <li key={genre} className={`${genre} genreDiv`}>{genre}</li>)
    return (
        <div className="ImageDiv" style={{backgroundImage: `url(${props.posterurl})`}}>
            <ul className="genresUl">
                {genres}
            </ul>
        </div>
    );
};

export default ImageDiv;