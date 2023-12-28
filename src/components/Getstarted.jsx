import React from 'react'
import simage from '../components/assets/images/simage.png'

const Getstarted = () => {
    let paraStyle = {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '48px',
        padding: '5px 12%'
    }

    return (
        <>
            <div className='container-fluid get-started-with-us'>
                <div className="row">
                    <div className="col-6 p-5">
                        <p style={paraStyle} className='paraGetStarted'>The Prophet (S.A.W) said “Seeking knowledge is an obligation upon every Muslim”</p>
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