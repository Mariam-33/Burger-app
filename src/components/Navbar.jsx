import React from 'react'
import '../assets/stylesheets/navbar.css'

const Navbar = () => {
  return (
    <div className="topnav">
      <a href="signup">Login</a>
      <a className="active" href="/">Burger Builder</a>
    </div>
  )
}
export default Navbar
