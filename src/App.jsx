import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Experiences from './components/Experiences'
import About from './components/About'
import Projects from './components/Projects'
import Customer from './components/Customer'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Experiences></Experiences>
      <About></About>
      <Projects></Projects>
      <Customer></Customer>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  )
}

export default App
