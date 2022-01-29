import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { SERVER_URL } from '../../utils/api';
import { serverCallHandler } from '../../utils/serverCallHandler';

function LoginForm() {
	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	const localInputInitialState: LocalInitialStateType = {
		email: '',
		password: '',
		loading: false,
		errorMessage: '',
	};

	const [localInput, setLocalInput] = useState(localInputInitialState);

	async function submitHandler(e: React.FormEvent) {
		setLocalInput({ ...localInput, loading: true });
		e.preventDefault();
		await serverAuth();
		setLocalInput({ ...localInput, loading: false });
		navigate('/dashboard');
	}

	async function serverAuth() {
		const { response } = await serverCallHandler('POST', `${SERVER_URL}/login`, {
			email: localInput.email,
			password: localInput.password,
		});
		if (response.success) {
			setLocalInput({ ...localInput, errorMessage: '' });
			authDispatch({
				type: 'SAVE_LOGIN_DETAILS',
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
		<form onSubmit={(e) => submitHandler(e)} className='text-center w-full px-7'>
			<header className='hidden mb-8 text-white-100 text-light md:block md:text-2xl xl:text-3xl'>
				Login
			</header>
			{localInput.errorMessage && (
				<div className='w-full bg-red-600 text-white-100 h-14 font-light text-sm rounded-sm flex justify-center items-center mb-6 md:mb-5'>
					{localInput.errorMessage}
				</div>
			)}
			<input
				type='mail'
				placeholder='Email'
				className='input-field w-full mb-6 md:mb-5'
				value={localInput.email}
				onChange={(e) => setLocalInput({ ...localInput, email: e.target.value })}
				required
			/>
			<input
				type='password'
				placeholder='Password'
				value={localInput.password}
				onChange={(e) => setLocalInput({ ...localInput, password: e.target.value })}
				className='input-field w-full mb-7 md:mb-5'
				required
			/>
			<button
				type='submit'
				className='btn bg-blue-700 mb-7 hover:bg-blue-800 transition-colors'
			>
				{localInput.loading ? `LOGGIN IN` : `LOGIN`}
			</button>
			<div className='text-white-100 opacity-90 font-light md:-mt-2 text-sm  mb-2'>
				Fancy a Sneek peak? Use{' '}
				<span
					onClick={() =>
						setLocalInput({
							...localInput,
							email: 'johndoe@gmail.com',
							password: '123456',
						})
					}
					className='opacity-100 text-blue-400 font-semibold cursor-pointer hover:text-blue-500'
				>
					Guest Credentials
				</span>
			</div>

			<div className='text-sm text-white-100 font-regular opacity-70 mb-4 md:hidden'>
				Don't have an account ?{' '}
				<span className='font-semibold'>
					<Link to='/'>Signup here.</Link>
				</span>
			</div>
		</form>
	);
}

export default LoginForm;
