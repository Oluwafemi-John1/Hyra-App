import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    let navigate = useNavigate()
    let linkStyle = {
        color: '#121214',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal'
    }

    const signUp = () => {
        navigate('/signup')
    }

    const logIn = () => {
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-sm py-lg-1 sticky-top top-0" id='nav' aria-label="Thirteenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarsExample11">
                        <Link className="navbar-brand col-lg-3 me-0" to="/"><h3 className='ms-lg-5 hyra'>Hyra</h3></Link>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={linkStyle}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={linkStyle}>Our Teachings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={linkStyle}>About Us</Link>
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