import React from 'react';
import Header from './Components/Header'
import movieData from './data/films.json';
import MoviesList from './Components/MoviesList'

const App = () => (
  <div className="App">
    {/* Your code here */}
    <Header />
    <MoviesList movies={movieData} />
  </div>
)

export default App
