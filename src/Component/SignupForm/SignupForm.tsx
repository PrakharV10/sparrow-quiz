import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/context';

function SignupForm() {
	const initialSignupState: InitalSignupState = {
		username: '',
		email: '',
		password: '',
	};

	const [localInput, setLocalInput] = useState(initialSignupState);

	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	function submitHandler(e: React.FormEvent) {
		e.preventDefault();
		localStorage.setItem(
			'Login',
			JSON.stringify({
				userId: '12345',
				username: localInput.username,
				email: localInput.email,
				password: localInput.password,
			})
		);
		authDispatch({ type: 'REGISTER_NEW_USER', payload: { response: '12345' } });
		navigate('/dashboard');
	}

	return (
		<form onSubmit={(e) => submitHandler(e)} className="text-center w-full px-7">
			<header className="hidden text-white-100 mb-10 text-light md:block md:text-2xl xl:text-3xl">
				Create Account
			</header>
			<input
				type="text"
				placeholder="Name"
				value={localInput.username}
				onChange={(e) => setLocalInput({ ...localInput, username: e.target.value })}
				className="input-field w-full mb-6 md:mb-5"
				required
			/>
			<input
				type="mail"
				placeholder="Email"
				value={localInput.email}
				onChange={(e) => setLocalInput({ ...localInput, email: e.target.value })}
				className="input-field w-full mb-6 md:mb-5"
				required
			/>
			<input
				type="password"
				placeholder="Password"
				value={localInput.password}
				onChange={(e) => setLocalInput({ ...localInput, password: e.target.value })}
				className="input-field w-full mb-7 md:mb-5"
				required
			/>
			<button
				type="submit"
				className="btn bg-blue-700 mb-7 hover:bg-blue-800 transition-colors"
			>
				SIGNUP
			</button>
			<div className="text-sm text-white-100 font-regular opacity-70 mb-4 md:hidden">
				Already have an account ?{' '}
				<span className="font-semibold">
					<Link to="/login">Login here.</Link>
				</span>
			</div>
		</form>
	);
}

export default SignupForm;
