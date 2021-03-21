import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header/Header'
import CardList from './components/CardList/CardList'
import { BackTop } from 'antd';

function App() {

  return (
    <div className="App" style={{ maxWidth: 1000, margin: '0px auto' }}>
      <Header/>
      <CardList />
      <BackTop />
    </div>
  );
}

export default App;
