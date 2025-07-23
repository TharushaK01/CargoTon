import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Welcome from './Components/Welcome/Welcome'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Welcome/>
      <Services/>
    </div>
  )
}

export default App