import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import QuestionOptions from '../../Component/QuestionOptions/QuestionOptions';
import QuestionSideBar from '../../Component/QuestionSideBar/QuestionSideBar'
import { quizzes } from '../../Data/quizQuestion';
import { initialQuizState, reducerFunction } from '../../reducer/quizReducer';

function Quiz() {

    const { quizId } = useParams();
    const [{currentQuiz, currentQuestionNumber, questionTimer}, dispatch] = useReducer(reducerFunction, initialQuizState)

    useEffect(() => {
        let current = quizzes.find(quiz => quiz.id === quizId)
        if(current)
            dispatch({type : "SET_CURRENT_QUIZ", payload : current})
    }, [quizId])

    useEffect(() => {
        if (questionTimer > 0)
            setTimeout(() => {
                dispatch({type : "DECREASE_TIMER"})
            }, 1000)
    },[questionTimer])

    return (
        <div className="bg-black-800 w-screen h-content min-h-screen md:flex">
            {currentQuiz && <QuestionSideBar
                topic={currentQuiz.topic}
                timer={questionTimer} />}
            
            {currentQuiz && <QuestionOptions
                currentQuiz={currentQuiz}
                timer = {questionTimer}
                questionNumber={currentQuestionNumber} />}
        </div>
    )
}

export default Quiz
