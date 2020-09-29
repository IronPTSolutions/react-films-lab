import React from "react";

const Genres = (props) => {
  return (
    <div>
      <ul>
        {props.genres.map((genre) => {
          let color;
          switch (genre) {
            case "Action":
            case "Drama":
            case "Fantasy":
            case "Animation":
            case "Romance":
              color = "danger";
              break;
            case "Fantasy":
            case "Adventure":
              color = "success";
              break;
            case "Crime":
            case "Horror":
              color = "warning";
              break;
            case "Comedy":
            case "Documentary":
            case "Biography":
            case "Thriller":
            case "Family":
            case "Sci-Fi":
            case "Mystery":      
              color = "info";
              break;
            case "Drama":
            case "Biography":
              color = "secondary";
              break;
            default:
              break;
          }
          return <li className={"badge mr-1 badge-" + color}>{genre}</li>;
        })}
      </ul>
    </div>
  );
};

export default Genres;
