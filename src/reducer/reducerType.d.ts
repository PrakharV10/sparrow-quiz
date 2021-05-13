type InitialQuizState = {
    currentQuiz: Quiz | null;
    score: number,
    currentQuestion: 0;
}

type ActionTypes = {type : "SET_CURRENT_QUIZ", payload : Quiz}