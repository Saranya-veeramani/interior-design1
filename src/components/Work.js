import React from 'react'
import photo1 from'../asserts/images/Photo (22).jpg'
import icon1 from '../asserts/images/Icon (3).svg'
import photo2 from '../asserts/images/Photo (19).jpg'
import vector from '../asserts/images/Vector.svg'
import vector1 from '../asserts/images/Vector (1).svg'
import vector2 from '../asserts/images/Vector (2).svg'
import photo3 from '../asserts/images/Photo (17).jpg'
import icon2 from '../asserts/images/Icon (2).svg'
import photo4 from '../asserts/images/Photo (18).jpg'
import icon3 from '../asserts/images/Icon.svg'
import './Work.css'
import ContactWithUsButton from './ContactUsButton'
const Work = () => {
  return <><div className='tasks'>
     <h1>How We Work</h1>
     <p>It is a long established interior design company with perfection.</p>
     <div className='task1'>
       <img src={photo1} />
       <img src={icon1} />
       <div className='num'><p>01</p></div>

       <h1>Concept & Details</h1>
       <p>We are committed to delivering inspired interior designs that fulfill client expection through collabaration and exceptional service.
       </p>
     </div>
     <div className='task2'>
       <img src={vector}/>
       <img src ={vector1}/>
       <img src ={vector2}/>
       <div className='num'><p>02</p></div>
       <h1>Idea for Work</h1>
       <p> Explore ulitmate home interior design ideas to completment your style by Interno.
       </p>
       <img src={photo2} />
     </div>
     <div className='task3'>
       <img src={photo3} />

       <img src={icon2} />
       <div className='num'> <p>03</p></div>

       <h1>Designs</h1>

       <p>
         Explore ulitmate home interior design ideas to completment your style by Interno..
       </p>
       <img src={icon3} />
     </div>
     <div className='task4'>
       <div className="num"><p>04</p></div>
       <h1>Perfection</h1>
       <p> Everything has a place, and everything in its place by Interno
       </p>
       <img src={photo4} />
     </div>
   </div><div className='box'>
       <h2>Wanna join the interno?</h2>
       <p>It is a long Established fact will distracted</p>
       <ContactWithUsButton/>
       </div></>; 
}

export default Work
