import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/pages/Home'
import Contato from '../src/components/pages/Contact'
import Projects from '../src/components/pages/Projects'
import Login from '../src/components/pages/login'

function Roteamento() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </Router>
    )
}

export default Roteamento