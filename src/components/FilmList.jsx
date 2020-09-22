import React, { Component } from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      films: this.props.films || []
    }
  }

  onClickDeleteFilm = (film) => {
    this.setState({
      films: this.state.films.filter(f => f !== film)
    })
  }

  render() {
    return (
      <div className="card-columns">
        {this.state.films.map((film, index) => {
          return <FilmItem key={index} {...film} onClickDelete={this.onClickDeleteFilm.bind(this, film)}/>
        })}
      </div>
    );
  }
}

export default FilmList
