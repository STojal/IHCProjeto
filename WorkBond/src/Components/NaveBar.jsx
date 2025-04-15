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
            <div className="navbar-right inline">

                <label className="flex cursor-pointer gap-2">
                    <span className="label-text">Current</span>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <span className="label-text">Synthwave</span>
                </label>

                <a href="#" className="nav-link">Criar Conta</a>
                <a href="#" className="nav-link">Entrar</a>
            </div>
        </nav>
    );
}

export default NaveBar;