import React from 'react';
import img1 from '../assets/images/hyra8.png'
import img2 from '../assets/images/hyra7.png'
import img3 from '../assets/images/hyra9.png'
import img4 from '../assets/images/hyra10.png'

const Chooseus = () => {
    let styleOne = {
        borderRadius: '8px',
        background: '#0802A3'
    }

    let styleTwo = {
        borderRadius: '8px',
        background: '#FF7676'
    }

    let styleThree = {
        borderRadius: '8px',
        background: '#FF4B91'
    }

    let styleFour = {
        borderRadius: '8px',
        background: '#FFCD4B'
    }
    return (
        <>
            <p className="text-center mt-lg-5" id='chUs'>Why Choose Us</p>
            <div className="container mx-auto text-center mt-lg-5">
                <div className="row g-3 g-lg-0 g-md-0">
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-3" style={styleOne}>
                        <img src={img1} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-2" style={styleTwo}>
                        <img src={img2} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-3" style={styleThree}>
                        <img src={img3} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-2" style={styleFour}>
                        <img src={img4} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chooseus