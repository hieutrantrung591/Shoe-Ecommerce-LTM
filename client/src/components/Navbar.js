import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/image/logo/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Poseidon Logo" draggable="false" height="50"/>  
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center justify-content-center flex-grow-1">
            <li className="nav-item">
              <Link to="/">Men</Link>  
            </li>
            <li className="nav-item">
              <Link to="/about">Women</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Special</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">Sale</Link>
            </li>
          </ul>

          <div class="d-flex align-items-center justify-content-center flex-grow-1 input-search">
            <form className="d-flex align-items-center form-search flex-grow-1">
              <span className="input-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <input type="search" className="form-control shadow-none" placeholder="Search" aria-label="Search" />              
            </form>

            <button type="button" className="btn ms-2 me-2">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button type="button" className="btn">
              <FontAwesomeIcon icon={faBagShopping} />
            </button>
          </div>          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;