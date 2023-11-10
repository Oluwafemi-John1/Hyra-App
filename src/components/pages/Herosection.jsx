import React from 'react';
import image1 from '../assets/images/hyra1.png'

const Herosection = () => {
  return (
    <>
        <div className="container-fluid mt-lg-5">
            <div className="row">
                <div className="col-lg-6 col-12 mx-auto" id='bigHero'>
                    <h1 className='heroText'>Discover a world where education meets excitement</h1>
                    <p className='smallHero mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <img src={image1} alt="" loading='lazy' className='img-fluid' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Herosection