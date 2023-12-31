import React from 'react'
import Navbar from './pages/Navbar'
import pic1 from '../components/assets/images/aboutus1.png'

const Aboutus = () => {
  return (
    <>
        <Navbar/>
        <div className="container teach">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <h3>Hyra Islamic Stories for Kids</h3>
                    <p>Hyra Islamic Stories for Kids is an engaging and interactive Educational app designed to introduce Islamic teachings to children.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={pic1} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutus