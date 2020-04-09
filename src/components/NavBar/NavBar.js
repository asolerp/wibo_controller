import React from 'react'
import './NavBar.css'

const NavBar = ({socketConnection}) => {
  return (
    <nav className="Navbar">
        <div></div>
        <div className="status-area">
          <div className="status-item">
            <span className="status-item-title"> Socket </span>
            <span className={socketConnection ? 'status-item-on' : 'status-item-off'}></span>
          </div>
        </div>
    </nav>
  )
}

export default NavBar