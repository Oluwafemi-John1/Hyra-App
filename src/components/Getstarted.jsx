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
        background: '#FFF',
        color: '#FF4B91',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        padding: '10px',
        textDecoration: 'none',
        margin: '80px'
    }

    return (
        <>
            <div className='container-fluid get-started-with-us mt-lg-5'>
                <div className="row">
                    <div className="col-6 p-lg-5 p-md-3 p-1">
                        <p style={paraStyle} className='paraGetStarted'>The Prophet (S.A.W) said “Seeking knowledge is an obligation upon every Muslim”</p>
                        <Link style={linkStyle}>
                            Get started with us
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7251 13.3603L16.5303 20.0889L15.4362 18.9204L20.6376 14.057L2.57896 13.4504L2.63267 11.8513L20.6913 12.4579L15.8279 7.25813L16.9981 6.164L23.7251 13.3603Z" fill="#FF4B91" />
                            </svg>
                        </Link>
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