import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/context';
import { userTable } from '../../Data/userTable';

function LoginForm() {
	const {
		authState: { isUserLoggedIn },
		authDispatch,
	} = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const state = (location.state as LocationState) || null;

	useEffect(() => {
		isUserLoggedIn && navigate(state?.from ? state.from : '/dashboard');
	}, [isUserLoggedIn]);

	const localInputInitialState: LocalInitialStateType = {
		email: '',
		password: '',
		loading: false,
	};

	const [localInput, setLocalInput] = useState(localInputInitialState);

	function submitHandler(e: React.FormEvent) {
		setLocalInput({ ...localInput, loading: true });
		e.preventDefault();
		const user = userTable.find(
			(user) => user.email === localInput.email && user.password === localInput.password
		);
		if (user !== undefined) {
			localStorage.setItem(
				'Login',
				JSON.stringify({ userId: user.userId, isUserLoggedIn: true })
			);
			authDispatch({
				type: 'CHECK_LOGIN_DETAILS',
				payload: { response: user.userId },
			});
			setLocalInput({ ...localInput, loading: false });
			navigate('/dashboard');
		}
	}

	return (
		<form onSubmit={(e) => submitHandler(e)} className="text-center w-full px-7">
			<header className="hidden mb-10 text-white-100 text-light md:block md:text-2xl xl:text-3xl">
				Login
			</header>
			<input
				type="mail"
				placeholder="Email"
				className="input-field w-full mb-6 md:mb-5"
				value={localInput.email}
				onChange={(e) => setLocalInput({ ...localInput, email: e.target.value })}
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
				{localInput.loading ? `LOGGIN IN` : `LOGIN`}
			</button>

			<div className="text-sm text-white-100 font-regular opacity-70 mb-4 md:hidden">
				Don't have an account ?{' '}
				<span className="font-semibold">
					<Link to="/">Signup here.</Link>
				</span>
			</div>
		</form>
	);
}

export default LoginForm;
