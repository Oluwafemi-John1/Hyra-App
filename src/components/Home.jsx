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
                <h1>Hey</h1>
            </div>
        </>
    </>
  )
}

export default Home