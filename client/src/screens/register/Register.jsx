import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/image/logo/logo.png';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [msg, setMsg] = useState('');
	const history = useHistory();

	const Register = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8080/register', {
				email: email,
				password: password,
				confirmPassword: confirmPassword
			});
			history.push('/login');
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
										<form onSubmit={Register} className="text-center">
											<img src={logo} alt="Poseidon Logo" draggable="false" height="180" />
											<h3 className="title">BECOME A POSEIDON MEMBER</h3>
											<p className="text-start">{msg}</p>
											<div className="mb-3">
												<input type="text" className="form-control form-control-user" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
											</div>
											<div className="mb-3">
												<input type="text" className="form-control form-control-user" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
											</div>
											<div className="mb-3">
												<input type="password" className="form-control form-control-user" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
											</div>
											<div className="mb-4">
												<input type="password" className="form-control form-control-user" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
											</div>
											<div className="d-grid mb-4">
												<button type="submit" className="btn btn-dark btn-lg btn-block">Sign up</button>
											</div>
											<p>
												Already a Member? <Link to="/login">Sign in</Link>
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

export default Register;