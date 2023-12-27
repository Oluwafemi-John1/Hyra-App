import React from 'react'
import simage from '../components/assets/images/simage.png'

const Getstarted = () => {
    return (
        <>
            <div className='container-fluid get-started-with-us'>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6 py-3">
                        <img src={simage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getstarted