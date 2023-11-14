import React from 'react'
import image1 from '../components/assets/images/hyrasignup.png'


const Login = () => {
    let headStyle = {
        color: '#121214',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    }

    let labelStyle = {
        color: '#121214',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    }

    let btnStyle = {
        borderRadius: '8px',
        background: '#0802A3',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        padding: '10px',
        gap: '10px',
        border: 'none',
        height: '50px'
    }

    let helloStyle = {
        color: '#121214',
        fontFamily: 'Inter',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    }

    let rememStyle = {
        alignItems: 'flex-end',
        gap: '39px'
    }

    let checkBoxStyle = {
        borderRadius: '4px',
        background: '#0802A3'
    }

    return (
        <>
            <section id='bigSignUp'>
                <div className="container mt-5">
                    <h1 className="text-center d-lg-none d-md-none d-block" style={helloStyle}>Hello!</h1>
                    <div className="row">
                        <div className="col-lg-4 col-11 px-3 py-4 mx-auto" id='signUpDiv'>
                            <p style={headStyle} className='mb-4'>Log in to your Account</p>
                            <div className="form-group my-2">
                                <label htmlFor="" className='form-label' style={labelStyle}>Username</label>
                                <input type="text" className='form-controller-in w-100' />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="" className='form-label' style={labelStyle}>Password</label>
                                <input type="text" className='form-controller-in w-100' />
                            </div>
                            <div className="d-flex" style={rememStyle}>
                                <div>
                                    <input type="checkbox" className='ms-2' style={checkBoxStyle} />
                                    <label htmlFor="">Remember me</label>
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <button style={btnStyle} className='w-100'>Log in</button>
                            </div>
                        </div>
                        <div className="col-lg-6 p-2 d-none d-lg-block">
                            <div className="text-center py-5">
                                <img src={image1} alt="sign up image" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login