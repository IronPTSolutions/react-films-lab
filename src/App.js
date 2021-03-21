import React from 'react';

//components
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Card from './components/Card'


const App = () => {
  return(
    <div className="App">
        <Header/>
        <CardContainer/>
        <Card/>
    </div>
  )
}

export default App
