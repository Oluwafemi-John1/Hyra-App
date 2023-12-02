import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import Error404 from './components/Error404';
import googlePlaystore from './components/assets/svg/bxl_play-store.svg'
import insta from './components/assets/svg/skill-icons_instagram.svg'
import whatsapp from './components/assets/svg/logos_whatsapp-icon.svg'

function App() {
    let bottomStyle1 = {
        backgroundColor: '#000'
    }
    let bottomStyle2 = {
        backgroundColor: '#0802A3'
    }
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
            <div className="fixed-bottom mx-auto">
                <div className='text-center py-2' style={bottomStyle1}>
                    <img src={googlePlaystore} className='mx-1' alt="Playstore icon" />
                    <img src={insta} className='mx-2' alt="Instagram icon" />
                    <img src={whatsapp} className='mx-2' alt="Whatsapp icon" />
                </div>
                <div className='text-center text-light py-2' style={bottomStyle2}>
                    <p>2023 Copyrights: Hyra</p>
                </div>
            </div>
        </>
    )
}

export default App
