import React from 'react';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import movies from './data/films.json';

const App = () => (
  <div className="App">
    <Header />
    
    <MoviesList movies={movies} />
  </div>
)

export default App
