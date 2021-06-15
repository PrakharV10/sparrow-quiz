type InitialQuizState = {
	currentQuiz: Quiz | undefined;
	score: number;
	currentQuestionNumber: number;
	questionTimer: number;
	selectedOption: Option | undefined;
	isClicked: boolean;
};

type QuizActionTypes =
	| { type: 'SET_CURRENT_QUIZ'; payload: Quiz }
	| { type: 'RESET_TIMER' }
	| { type: 'DECREASE_TIMER' }
	| { type: 'INCREASE_QUESTION_NUMBER' }
	| { type: 'RESET_SELECTED_OPTION' }
	| { type: 'SET_SELECTED_OPTION_AND_SCORE'; payload: { option: Option; score: number } }
	| { type: 'REGISTER_CLICK_ONCE' }
	| { type: 'RESET_REGISTERED_CLICK' };

type InitialAuthState = {
	isUserLoggedIn: boolean;
	username: string;
	email: string;
	authToken: string | null;
};

type AuthActionTypes =
	| { type: 'SAVE_SIGNUP_DETAILS'; payload: { username: string; email: string; token: string } }
	| { type: 'SAVE_LOGIN_DETAILS'; payload: { username: string; email: string; token: string } }
	| { type: 'LOGOUT_USER' }
	| { type: 'LOGIN_BY_LOCAL_STORAGE'; payload: { token: string } }
	| {
			type: 'SAVE_USER_DETAILS_FROM_SERVER';
			payload: { userId: string; username: string; email: string };
	  };
