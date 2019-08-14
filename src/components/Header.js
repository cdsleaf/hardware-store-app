import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header (props) {

  return (
    <header>
      <div className="header-link">
        <NavLink to='/' exact className="home">
          Home
        </NavLink >
      </div>
      <div className="header-link">
        <NavLink to='/cart' className="cart">
          Cart
        </NavLink>
      </div>    
    </header>
  )
}