import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../Component/LoginForm/LoginForm';
import { useAuth } from '../../context/authContext';

function Login() {
	const {
		authState: { isUserLoggedIn },
	} = useAuth();

	let navigate = useNavigate();
	let location = useLocation();

	const state = (location.state as LocationState) || null;

	useEffect(() => {
		isUserLoggedIn && navigate(state?.from ? state.from : '/dashboard');
	}, [isUserLoggedIn]);

	return (
		<div className="min-w-screen min-h-screen flex flex-col md:flex-row">
			<div className="bg-black-700 h-64 py-4 px-7 w-full flex flex-col justify-center items-center md:h-screen md:w-2/4 md:relative md:items-start xl:p-24 ">
				<div className="logo w-full md:absolute md:top-8 md:left-8 xl:top-24 xl:left-24">
					sparrow
				</div>
				<div className="font-regular text-lg text-white-100 w-full pt-7 xl:text-2xl">
					Welcome Back!
				</div>
				<p className="text-sm font-light text-gray-300 pt-4 w-full md:mb-14 xl:w-4/5 xl:text-lg">
					We know you loved your previous experience, and are back for some more...
					<br />
					Check out the new Quizzes we have in store for you. Did you beat your personal
					best yet?
				</p>
				<div className="hidden text-white-100 opacity-80 md:block md:font-extralight md:text-sm xl:text-base xl:font-light">
					Didn't get the above refrence?{' '}
					<span className="md:font-normal xl:font-semibold">
						<Link to="/">Signup now!!</Link>
					</span>
				</div>
			</div>
			<div className="bg-black-800 h-full flex-1 pt-12 md:flex md:w-2/4 md:h-screen md:flex-col md:justify-center md:items-center xl:px-20">
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
