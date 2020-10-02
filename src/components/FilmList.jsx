import React from 'react'
import films from '../data/films.json'

class FilmList extends React.Component {
  state = {
    goodMovie: 6
  }

  render() {

    const getRating = (array) => {
      const sum = array.reduce((previous, current) => current += previous)
      return parseFloat((sum / array.length).toFixed(1))
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {films.map((film) => {
              const rating = getRating(film.ratings)
              return (
                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={film.posterurl} />
                    <div
                      className="card-body"
                      style={{ backgroundColor: this.state.goodMovie <= rating ? "yellow" : "white", maxWidth: '18rem' }}
                    >
                      <h5 className="card-title">{film.title}</h5>
                      <p className="card-text">{film.storyline}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                      <small class="text-muted">{film.year}</small>
                      <small class="text-muted">{rating}</small>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FilmList