import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/image/logo/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [search, setSearch] = useState('')

  return (
    <header className="header">
      <div className="bg-light header-top">
        <div className="container-fluid">
          <div className="d-flex justify-content-end">
            <span>HELP</span>
            <span>Membership</span>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Poseidon Logo" draggable="false" height="50" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center justify-content-center flex-grow-1">
              <li className="nav-item">
                <NavLink to="/shop/men" activeClassName="active">Men</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop/women" activeClassName="active">Women</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop/special" activeClassName="active">Special</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop/sale" activeClassName="active">Sale</NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center justify-content-center flex-grow-1 input-search">
              <form className="d-flex align-items-center form-search flex-grow-1">
                <button type="submit" className="input-icon btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input 
                  type="search" 
                  className="form-control shadow-none" 
                  placeholder="Search" 
                  aria-label="Search" 
                  value={search}
                  onChange={(event) => { setSearch(event.target.value) }}
                />
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
    </header>
  )
}

export default Navbar