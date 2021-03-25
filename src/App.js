import React from 'react';
import NavBar from './components/NavBar'
import Movie from './components/Movie'

const App = () => (
  <div className="App">
    <NavBar/>

    <main className="text-center">
      <section className="container my-5">
        <Movie/>
      </section>
    </main>

  </div>
)

export default App
