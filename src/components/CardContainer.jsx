import React, {Component} from 'react'
import data from '../data/films.json'

//components
import Card from './Card'


class CardContainer extends Component {
  state = {
    films: [...data]
  }

  render() {

    return (
      <section className="Card__container">
        <div className="container">

        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3" >
          {this.state.films.map(film => (
            <div className="col" key={film.id}>
              <Card {...film} />
            </div>
          ))}
        </div>
    
        </div>
      </section>
    )

  }
}



export default CardContainer