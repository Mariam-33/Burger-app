import React from 'react'
import '../stylesheets/navbar.css'

const Navbar = () => {
  return (
    <div className="topnav">
      <a href="login">Login</a>
      <a className="active" href="/">Burger Builder</a>
    </div>
  )
}
export default Navbar
