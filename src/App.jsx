import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </>
    )
}

export default App
