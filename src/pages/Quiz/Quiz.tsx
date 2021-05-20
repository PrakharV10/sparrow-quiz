import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import QuestionOptions from '../../Component/QuestionOptions/QuestionOptions';
import QuestionSideBar from '../../Component/QuestionSideBar/QuestionSideBar'
import { quizzes } from '../../Data/quizQuestion';
import { initialQuizState, quizReducer } from '../../reducer/quizReducer';

function Quiz() {

    const { quizId } = useParams();
    const [{currentQuiz, currentQuestionNumber, questionTimer, score, selectedOption, isClicked}, dispatch] = useReducer(quizReducer, initialQuizState)

    useEffect(() => {
        let current = quizzes.find(quiz => quiz.id === quizId)
        if(current)
            dispatch({type : "SET_CURRENT_QUIZ", payload : current})
    }, [quizId])

    useEffect(() => {
        const t = setTimeout(() => {
            if (questionTimer > 0)
                dispatch({ type: "DECREASE_TIMER" })
            else if(questionTimer === 0) {
                dispatch({ type:"RESET_SELECTED_OPTION"})
                dispatch({ type: "INCREASE_QUESTION_NUMBER"})
                dispatch({ type: "RESET_TIMER"})
            }
        }, 1000)
        return () => clearTimeout(t)
    }, [questionTimer])


    return (
        <div className="bg-black-800 w-screen h-content min-h-screen md:flex">
            {currentQuiz && <QuestionSideBar
                topic={currentQuiz.topic}
                timer={questionTimer} />}
            
            {currentQuiz && <QuestionOptions
                selectedOption = {selectedOption}
                dispatch={dispatch}
                currentQuiz={currentQuiz}
                timer={questionTimer}
                score={score}
                quizId={quizId}
                isClicked={isClicked}
                questionNumber={currentQuestionNumber} />}
        </div>
    )
}

export default Quiz
