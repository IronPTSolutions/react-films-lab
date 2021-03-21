import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import data from '../../data/films.json'
import './MoviesWrapper.css'

class MoviesWrapper extends React.Component {
 
    state = {customData: [...data]} 
 
    deleteItem = (movieId) => {
      this.setState({
        customData: this.state.customData.filter(movie => movie.id !== movieId),
      })
    }

  render() {
    const customData = this.state.customData;
    return (
    
      
    <div className='MoviesWrapper container'>
      { customData.length ? (
        <div className='row d-flex justify-content-center align-items-start'>
            {customData.map(movie => (
              <div className="col-12 col-md-6 col-lg-4 " key={movie.id}>
                <MovieCard {...movie} onDelete={() => this.deleteItem(movie.id)} />
              </div>
            ))}
          </div>) : (
             <p className="text-center">There are no movies left</p>
          )

      }
    </div>
    
    )
  }
}
 
export default MoviesWrapper;