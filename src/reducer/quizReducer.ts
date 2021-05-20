const SET_CURRENT_QUIZ = "SET_CURRENT_QUIZ";
const RESET_TIMER = "RESET_TIMER";
const DECREASE_TIMER = "DECREASE_TIMER";
const SET_SCORE = "SET_SCORE";
const INCREASE_QUESTION_NUMBER = "INCREASE_QUESTION_NUMBER";
const RESET_SELECTED_OPTION = "RESET_SELECTED_OPTION";
const SET_SELECTED_OPTION = "SET_SELECTED_OPTION";
const REGISTER_CLICK_ONCE = "REGISTER_CLICK_ONCE";
const RESET_REGISTERED_CLICK = "RESET_REGISTERED_CLICK"

export const initialQuizState: InitialQuizState = {
    currentQuiz : undefined,
    score: 0,
    currentQuestionNumber: 0,
    questionTimer: 90,
    selectedOption: undefined,
    isClicked: false
}

export function quizReducer(state : InitialQuizState, action : QuizActionTypes){
    switch (action.type) {
        case SET_CURRENT_QUIZ:
            return { ...state, currentQuiz: action.payload }
        case DECREASE_TIMER:
            return {...state, questionTimer : state.questionTimer - 1}
        case RESET_TIMER:
            return { ...state, questionTimer: 90 }
        case SET_SCORE:
            return { ...state, score: action.payload }
        case INCREASE_QUESTION_NUMBER:
            return { ...state, currentQuestionNumber: state.currentQuestionNumber + 1 }
        case RESET_SELECTED_OPTION:
            return { ...state, selectedOption: undefined }
        case SET_SELECTED_OPTION:
            return { ...state, selectedOption: action.payload }
        case REGISTER_CLICK_ONCE:
            return { ...state, isClicked: true }
        case RESET_REGISTERED_CLICK:
            return { ...state, isClicked: false}
        default:
            return state
    }   
}