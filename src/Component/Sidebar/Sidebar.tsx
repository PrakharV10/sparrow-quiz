import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Exit from '../../assets/svg/exit';
import { useAuth } from '../../context/authContext';

function Sidebar({ setShowSidebar, showSidebar }: SidebarProps) {
	let activeStyle = {
		color: '#0173F7',
		fontWeight: '500',
		backgroundColor: '#292C33',
	};

	const { authState, authDispatch } = useAuth();
	const navigate = useNavigate();

	function logOutHandler() {
		authDispatch({ type: 'LOGOUT_USER' });
		localStorage.removeItem('Login');
		navigate('/login');
	}

	return (
		<div
			className={`w-80 h-screen transition-all duration-300 fixed top-0 left-0 z-50 bg-black-700 ${
				!showSidebar
					? 'transform -translate-x-full opacity-0 md:-translate-x-0 md:opacity-100'
					: 'transform translate-x-0 opacity-100'
			}`}
		>
			<span className="md:hidden" onClick={() => setShowSidebar(false)}>
				<Exit />
			</span>
			<div className="pt-8 flex flex-col items-center mb-20 md:pt-12">
				<img
					className="avatar-lg mb-4"
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					alt="avatar"
				/>
				<div className="text-lg text-white-100 md:font-bold">{authState.username}</div>
			</div>

			<nav className="mb-16 md:mb-24">
				<ul className="text-center text-white-100 text-base font-light tracking-widest">
					<li className="h-16 flex justify-center items-center">
						<NavLink
							to="/dashboard"
							onClick={() => setShowSidebar(false)}
							className="w-full p-4"
							activeStyle={activeStyle}
						>
							HOME
						</NavLink>
					</li>
					<li className="h-16 flex justify-center items-center">
						<NavLink
							to="/learn"
							onClick={() => setShowSidebar(false)}
							className="w-full p-4"
							activeStyle={activeStyle}
						>
							LEARN
						</NavLink>
					</li>
					<li className="h-16 flex justify-center items-center">
						<NavLink
							to="/account"
							onClick={() => setShowSidebar(false)}
							className="w-full p-4"
							activeStyle={activeStyle}
						>
							ACCOUNT
						</NavLink>
					</li>
					<li className="h-16 flex justify-center items-center">
						<NavLink
							to="/leaderboard"
							onClick={() => setShowSidebar(false)}
							className="w-full p-4"
							activeStyle={activeStyle}
						>
							LEADERBOARD
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="text-center">
				<button
					onClick={logOutHandler}
					className="btn bg-blue-700 text-blue-100 min-w-0 w-28 text-md font-medium h-10 md:h-12 md:w-40 hover:bg-blue-600"
				>
					SIGNOUT
				</button>
			</div>
		</div>
	);
}

export default Sidebar;
