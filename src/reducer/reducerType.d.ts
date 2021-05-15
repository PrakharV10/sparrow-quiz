type InitialQuizState = {
    currentQuiz: Quiz | undefined;
    score: number,
    currentQuestionNumber: 0;
    questionTimer : number
}

type ActionTypes =
    | { type: "SET_CURRENT_QUIZ", payload: Quiz }
    | { type: "RESET_TIMER" }
    | { type: "DECREASE_TIMER" }