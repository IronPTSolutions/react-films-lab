import React from 'react';
import Movie from './components/Movie.jsx';
import allMovies from './data/films.json';
import Nav from './components/Nav.jsx'

class App extends React.Component {
  state = {
    movies: allMovies
  }

  deleteFilm = (e) => {
    const allMovies = [...this.state.movies];
    const movieId = e.target.parentNode.id;
    const filteredMovies = allMovies.filter(m => m.id !== movieId)
    //console.log(movie.id)
    this.setState({movies: filteredMovies})

  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="" style={{marginLeft: '2rem'}}>
          <div className="">
            <div className="card-columns">

                {this.state.movies.map(movie => {
                  return <Movie {...movie} deleteMovie={this.deleteFilm} key={movie.id}/>
                  
                })}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
  


export default App
