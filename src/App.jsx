import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'
import Signup from './components/Signup';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </>
    )
}

export default App
