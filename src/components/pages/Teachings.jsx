import React from 'react'
import { Link } from 'react-router-dom'

const Teachings = () => {
    return (
        <>
            <p className="text-center mt-lg-5" id='chUs'>Our Teachings</p>
            <div className="container mx-auto text-center mt-lg-5">
                <div className="row g-3 g-lg-0 g-md-0">
                    <Link className="col-lg col-md col-5 p-3 mx-lg-5 mx-3">
                        <div>
                            <p className='p-5'>Our app contains the fundamental teaching of Islam for Kids</p>
                        </div>
                    </Link>

                    <Link className="col-lg col-md col-5 p-3 mx-lg-5 mx-2">
                        <div>
                            <p className='my-4'>We make it interesting by including the the Stories of the Prophets and his Companions </p>
                        </div>
                    </Link>
                    <Link className="col-lg col-md col-5 p-3 mx-lg-5 mx-3">
                        <div>
                            <p className='my-4'>As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Teachings