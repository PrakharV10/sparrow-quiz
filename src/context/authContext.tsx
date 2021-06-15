import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { authReducer, initialAuthState } from '../reducer/authReducer';
import { serverCallHandler, setupAuthHeaderForServiceCalls } from '../utils/serverCallHandler';
import { SERVER_URL } from '../utils/api';

const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: ContextProp) {
	const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

	const getUserDetails = async () => {
		const { response } = await serverCallHandler('GET', `${SERVER_URL}/user`);
		if (response.success) {
			authDispatch({
				type: 'SAVE_USER_DETAILS_FROM_SERVER',
				payload: {
					userId: response.data._id,
					username: response.data.username,
					email: response.data.email,
				},
			});
		}
	};

	useEffect(() => {
		(async function () {
			if (authState.isUserLoggedIn && typeof authState.authToken === 'string') {
				await setupAuthHeaderForServiceCalls(authState.authToken);
				await getUserDetails();
			}
		})();
	}, [authState.isUserLoggedIn]);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
