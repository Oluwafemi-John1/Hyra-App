import React from 'react'
import Navbar from './pages/Navbar'
import teach1 from '../components/assets/images/teach1.png'
import teach2 from '../components/assets/images/teach2.png'

const Ourteachings = () => {
    let boxOne = {
        borderRadius: '8px',
        background: '#0802A3'
    }

    let textSpecial = {
        fontWeight: '700'
    }

    let textOne = {
        color: '#E5E4FF',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
        textAlign: 'justify'
    }

    let boxTwo = {
        borderRadius: '8px',
        background: '#FF7676'
    }

    let textTwo = {
        color: '#FFECEC',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
        textAlign: 'justify'
    }

    return (
        <>
            <Navbar />
            <div className="container text-center teach col-lg-9">
                <div className="row mx-auto p-4">
                    <div className="col-lg col-md col-12 border mx-lg-4 mx-md-2 mx-1 p-lg-5 my-3 my-lg-0 my-md-0" style={boxOne}>
                        <img src={teach1} className='img-fluid' alt="" loading='lazy' />
                        <p className='my-4 text-justify' style={textOne}><span style={textSpecial}>Pillars of Islam:</span><br/>The Pillars of Islam are essentials and must know for all Muslims</p>
                    </div>
                    <div className="col-lg col-md col-12 border mx-lg-4 mx-md-2 mx-1 p-lg-5 my-3 my-lg-0 my-md-0" style={boxTwo}>
                        <img src={teach2} className='img-fluid' alt="" loading='lazy' />
                        <p className="my-4" style={textTwo}><span style={textSpecial}>Articles of Faith:</span><br/> The Articles of faith are important part of Islamic Teachings</p>
                    </div>
                </div>
                <div className="row mx-auto p-4">
                    <div className="col-lg col-md col-12 border mx-lg-4 mx-md-2 mx-1 p-lg-5 my-3 my-lg-0 my-md-0" style={boxOne}>
                        <img src={teach1} className='img-fluid' alt="" loading='lazy' />
                        <p className='my-4 text-justify' style={textOne}><span style={textSpecial}>Pillars of Islam:</span><br/>The Pillars of Islam are essentials and must know for all Muslims</p>
                    </div>
                    <div className="col-lg col-md col-12 border mx-lg-4 mx-md-2 mx-1 p-lg-5 my-3 my-lg-0 my-md-0" style={boxTwo}>
                        <img src={teach2} className='img-fluid' alt="" loading='lazy' />
                        <p className="my-4" style={textTwo}><span style={textSpecial}>Articles of Faith:</span><br/> The Articles of faith are important part of Islamic Teachings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourteachings