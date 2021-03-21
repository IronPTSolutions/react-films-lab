import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import customData from '../../data/films.json'
import './MoviesWrapper.css'
class MoviesWrapper extends React.Component {
 
 
  render() {
    return <div className='MoviesWrapper container'>
        <div class='row-cols-12 row-cols-sm-6 row-cols-md-4 row-cols-lg-3 '>
            <div class='col'>
                <MovieCard />
            </div>
        </div>
    </div>;
  }
}
 
export default MoviesWrapper;