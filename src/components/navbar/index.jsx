import React from 'react'
import './index.scss'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar__logo">+Digital</div>
        <div className="navbar__menu">
            <div className="navbar__menu__nav-link"><a>Home</a></div>
            <div className="navbar__menu__nav-link"><a>About</a></div>
            <div className="navbar__menu__nav-link"><a>Services</a></div>
            <div className="navbar__menu__nav-link"><a>Contact</a></div>
        </div>
    </div>
  )
}
