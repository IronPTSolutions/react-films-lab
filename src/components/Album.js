import React, {Component} from 'react'
import data from '../data/films.json'
import AlbumItem from './AlbumItem'


class Album extends Component{
    state = {
        films: [...data]//creamos copia de la array con el spread
    }

    deleteFilms = (id)=>{
        this.setState({
            films:this.state.films.filter(film => film.id !== id)//Cambiamos el estado de films, lo filtramos y nos quedamos con aquello que el id sea diferente al id que le pasamos en el metodo.

        })
    }


    render() {
        return(
           
         <div className="Album ">
            <div className="container ">
                <div className= "row row-cols-3   " >
                
                    {
                        this.state.films.map((film)=> ( // Mapeamos el array y lo buscamos por el id
                            <div className="col" key={film.id}>
                                <AlbumItem  {...film} onDelete={this.deleteFilms}/>

                            </div>
                        ))
                    }
                </div>
            </div>
         </div>
        )
    }
}

export default Album