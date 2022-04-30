import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { email: email, password: password };
        axios.post("http://localhost:8080/account/login", data).then((response) => {
            console.log(response.data);
        });
    };

    return(
        <div className="login-background">
            <div className="login-container">
                <div className="login-content row">
                    <div className="col-12 text-center login-title">Login</div>
                    <div className="col-12 form-group">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control login-input"
                            placeholder="Enter your email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <div className="col-12 form-group">
                        <label>Password: </label>
                        <div className="login-password">
                            <input
                                type='password'
                                className="form-control login-input"
                                placeholder="Enter your password"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />
                            {/* <span onClick={() => this.handleShowHidePassword()}>
                                <i className={this.state.showPassword ? 'fas fa-eye show-password' : 'fas fa-eye-slash show-password'} ></i>
                            </span> */}
                        </div>
                    </div>
                    <div className="col-12">
                        <button
                            className="btn-login"
                            onClick={login}
                        >Login</button>
                    </div>
                    <div className="col-12">
                        <span className="forgot-password">Forgot your password?</span>
                    </div>
                    <div className="col-12 text-center login-with mt-3">
                        <span className="">Or login with:</span>
                    </div>
                    <div className="col-12 social-login">
                        <i className="fab fa-facebook social-icon fb"></i>
                        <i className="fab fa-google-plus social-icon gg"></i>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Login;