import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand col-lg-3 me-0" to="/"><h3 className='ms-2 hyra'>Hyra</h3></Link>
                    <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Our Teachings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About Us</Link>
                            </li>
                        </ul>
                        <div className="d-lg-flex ms-lg-5 col-lg-3">
                            <button className="mx-lg-3 mx-1 signUpBtn px-lg-3">Sign Up</button>
                            <button className="mx-lg-3 mx-1 logInBtn px-lg-3">Log in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar