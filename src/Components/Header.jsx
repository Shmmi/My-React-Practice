import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='head'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/inc">Increment&Decrement</NavLink></li>
        <li><NavLink to="/movies">Movie-Data</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
      </ul>
    </div>
  )
}

export default Header

