const SET_CURRENT_QUIZ = "SET_CURRENT_QUIZ";
const RESET_TIMER = "RESET_TIMER";
const DECREASE_TIMER = "DECREASE_TIMER";

export const initialQuizState: InitialQuizState = {
    currentQuiz : undefined,
    score: 0,
    currentQuestionNumber: 0,
    questionTimer : 90
}

export function reducerFunction(state : InitialQuizState, action : ActionTypes) {
    switch (action.type) {
        case SET_CURRENT_QUIZ:
            return { ...state, currentQuiz: action.payload }
        case DECREASE_TIMER:
            return {...state, questionTimer : state.questionTimer - 1}
        case RESET_TIMER:
            return {...state, questionTimer : 90}
        default:
            return state
    }   
}