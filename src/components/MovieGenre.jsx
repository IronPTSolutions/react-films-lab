import React from 'react';

function assignColors(genre) {
    switch (genre) {
        case 'Adventure':
        case 'Fantasy':
            return 'success';
        case 'Action':
        case 'Animation':
        case 'Romance':
            return 'danger';
        case 'Crime':
        case 'Horror':
            return 'warning';
        case 'Drama':
            return 'secondary';
        default:
            return 'info';
    }
}

export default function MovieGenre(props) {

    return (  

     <span className={"badge mr-1 badge-" + assignColors(props.genre)}>{props.genre}</span>
            
    )

}