const CHECK_LOGIN_DETAILS = 'CHECK_LOGIN_DETAILS';
const LOGOUT_USER = 'LOGOUT_USER';
const LOGIN_ON_START = 'LOGIN_ON_START';
const REGISTER_NEW_USER = 'REGISTER_NEW_USER';

export const initialAuthState: InitialAuthState = {
	isUserLoggedIn: false,
	userId: '',
};

export function authReducer(state: InitialAuthState, action: AuthActionTypes) {
	switch (action.type) {
		case CHECK_LOGIN_DETAILS:
			return {
				...state,
				isUserLoggedIn: true,
				userId: action.payload.response,
			};
		case LOGOUT_USER:
			return { ...state, isUserLoggedIn: false, userId: '' };
		case LOGIN_ON_START:
			return {
				...state,
				isUserLoggedIn: true,
				userId: action.payload.response,
			};
		case REGISTER_NEW_USER:
			return { ...state, isUserLoggedIn: true, userId: action.payload.response };
		default:
			return state;
	}
}
