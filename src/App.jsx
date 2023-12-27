import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import Error404 from './components/Error404';
import 'animate.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='*' element={<Error404/>} />
                <Route path='/ourteachings' element={<Ourteachings/>} />
            </Routes>
           
        </>
    )
}

export default App
