import React from 'react'
import '../assets/css/Header.css'

const Header = () => {
  return (
    <header className="Header">
      <div className="header__container">
        <h1 className="header__title">Iron Films</h1>
        <h3 className="header__subtitle">React component state tutorial</h3>
      </div>
    </header>
  )
}

export default Header