import React from 'react'
import googlePlaystore from '../components/assets/svg/bxl_play-store.svg'
import insta from '../components/assets/svg/skill-icons_instagram.svg'
import whatsapp from '../components/assets/svg/logos_whatsapp-icon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    let bottomStyle1 = {
        backgroundColor: '#000'
    }
    let bottomStyle2 = {
        backgroundColor: '#0802A3'
    }
    return (
        <>
            <div className="mx-auto">
                <div className='text-center py-2' style={bottomStyle1}>
                    <Link to='/'>
                        <img src={googlePlaystore} className='mx-1' alt="Playstore icon" />
                    </Link>
                    <Link to='/'>
                        <img src={insta} className='mx-2' alt="Instagram icon" />
                    </Link>
                    <Link to='/'>
                        <img src={whatsapp} className='mx-2' alt="Whatsapp icon" />
                    </Link>
                </div>
                <div className='text-center text-light py-2' style={bottomStyle2}>
                    2023 Copyright: Hyra
                </div>
            </div>
        </>
    )
}

export default Footer