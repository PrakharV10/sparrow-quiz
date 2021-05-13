const SET_CURRENT_QUIZ = "SET_CURRENT_QUIZ";

export const initialQuizState: InitialQuizState = {
    currentQuiz : null,
    score: 0,
    currentQuestion: 0,
}

export function reducerFunction(state : InitialQuizState, action : ActionTypes) {
    switch (action.type) {
        case SET_CURRENT_QUIZ:
            return { ...state, currentQuiz: action.payload }
        default:
            return state
    }   
}