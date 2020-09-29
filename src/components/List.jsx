import React from "react";
import Card from "./Card";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: this.props.films,
    };
  }
  deleteFilm = (movie) => {
    this.setState({
      films: this.state.films.filter((film) => film !== movie),
    });
  };

  render() {
    return (
      <div className='container'>
        <div className="card-columns">
          {this.state.films.map((film) => {
            return (
              <Card
                key={film.id}
                {...film}
                deleteFilm={this.deleteFilm.bind(this, film)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
