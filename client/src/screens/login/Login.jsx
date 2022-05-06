import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/image/logo/logo.png';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            console.log("email: " + email, "password: " + password);
            await axios.post('http://localhost:8080/login', {
                email: email,
                password: password
            });
            history.push('/dashboard');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    useEffect(() => {
        document.body.className = 'bg-gradient-primary';
        return () => { document.body.className = ''; }
    });

    return (
        <div className="form-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card o-hidden border-0 shadow-lg">
                        <div className="card-body p-0">
                            <div className="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div className="p-5">
                                        <form onSubmit={Auth}>
                                            <img src={logo} alt="Poseidon Logo" draggable="false" height="180" />
                                            <h3 class="title">WELCOME</h3>
                                            <p className="has-text-centered">{msg}</p>
                                            <div className="mb-3">
                                                <input type="text" className="form-control form-control-user" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="mb-4">
                                                <input type="password" className="form-control form-control-user" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <div className="mb-4 d-flex flex-row">
                                                <div className="flex-fill text-start">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" value="signed" id="checkSignIn" />
                                                        <label className="form-check-label" for="checkSignIn">
                                                            Keep me signed in
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="flex-fill text-end">
                                                    <Link to="/">Forgot your password?</Link>
                                                </div>
                                            </div>
                                            <div className="d-grid mb-4">
                                                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                                            </div>
                                            <p>
                                                Not a Member? <Link to="/register">Sign up</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;