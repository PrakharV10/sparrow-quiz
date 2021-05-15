type InitialQuizState = {
    currentQuiz: Quiz | undefined;
    score: number,
    currentQuestionNumber: number;
    questionTimer: number;
    selectedOption: Option | undefined;
}

type ActionTypes =
    | { type: "SET_CURRENT_QUIZ", payload: Quiz }
    | { type: "SET_SCORE", payload: number }
    | { type: "RESET_TIMER" }
    | { type: "DECREASE_TIMER" }
    | { type: "INCREASE_QUESTION_NUMBER" }
    | { type: "RESET_SELECTED_OPTION" }
    | { type: "SET_SELECTED_OPTION", payload: Option}