import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function Home() {
  return (
    <div>
        <Navbar  />
        <div id='about' >
        <Banner />
        </div>
        <div id="contact">
        <About  />
        </div>
        <Footer />
    </div>
  )
}

export default Home