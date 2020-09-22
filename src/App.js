import React from 'react';
import PageHeader from './components/PageHeader';
import Card from './components/Card';
import films from './data/films.json';

const App = () => (
  <div className="App">
    <PageHeader />
    <Card films={films} />
  </div>
)

export default App
