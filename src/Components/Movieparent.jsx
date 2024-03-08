//import React from 'react'
import Movies from './Movies'
import "./Movie.css"
import movies from "./movie.json"
const Movieparent = () => {
  return (
    <div>
        <h1 className='fh1'>Movies Review</h1>
      <div className='main'>
        {movies.map((element)=>{
        return( <Movies 
            title = {element.Title}
            Year = {element.Year}
            img = {element.Poster}
            />)
        })}
        
      </div>
    </div>
  )
}

export default Movieparent
