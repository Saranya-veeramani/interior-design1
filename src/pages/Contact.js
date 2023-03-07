import React from 'react'
import cover from'../asserts/images/Photo (24).jpg'
import map from '../asserts/images/Photo (23).jpg'
import phone from '../asserts/images/Vector (4).svg'
import facebook from'../asserts/images/fb.jpg'
import twitter from'../asserts/images/twitter.jpg'
import insta from'../asserts/images/insta.jpg'
import ins from '../asserts/images/in.jpg'
import Navbar from '../components/Navbar'
import ContactForm from'../components/ContactForm'
import Footer from'../components/Footer'



const Contact = () => {
  return (
    <div ClassName='Contact'>
      
      <div ClassName='cover img'>
        <img src={cover}/></div>

        <h1>Contact</h1>
        <p>Home/Contact</p>
      
      <h1>We love meeting new people 
             and helping them.</h1>
             <div ClassName='conbox'>
             <span><img src={phone}/><p> info@yourdomain.com</p></span>
             <span><img src={phone}/><p> +1(378)400-1234</p></span>
             <span><img src={phone}/><p> www.yourdomain.com</p></span>
             <img src={facebook}/>
             <img src={twitter}/>
             <img src ={ins}/>
             <img src={insta}/>
</div>
<ContactForm ClassName='conform'/>
<img src={map}/>
    </div>
  )
}

export default Contact