import React, {Component} from 'react'
import data from '../data/films.json'
import AlbumItem from './AlbumItem'


class Album extends Component{
    state = {
        films: [...data]//creamos copia de la array con el spread
    }


    render() {
        return(
           
         <div className="Album">
            <div className="container ">
                <div className= "row row-cols-3 " >
                
                    {
                        this.state.films.map((film)=> ( // Mapeamos el array y sacamos el título.
                            <div className="col" key={film.id}>
                                <AlbumItem  {...film}/>

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