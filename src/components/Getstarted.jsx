import React from 'react'
import simage from '../components/assets/images/simage.png'
import { Link } from 'react-router-dom'

const Getstarted = () => {
    let paraStyle = {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '48px',
    }

    let linkStyle = {
        borderRadius: '5.821px',
        background: '#FFF'
    }

    return (
        <>
            <div className='container-fluid get-started-with-us mt-lg-5'>
                <div className="row">
                    <div className="col-6 p-lg-5 p-md-3 p-1">
                        <p style={paraStyle} className='paraGetStarted'>The Prophet (S.A.W) said “Seeking knowledge is an obligation upon every Muslim”</p>
                        <Link style={linkStyle}>Get started with us </Link>
                    </div>
                    <div className="col-6 py-3 text-end pe-5">
                        <img src={simage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getstarted