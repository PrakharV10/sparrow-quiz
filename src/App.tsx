import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useAuth } from './context/context';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import Signup from './pages/Signup/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	const { authDispatch } = useAuth();

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
				<PrivateRoute path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
