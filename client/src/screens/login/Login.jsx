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

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8080/login', {
				email: email,
				password: password
			});
			history.push('/');
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
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10 col-lg-12 col-md-9">
					<div className="card o-hidden border-0 shadow-lg my-5">
						<div className="card-body p-0">
							<div className="row">
								<div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
								<div className="col-lg-6">
									<div className="p-5">
										<form onSubmit={handleLogin} className="text-center">
											<img src={logo} alt="Poseidon Logo" draggable="false" height="180" />
											<h3 className="title text-center">WELCOME</h3>
											<p className="text-center">{msg}</p>
											<div className="mb-3">
												<input 
													type="text" 
													className="form-control form-control-user" 
													placeholder="Email address" 
													onChange={(e) => setEmail(e.target.value)} />
											</div>
											<div className="mb-4">
												<input 
													type="password"
													className="form-control form-control-user"
													placeholder="Password"
													onChange={(e) => setPassword(e.target.value)} />
											</div>
											<div className="mb-4 d-flex flex-row">
												<div className="flex-fill text-start">
													<div className="form-check">
														<input type="checkbox" className="form-check-input" value="signed" id="checkSignIn" />
														<label className="form-check-label" htmlFor="checkSignIn">
															Remember me
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