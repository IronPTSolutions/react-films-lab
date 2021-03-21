import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import data from '../../data/films.json'
import './MoviesWrapper.css'

class MoviesWrapper extends React.Component {
 
    state = {customData: [...data]} 
 
  render() {
    const customData = this.state.customData;
    return (

    <div className='MoviesWrapper container'>
        <div className='row d-flex justify-content-center'>
            {customData.map(movie => (
              <div className="col-12 col-md-4 col-lg-3" key={movie.id}>
                <MovieCard {...movie}/>
              </div>
            ))}
          </div>
    </div>
    
    )
  }
}
 
export default MoviesWrapper;