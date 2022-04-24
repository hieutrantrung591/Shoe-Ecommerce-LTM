import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div class="container">
            <footer class="py-5">
                <div class="row">
                    <div class="col-3">
                        <h5>Support</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">Order Status</a></li>
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">Delivery</a></li>
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">Return Policy</a></li>
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">Store Location</a></li>
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-3">
                        <h5>About Poseidon</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">About Us</a></li>
                            <li class="nav-item mb-2"><a href="# " class="nav-link p-0 text-muted">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-5 offset-1">
                        <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of whats new and exciting from us.</p>
                        <div class="d-flex w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex justify-content-between py-4 my-4 border-top">
                    <p>&copy; POSEIDON SE, 2021. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3">
                            <a class="link-dark" href="# ">
                                <FontAwesomeIcon icon={ faTwitter } />
                            </a>
                        </li>
                        <li class="ms-3"><a class="link-dark" href="# "><FontAwesomeIcon icon={ faInstagram } /></a></li>
                        <li class="ms-3"><a class="link-dark" href="# "><FontAwesomeIcon icon={ faFacebook } /></a></li>
                    </ul>
                </div>
            </footer>
            </div>
    );
}

export default Footer;