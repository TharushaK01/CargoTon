import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Welcome from './Components/Welcome/Welcome'
import Services from './Components/Services/Services'
import Stat from './Components/Stat/Stat'
import Testimonial from './Components/Testimonial/Testimonial'
import Logo from './Components/Logo/Logo'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Welcome/>
      <Services/>
      <Stat/>
      <Testimonial/>
      <Logo/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App