import React from 'react'
import Navbar from './pages/Navbar'
import Herosection from './pages/Herosection'
import Chooseus from './pages/Chooseus'

const Home = () => {
  return (
    <>
        <>
            <div id='homepage'>
                <Navbar/>
                <Herosection/>
                <Chooseus/>
            </div>
        </>
    </>
  )
}

export default Home