type AuthContextValue = {
	authState: InitialAuthState;
	authDispatch: React.Dispatch;
};

type ContextProp = {
	children: React.ReactNode;
};

type QuizzesContextValue = {
	allQuizzes: Quizzes;
	setAllQuizzes: React.Dispatch;
};
