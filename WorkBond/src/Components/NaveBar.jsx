import './NaveBar.css';
import { Link } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import App from '../Pages/App';
//import Home from './pages/Home';
//import About from './pages/About';

function NaveBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-left">WorkBond</Link>
            <div className="navbar-right">

                <a href="#" className="nav-link">Criar Conta</a>
                <a href="#" className="nav-link">Entrar</a>
            </div>
        </nav>
    );
}

export default NaveBar;