import React from 'react'
import Navbar from './pages/Navbar'
import Herosection from './pages/Herosection'
import Chooseus from './pages/Chooseus'
import Footer from './Footer'
import Teachings from './pages/Teachings'
import Getstarted from './Getstarted'

const Home = () => {
    return (
        <>
            <>
                <div id='homepage'>
                    <Navbar />
                    <Herosection />
                    <Chooseus />
                    <Teachings />
                    <Getstarted/>
                </div>
                <Footer />
            </>
        </>
    )
}

export default Home