import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [homeColor, sethomeColor] = useState('#121214')
    const [teachColor, setteachColor] = useState('#121214')
    const [aboutColor, setaboutColor] = useState('#121214')

    let navigate = useNavigate()
    
    const signUp = () => {
        navigate('/signup')
    }

    const logIn = () => {
        navigate('/login')
    }
    
    const home = () => {
        if (teachColor === 'blue' || aboutColor === 'blue') {
            console.error('nothing here');
        } else {
            navigate('/')
            sethomeColor('blue')
        }
    }

    const teach = () => {
        if (homeColor === 'blue' || aboutColor === 'blue') {
            console.error('nothing here');
        } else {
            navigate('/ourteachings')
            setteachColor('blue')
        }
    }

    const about = () => {
        if (homeColor === 'blue' || aboutColor === 'blue') {
            console.error('nothing here');
        } else {
            navigate('/ourteachings')
            setteachColor('blue')
        }
        setaboutColor('blue')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-sm py-lg-1 bg-light" id='nav' aria-label="Thirteenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarsExample11">
                        <Link className="navbar-brand col-lg-3 me-0 animate__animated animate__pulse animate__delay-2s" to="/"><h3 className='ms-lg-5 hyra'>Hyra</h3></Link>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link active navText" aria-current="page" to="/" onClick={home} style={{color: homeColor}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navText" to="/ourteachings" style={{color: teachColor}} onClick={teach}>Our Teachings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navText" to="/aboutus" style={{color: aboutColor}} onClick={about}>About Us</Link>
                            </li>
                        </ul>
                        <div className="d-lg-flex ms-lg-5 col-lg-3">
                            <button className="mx-lg-3 mx-1 signUpBtn px-lg-3 py-lg-2" onClick={signUp}>Sign Up</button>
                            <button className="mx-lg-3 mx-1 logInBtn px-lg-3 py-lg-2" onClick={logIn}>Log in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar