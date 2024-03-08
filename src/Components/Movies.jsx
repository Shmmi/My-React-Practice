import React from 'react'
import "./Movie.css"
const Movies = (props) => {
  return (
    <>
    
    <div className='movie'>
      <img src={props.img} alt="" />
      <p>Movie Name:{props.title}</p>
      <p>Year:{props.Year}</p>
    </div>
    </>
  )
}

export default Movies;
