import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/image/logo/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Poseidon Logo" draggable="false" height="50" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center justify-content-center flex-grow-1">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/accounts" activeClassName="active">Account</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active">Sell</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active">Import</NavLink>
                        </li>
                        <li className="nav-item" activeClassName="active">
                            <NavLink to="/projects" activeClassName="active">Profit</NavLink>
                        </li>
                    </ul>  
                </div>
            </div>
        </nav>
    );
};

export default Navbar;