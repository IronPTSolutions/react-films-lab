import React, {Component} from 'react'
import data from '../data/films.json'

//components
import Card from './Card'


class CardContainer extends Component {
  state = {
    films: [...data]
  }

  deleteItem = (filmId) => {
    this.setState({
      films: this.state.films.filter(film => film.id !== filmId)
    })
  }


  render() {

    return (
      <section className="Card__container mx-5">
        <div className="container-fluid mx-5">
          <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
            {this.state.films.map(film => (
              <div className="col" key={film.id}>
                <Card {...film}  onDelete={() => this.deleteItem(film.id)}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    )

  }
}



export default CardContainer