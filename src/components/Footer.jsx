import React from 'react'
import googlePlaystore from '../components/assets/svg/bxl_play-store.svg'
import insta from '../components/assets/svg/skill-icons_instagram.svg'
import whatsapp from '../components/assets/svg/logos_whatsapp-icon.svg'


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
                    <img src={googlePlaystore} className='mx-1' alt="Playstore icon" />
                    <img src={insta} className='mx-2' alt="Instagram icon" />
                    <img src={whatsapp} className='mx-2' alt="Whatsapp icon" />
                </div>
                <div className='text-center text-light py-2' style={bottomStyle2}>
                    2023 Copyrights: Hyra
                </div>
            </div>
        </>
    )
}

export default Footer