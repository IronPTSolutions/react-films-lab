import React from 'react';
import customData from '../../data/films.json'
class MovieCard extends React.Component {
 
 
  render() {
    return <div className='MovieCard'>
            <div class="card" style={{width: '18rem'}}>
                <img src={customData[0].posterurl} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div className="film__genres">
                        <span class="badge bg-secondary">New</span>
                    </div>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between">
                    <small>Year</small>
                    <small>⭐ Stars</small>
                    </li>
                </ul>
            </div>
    </div>;
  }
}
 
export default MovieCard;