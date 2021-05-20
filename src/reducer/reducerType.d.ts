type InitialQuizState = {
    currentQuiz: Quiz | undefined;
    score: number,
    currentQuestionNumber: number;
    questionTimer: number;
    selectedOption: Option | undefined;
    isClicked: boolean;
}

type QuizActionTypes =
    | { type: "SET_CURRENT_QUIZ", payload: Quiz }
    | { type: "SET_SCORE", payload: number }
    | { type: "RESET_TIMER" }
    | { type: "DECREASE_TIMER" }
    | { type: "INCREASE_QUESTION_NUMBER" }
    | { type: "RESET_SELECTED_OPTION" }
    | { type: "SET_SELECTED_OPTION", payload: Option }
    | { type: "REGISTER_CLICK_ONCE" }
    | { type: "RESET_REGISTERED_CLICK" }
    

type InitialAuthState = {
    isUserLoggedIn: boolean;
    userId: string
}

type AuthActionTypes =
    | { type: "REGISTER_NEW_USER" }
    | { type: "CHECK_LOGIN_DETAILS", payload: { response: string } }
    | { type: "LOGOUT_USER"}