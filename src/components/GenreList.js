import React from 'react';

const genreStyle = {
    Action: {backgroundColor: "#dc3545"},
    Drama: {backgroundColor: "#6610f2"},
    Romance: {backgroundColor: "#e83e8c"},
    Comedy: {backgroundColor: "#fd7e14"},
    Adventure: {backgroundColor: "#28a745"},
    Crime: {backgroundColor: "#17a2b8"},
    Fantasy: {backgroundColor: "#007bff"},
    Thriller: {backgroundColor: "#007bff"},
    Horror: {backgroundColor: "#343a40"},
    Family: {backgroundColor: "#6f42c1"},
  };

const GenreList = ({genres}) => {
    return (
        <div>
            {genres.map((g, i) => {
                return (
                <spa key={i} className='mx-1 p-1 rounded' style={genreStyle[g]}>{g}</spa>
                    )
            })}
        </div>)
}

export default GenreList;