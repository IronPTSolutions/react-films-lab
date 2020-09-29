import React from 'react';
import films from './data/films.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import List from './components/List';

const App = () => (
  <div className="App">
    <Header/>
    <List films={films}/>
  </div>
)

export default App
