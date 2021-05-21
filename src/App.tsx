import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { useAuth } from './context/context';
import Account from './pages/Account/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Learn from './pages/Learn/Learn';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Signup from './pages/Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	const { authDispatch } = useAuth();
	const [showSidebar, setShowSidebar] = useState<boolean>(false);

	useEffect(() => {
		const memory = localStorage.getItem('Login');
		if (memory) {
			authDispatch({
				type: 'LOGIN_ON_START',
				payload: { response: JSON.parse(memory).userId },
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
				<PrivateRoute
					path="/learn"
					element={<Learn showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
