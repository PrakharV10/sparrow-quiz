const SAVE_LOGIN_DETAILS = 'SAVE_LOGIN_DETAILS';
const LOGOUT_USER = 'LOGOUT_USER';
const LOGIN_BY_LOCAL_STORAGE = 'LOGIN_BY_LOCAL_STORAGE';
const SAVE_SIGNUP_DETAILS = 'SAVE_SIGNUP_DETAILS';
const SAVE_USER_DETAILS_FROM_SERVER = 'SAVE_USER_DETAILS_FROM_SERVER';

export const initialAuthState: InitialAuthState = {
	isUserLoggedIn: false,
	username: '',
	email: '',
	authToken: null,
};

export function authReducer(state: InitialAuthState, action: AuthActionTypes) {
	switch (action.type) {
		case SAVE_LOGIN_DETAILS:
			return {
				...state,
				isUserLoggedIn: true,
				authToken: action.payload.token,
				email: action.payload.email,
				username: action.payload.username,
			};
		case LOGOUT_USER:
			return { ...state, isUserLoggedIn: false };
		case LOGIN_BY_LOCAL_STORAGE:
			return {
				...state,
				isUserLoggedIn: true,
				authToken: action.payload.token,
			};
		case SAVE_SIGNUP_DETAILS:
			return {
				...state,
				isUserLoggedIn: true,
				token: action.payload.token,
				email: action.payload.email,
				username: action.payload.username,
			};
		case SAVE_USER_DETAILS_FROM_SERVER:
			return {
				...state,
				username: action.payload.username,
				email: action.payload.email,
			};
		default:
			return state;
	}
}
