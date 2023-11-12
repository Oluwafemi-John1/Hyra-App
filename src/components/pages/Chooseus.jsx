import React from 'react';


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
  return (
    <>
        <p className="text-center mt-lg-5" id='chUs'>Why Choose Us</p>
        <div className="container-fluid border border-danger mx-auto text-center">
            <div className="row g-3 g-lg-0 g-md-0">
                <div className="col-lg col-md col-5 border border-info p-3 mx-lg-5 mx-2" style={styleOne}>
                    <img src="" alt="" className='img-fluid' />
                </div>
                <div className="col-lg col-md col-5 border border-primary p-3 mx-lg-5 mx-2" style={styleTwo}></div>
                <div className="col-lg col-md col-5 border border-warning p-3 mx-lg-5 mx-2" style={styleThree}></div>
                <div className="col-lg col-md col-5 border border-dark p-3 mx-lg-5 mx-2" style={styleFour}></div>
            </div>
        </div>
    </>
  )
}

export default Chooseus