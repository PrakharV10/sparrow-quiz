import React from 'react';
import { Navigate, Route } from 'react-router';
import { useAuth } from '../context/context';

function PrivateRoute({ path, ...props }: PrivateRouteProps) {
	const {
		authState: { isUserLoggedIn },
	} = useAuth();

	return isUserLoggedIn ? (
		<Route path={path} {...props} />
	) : (
		<Navigate to="/login" state={{ from: path }} replace={true} />
	);
}

export default PrivateRoute;
