import React from 'react';
import films from './data/films.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmList from './components/FilmList';
import Header from './components/Header';


const App = () => (
  <div className="App">
    <Header />
    <div className='container'>
      <div classname='row'>
        <div className='col-12'>
          <FilmList films={films} />
        </div>
      </div>
    </div>
  </div>
)

export default App
