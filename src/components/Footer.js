import React from 'react'
import Logo from'../asserts/images/Logo.jpg'
import Fbicon from'../asserts/images/fb.jpg'
import twiticon from'../asserts/images/twitter.jpg'
import inicon from'../asserts/images/in.jpg'
import instaicon from'../asserts/images/insta.jpg'
import './Footer.css'
const Footer = () => {
    
  return (
    <footer>
          <div className='Footer-container'>
              <h1><span> <img src={Logo} alt="Logo" />Interno</span></h1>
              <p>
                  It is a long established fact  will be distracted
              </p>

              <div className='icon'>
                  <img src={Fbicon} />
                  <img src={twiticon} />
                  <img src={inicon} />
                  <img src={instaicon} />
              </div>
              <ul className='Lists1'>

                  <h2>
                      Pages
                  </h2>

                  <li>Home</li>
                  <li>Services</li>
                  <li>Contact Us</li>

              </ul>
              <ul ClassName='Lists2'>

                  <h2>
                      Services
                  </h2>

                  <li>Kitchan</li>
                  <li>Living Area</li>
                  <li>Bathroom</li>
                  <li>Dinning Hall</li>
                  <li>Bedroom</li>
              </ul>


                    <div className='Contact'>
              <h2>
                  Contact
              </h2>
              <p>
                  55 East Birchwood Ave. Brooklyn, New York 11201
                  contact@interno.com
                  (123) 456 - 7890
              </p>
          </div></div>
      </footer>
              )
              }

              export default Footer