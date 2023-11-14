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

    let textStyleFour = {
        color: '#FFF8E7',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px' /* 150% */
    }

    let textStyleThree = {
        color: '#FFE9F1',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px' /* 150% */
    }

    let textStyleTwo = {
        color: '#FFECEC',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px' /* 150% */
    }

    let textStyleOne = {
        color: '#E5E4FF',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px' /* 150% */
    }
    return (
        <>
            <p className="text-center mt-lg-5" id='chUs'>Why Choose Us</p>
            <div className="container mx-auto text-center mt-lg-5">
                <div className="row g-3 g-lg-0 g-md-0">
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-3" style={styleOne}>
                        <img src={img1} alt="" className='img-fluid' />
                        <p style={textStyleOne} className='my-4'>Our app contains the fundamental teaching of Islam for Kids</p>
                    </div>
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-2" style={styleTwo}>
                        <img src={img2} alt="" className='img-fluid' />
                        <p style={textStyleTwo} className='my-4'>We make it interesting by including the the Stories of the Prophets and his Companions </p>
                    </div>
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-3" style={styleThree}>
                        <img src={img3} alt="" className='img-fluid' />
                        <p style={textStyleThree} className='my-4'>As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app</p>
                    </div>
                    <div className="col-lg col-md col-5 p-3 mx-lg-5 mx-2" style={styleFour}>
                        <img src={img4} alt="" className='img-fluid' />
                        <p style={textStyleFour} className='my-4'>Our app contains the 99 Names of Allah</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chooseus