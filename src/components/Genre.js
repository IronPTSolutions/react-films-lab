import React from 'react';

const Genre = (props) => {
    let color;
    switch(props.genre) {
        case 'Romance':
        case 'Crime':
        case 'Horror':
            color = 'danger'
            break;
        case 'Action':
        case 'Thriller':
        case 'Mystery':
            color = 'warning'
            break;
        case 'Comedy':
        case 'Adventure':
        case 'Family':
            color = 'success'
            break;
        case 'Drama':
        case 'Documentary':
        case 'Biography':
            color = 'secondary'
            break;
        case 'Fantasy':
        case 'Sci-Fi':
        case 'Animation':
            color = 'info'
            break;
        default:
            color = 'light'
            break;
    }
    
    return (
        <span className={`badge badge-${color} mr-1 mb-2`}>{props.genre}</span>
    )
}

export default Genre;