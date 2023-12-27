import React from 'react'
import { Link } from 'react-router-dom'

const Teachings = () => {
    let styleOne = {
        borderRadius: '8px',
        border: '1px solid #0802A3',
        textDecoration: 'none',
        color: '#4F0101',
        fontFamily: 'Inter',
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: 'normal',
        padding: '70px 0'
    }

    let styleTwo = {
        borderRadius: '8px',
        border: '1px solid #FF7676',
        textDecoration: 'none',
        color: '#4F0101',
        fontFamily: 'Inter',
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: 'normal',
        padding: '70px 0'
    }

    let styleThree = {
        borderRadius: '8px',
        border: '1px solid #FF4B91',
        textDecoration: 'none',
        color: '#4F0101',
        fontFamily: 'Inter',
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: 'normal',
        padding: '60px 0'
    }


    return (
        <>
            <p className="text-center mt-lg-5 mt-3" id='chUs'>Our Teachings</p>
            <div className="container mx-auto text-center mt-lg-5">
                <div className="row g-3 g-lg-0 g-md-0">
                    <Link className="col-lg col-md col-11 mx-lg-4 mx-2 d-flex justify-content-center align-items-center" style={styleOne}>
                        <p className='p-5'>Pillars of Islam</p>
                    </Link>

                    <Link className="col-lg col-md col-11 mx-lg-4 mx-2 d-flex justify-content-center align-items-center" style={styleTwo}>
                        <p className='p-5'>Articles of Faith</p>
                    </Link>

                    <Link className="col-lg col-md-6 mt-md-4 mt-lg-0 col-11 mx-lg-4 mx-2 d-flex justify-content-center align-items-center mx-md-auto" style={styleThree}>
                        <p className='p-5'>Stories of the Prophets</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Teachings