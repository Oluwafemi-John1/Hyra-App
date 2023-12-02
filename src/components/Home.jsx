import React from 'react'
import Navbar from './pages/Navbar'
import Herosection from './pages/Herosection'
import Chooseus from './pages/Chooseus'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <>
            <div id='homepage'>
                <Navbar/>
                <Herosection/>
                <Chooseus/>
            </div>
            <Footer/>
        </>
    </>
  )
}

export default Home