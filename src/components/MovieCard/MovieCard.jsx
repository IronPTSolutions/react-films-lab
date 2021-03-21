import React from 'react';

const MovieCard = ({ title,year, genres, ratings, storyline, posterurl, id }) => {
    
    const genColor = (genre) => {
        switch(genre) {
            case 'Action':
            case 'Animation':
            case 'Romance' :
                return '#dc3545'
            

            case 'Comedy':
            case 'Sci-Fi':
            case 'Mistery':
            case 'Thriller':
            case 'Biography':
            case 'Documentary':
            case 'Music':
            case 'Family':
                return '#17a2b8'

            case 'Adventure':
            case 'Fantasy':
                return '#28a745'

            case 'Horror':
            case 'Crime':
                return  '#ffc107'

            default:
                return  '#6c757d'
              
          }
    }

    const rateAvg = (rates) => {

        const sum = rates.reduce((accumulator, currentValue) => accumulator + currentValue)
        return (sum/rates.length).toFixed(1)
        
    }
    
    return (
        <div className='MovieCard'>
            <div className="card" style={{width: '18rem'}}>
                <img src={posterurl} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <div className="film__genres">
                        {
                            genres.map( gen => (
                                <span className="badge ml-2" style={{backgroundColor: genColor(gen), color: 'white' }} >{gen}</span>
                            ))

                        }
                        
                    </div>
                    <h5 className="card-title mt-3">{title}</h5>
                    <p className="card-text">{storyline}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                    <small>{year}</small>
                    <small><span> <span class="fa fa-star yellowColor" style={{color: '#ffc107'}}></span> {rateAvg(ratings)}</span> </small>
                    </li>
                </ul>
            </div>
        </div>
    );
  }

  export default MovieCard;