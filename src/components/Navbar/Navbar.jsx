import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    const repeatItem = () => {
        let i = 0
        while (i < 7) {
            let all = []
            i++;
            all.push(<p><i class="fas fa-film fa-lg"></i> FilmLover</p>)
            return all
        }
    }
    return (
        <div className="Navbar">
            {repeatItem()}
            {/* <p><i className="fas fa-film fa-md"></i> </p>
            <p><i className="fas fa-film fa-md"></i> </p>  
            <p><i className="fas fa-film fa-md"></i> </p>        
            <p><i className="fas fa-film fa-md"></i> </p>
            <p><i className="fas fa-film fa-md"></i> </p>
            <p><i className="fas fa-film fa-md"></i> </p>
            <p><i className="fas fa-film fa-md"></i> </p>  
            <p><i className="fas fa-film fa-md"></i> </p>        
            <p><i className="fas fa-film fa-md"></i> </p>
            <p><i className="fas fa-film fa-md"></i> </p> */}
        </div>
    )
}

export default Navbar
