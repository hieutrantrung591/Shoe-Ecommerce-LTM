import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h5>Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">Order Status</a></li>
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">Delivery</a></li>
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">Return Policy</a></li>
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">Store Location</a></li>
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h5>About <span className="text-red">Poseidon</span></h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">About Us</a></li>
                            <li className="nav-item mb-2"><a href="# " className="nav-link p-0 text-muted">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-5 offset-1">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-between py-4 mt-4 border-top">
                    <p>&copy; POSEIDON SE, 2021. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-white" href="# ">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="ms-3"><a className="link-white" href="# "><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className="ms-3"><a className="link-white" href="# "><FontAwesomeIcon icon={faFacebook} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer