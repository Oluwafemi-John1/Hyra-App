import React from 'react';
import image1 from '../components/assets/images/hyrasignup.png'

const Signup = () => {
    let headStyle = {
        color: '#121214',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 px-3 py-4" id='signUpDiv'>
                        <p style={headStyle}>Create an Account</p>
                    </div>
                    <div className="col-lg-6 p-2 d-none d-lg-block">
                        <div className="text-center py-5">
                            <img src={image1} alt="sign up image" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup