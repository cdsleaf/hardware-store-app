import React from 'react';

export default function Header (props) {

  return (
    <header>
      <div className="header-link">
        <a href="index.html" className="home">
          Home
        </a>
      </div>
      <div className="header-link">
        <a href="index.html" className="cart">
          Cart
        </a>
      </div>    
    </header>
  )
}