import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { useAuth } from './context/authContext';
import { Signup, Leaderboard, Login, Quiz, Result, Dashboard, Account } from './pages';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	const { authDispatch } = useAuth();
	const [showSidebar, setShowSidebar] = useState<boolean>(false);

	useEffect(() => {
		const memory = localStorage.getItem('Login');
		if (memory) {
			if (JSON.parse(memory).isUserLoggedIn)
				authDispatch({
					type: 'LOGIN_BY_LOCAL_STORAGE',
					payload: { token: JSON.parse(memory).token },
				});
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/quiz/:quizId" element={<Quiz />} />
				<Route path="/quiz/:quizId/result" element={<Result />} />
				<PrivateRoute
					path="/dashboard"
					element={
						<Dashboard showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
					}
				/>
				<PrivateRoute
					path="/leaderboard"
					element={
						<Leaderboard showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
					}
				/>
				<PrivateRoute
					path="/account"
					element={<Account showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
				/>
				<PrivateRoute path="/learn" element="" />
			</Routes>
		</div>
	);
}

export default App;
