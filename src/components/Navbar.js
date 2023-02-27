import React from 'react'
import Logo from './pages/images/Logo.jpg'
//import './navbar.css'
import Vector from './pages/images/Vector.jpg'
    const Navbar = () =>  {
    return (
      <div className='navbar'>
          <div className='container'>
          <h1><span> <img src={Logo} alt="Logo" />Interno</span></h1>
          <button className='btn'>
              <ul className='nav-menu'>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='#'>Contact Us</a></li>
             </ul> </button>
  
             <div className='Search'></div>
              
             <img src={Vector} alt="Vector" />
             </div>
          
          </div>
        
    
    )
  }
  
  export default Navbar

    