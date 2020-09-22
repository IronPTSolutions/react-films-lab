import React from 'react';

const getGenreColor = (genre) => {
  switch (genre) {
    case 'Action':
    case 'Romance':
    case 'Animation':
      return 'danger';
    case 'Fantasy':
    case 'Adventure':
      return 'success';
    case 'Drama':
      return 'secondary';
    case 'Crime':
    case 'Horror':
      return 'warning';
    default:
      return 'info';
  }
}

const FilmGenre = (props) => {
  let color = getGenreColor(props.genre);
  return (
    <span className={"badge mr-1 badge-" + color}>{props.genre}</span>
  )
}

export default FilmGenre;
