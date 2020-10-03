import React from 'react';
import filmsJson from '../data/films.json';
import '../components/FilmList.css'

class FilmList extends React.Component {
	state = {
    goodMovie: 6,
    films : filmsJson
	};

	getRating = (array) => {
		const sum = array.reduce((previous, current) => current + previous, 0);
		return parseFloat((sum / array.length).toFixed(1));
  };
  
  onDeleteClick = (indexFilm) => {
    this.setState({
      films : [...this.state.films].filter((_, index) => index !== indexFilm)
    })
  }

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="card-columns">
							{this.state.films.map((film, index) => {
								const rating = this.getRating(film.ratings);
								return (
			
										<div key = {index}
											className={`card ${this.state.goodMovie <= rating
												? 'bg-warning'
												: 'bg-white'} mt-2`}
											style={{ maxWidth: '18rem' }}
										>
                      <i className="fa fa-times text-danger delete-film" onClick={() => this.onDeleteClick(index)}></i>
											<img className="card-img-top" src={film.posterurl} alt={film.title} />
											<div className="card-body position-relative">
                        <div className='film-genre'>
                          {film.genres.map(genre => {
                            return <span key={genre} className={`badge ${genre} ml-1`}>{genre}</span>
                          })}
                        </div>
												<h5 className="card-title">{film.title}</h5>
												<p className="card-text">{film.storyline}</p>
											</div>
											<div className="card-footer d-flex justify-content-between">
												<small className="text-muted">{film.year}</small>
												<small className="text-muted">{rating}<i className="fa fa-star text-warning ml-2"></i></small>
											</div>
										</div>
						
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FilmList;
