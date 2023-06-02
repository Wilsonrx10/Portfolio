import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/home'
import About from '../src/pages/about'

function Roteamento() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<About/>}></Route>
            </Routes>
        </Router>
    )
}

export default Roteamento