import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../asserts/images/Logo.jpg'
import './Navbar.css'
const Navbar = () => {
  

return (
    <header>
    <div className="container">
      <div className="logo"><h1><span> <img src={logo} alt="Logo" />Interno</span></h1>
            
      </div>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link>
          </li>
          <li><Link to ='/Services'>Services</Link></li>
          <li><Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search..."/>
        <button><i class="fa fa-search"></i></button>
      </div>
    </div>
  </header>
);
}


export default Navbar