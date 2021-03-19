import React from 'react';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <div className='jumbotron jumbotron-fluid'>
            <div className='container'>
                <h1 className='display-4'>Iron Films</h1>
                <p className='lead'>React component state tutorial</p>
            </div>
        </div>
    )
}

export default Header;