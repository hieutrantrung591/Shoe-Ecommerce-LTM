import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/image/logo/logo-small.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="# ">
          <img src={logo} alt="Poseidon Logo" draggable="false" height="80"/>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item p-2">
              <Link to="/">Men</Link>  
            </li>
            <li className="nav-item p-2">
              <Link to="/about">Women</Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/contact">Special</Link>
            </li>
            <li className="nav-item p-2">
              <Link to="/projects">Sale</Link>
            </li>
          </ul>

          <form className="d-flex align-items-center w-100 form-search">
            <div className="input-group">
              <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
            </div>
            <a href="#!" className="text-white"><i className="fas fa-search ps-3"></i></a>
          </form>

          <button type="button" className="btn">
            <i class="bi bi-heart"></i>
          </button>
          <button type="button" className="btn">
            <i class="bi bi-bag"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;