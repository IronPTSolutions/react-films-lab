import React from 'react'
import './AlbumItems.css'


const AlbumItem = ({title,storyline,posterurl,year,imdbRating,onDelete,id,genres})=>{
    return(

        <div className=" Card card  " >
                <button onClick={() => onDelete(id)} className="btn-close btn-danger  button"       aria-label="Close"></button>
               
               <img src={posterurl} className="card-img-top" alt={title}/>

               <div className="genres">
                    <spam className= "gen1">{genres[0]}</spam>
                    <spam className= "gen2">{genres[1]}</spam>
                    <spam className= "gen3">{genres[2]}</spam>
                </div>
                
                
                
                <div className="card-body">
                
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{storyline}</p>
                
                    <div className="card-footer footer justify-content-betwee">
                        <div className="year">{year}</div>
                        <div className="rating">{imdbRating}</div>
                    
             
            
                    </div>
                </div>
        </div>
    )
}

export default AlbumItem