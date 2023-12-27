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
        lineHeight: 'normal'
    }

    let styleTwo = {
        borderRadius: '8px',
        border: '1px solid #0802A3',
        textDecoration: 'none'
    }

    let styleThree = {
        borderRadius: '8px',
        border: '1px solid #0802A3',
        textDecoration: 'none'
    }
    return (
        <>
            <p className="text-center mt-lg-5" id='chUs'>Our Teachings</p>
            <div className="container mx-auto text-center mt-lg-5">
                <div className="row g-3 g-lg-0 g-md-0">
                    <Link className="col-lg col-md col-5 p-3 mx-lg-5 mx-3" style={styleOne}>
                        <div>
                            <p className='p-5'>Our app contains the fundamental teaching of Islam for Kids</p>
                        </div>
                    </Link>

                    <Link className="col-lg col-md col-5 p-3 mx-lg-5 mx-2" style={styleTwo}>
                        <div>
                            <p className='p-5'>We make it interesting by including the the Stories of the Prophets and his Companions </p>
                        </div>
                    </Link>
                    <Link className="col-lg col-md col-5 p-3 mx-lg-5 mx-3" style={styleThree}>
                        <div>
                            <p className='p-5'>As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Teachings