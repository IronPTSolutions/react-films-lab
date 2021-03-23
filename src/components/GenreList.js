import React from "react";

const GenreList = ({ genres }) => {
  const genreStyle = {
    Action: "bg-danger",
    Drama: "bg-secondary",
    Romance: "bg-danger",
    Comedy: "bg-info text-dark",
    Adventure: "bg-success",
    Crime: "bg-dark",
    Fantasy: "bg-warning text-dark",
    Thriller: "bg-primary",
    Horror: "bg-dark",
    Family: "bg-primary",
  };
  return (
    <div className="GenreList position-absolute bottom-0 start-0">
      {genres.map((genre, idx) => {
        return (
          <span
            key={idx}
            className={`badge mr-1 ${
              genreStyle[genre] || "bg-light text-dark"
            }`}
          >
            {genre}
          </span>
        );
      })}
    </div>
  );
};

export default GenreList;
