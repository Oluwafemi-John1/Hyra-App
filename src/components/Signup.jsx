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
                    <div className="col-lg-4 col-11 px-3 py-4 mx-auto" id='signUpDiv'>
                        <p style={headStyle} className='mb-4'>Create an Account</p>
                        <div className="form-group my-2">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-controller w-100' />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-controller w-100' />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-controller w-100' />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-controller w-100' />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" className='form-controller w-100' />
                        </div>
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