import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Footer from './components/Footer'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/Services"element={<Services/>}/>
        <Route path="/Contact"element={<Contact/>}/>
      </Routes>
       <Services/>
       <Contact/>
       <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App
