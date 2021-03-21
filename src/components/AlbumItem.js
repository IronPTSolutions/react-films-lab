import React from 'react'


const AlbumItem = ({title,storyline,posterurl,year,imdbRating})=>{
    return(

        <div className=" Card card " >
       
        <img src={posterurl} className="card-img-top" alt={title}/>
        <div className="card-body">
         
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{storyline}</p>
            <button type="button" className="btn-close" aria-label="Close"></button>
            <div className="card-footer">
             {year} {imdbRating}
             
            
            </div>
        </div>
</div>
    )
}

export default AlbumItem