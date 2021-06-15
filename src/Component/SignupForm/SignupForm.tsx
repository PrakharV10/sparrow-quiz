import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { SERVER_URL } from '../../utils/api';
import { serverCallHandler } from '../../utils/serverCallHandler';

function SignupForm() {
	const initialSignupState: InitalSignupState = {
		username: '',
		email: '',
		password: '',
		loading: false,
		errorMessage: '',
	};

	const [localInput, setLocalInput] = useState(initialSignupState);

	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	async function submitHandler(e: React.FormEvent) {
		setLocalInput({ ...localInput, loading: true });
		e.preventDefault();
		await serverCheckAndSave();
		setLocalInput({ ...localInput, loading: false });
		navigate('/dashboard');
	}

	async function serverCheckAndSave() {
		const { response } = await serverCallHandler('POST', `${SERVER_URL}/signup`, {
			email: localInput.email,
			password: localInput.password,
			username: localInput.username,
		});
		if (response.success) {
			setLocalInput({ ...localInput, errorMessage: '' });
			authDispatch({
				type: 'SAVE_SIGNUP_DETAILS',
				payload: {
					username: response.data.username,
					email: response.data.email,
					token: response.token,
				},
			});
			localStorage.setItem(
				'Login',
				JSON.stringify({ token: response.token, isUserLoggedIn: true })
			);
		} else {
			setLocalInput({ ...localInput, errorMessage: response.message });
		}
	}

	return (
		<form onSubmit={(e) => submitHandler(e)} className="text-center w-full px-7">
			<header className="hidden text-white-100 mb-10 text-light md:block md:text-2xl xl:text-3xl">
				Create Account
			</header>
			{localInput.errorMessage && (
				<div className="w-full bg-red-600 text-white-100 h-14 font-light text-sm rounded-sm flex justify-center items-center mb-6 md:mb-5">
					{localInput.errorMessage}
				</div>
			)}
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
				{localInput.loading ? `SIGNING IN` : `SIGN UP`}
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
