import React from 'react';
import image1 from '../components/assets/images/hyrasignup.png'

const Signup = () => {
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 border border-danger p-2"></div>
                <div className="col-lg-6 border border-info p-2 d-none d-lg-block">
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