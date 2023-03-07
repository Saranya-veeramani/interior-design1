import React from 'react'
import backgroundimage from '../asserts/images/main.jpg'
import './Services.css';
import Work from '../components/Work';
import Content from'../components/Content';

const Services = () => {
  return <><div className='container'>
<div className='bg-image'>
  <img src={backgroundimage} alt='backgroundimage'/>
</div>
<div className='textonimage'>
  <h1>Services</h1>
 <p>Home/Services</p></div>
 <Content/>
  <Work/>   
   </div> 

<div>

</div>
  </>;
}
export default Services