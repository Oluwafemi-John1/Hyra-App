import React from 'react';
import image1 from '../assets/images/hyra1.png'

const Herosection = () => {
  return (
    <>
        <div className="container-fluid mt-lg-5">
            <div className="row">
                <div className="col-lg-6 col-12 text-center text-lg-start d-none d-lg-block" id='bigHero'>
                    <h1 className='heroText'>Discover a world where education meets excitement</h1>
                    <p className='smallHero mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                </div>
                <div className="col-lg-6 col-12 text-center p-5 p-lg-0">
                    <img src={image1} alt="" loading='lazy' className='img-fluid p-lg-0 p-4' />
                </div>
                <div className="col-lg-6 col-12 text-center text-lg-start d-lg-none d-md-none" id='bigHero'>
                    <h1 className='heroText'>Discover a world where education meets excitement</h1>
                    <p className='smallHero mt-lg-4'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Herosection