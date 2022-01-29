import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider, QuizzesProvider } from './context';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<QuizzesProvider>
				<Router>
					<App />
				</Router>
			</QuizzesProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
