import React from 'react';
import Header from './components/header/Header';
import Wraper from './components/wraper/wraper';
import Card from './components/card/card';
import'./index.css'


const App = () => (
  <div className="App">
    <Header />
    <Wraper 
    cards ={
      <Card />
      
  

    }
    
    />
    





  </div>
)

export default App
