import React from 'react'
import { useNavigate } from 'react-router'
import updateScore from '../../utils/updateScore.util'

function QuestionOptions({ questionNumber, currentQuiz, timer, score, selectedOption, dispatch, quizId }: QuestionOptionsProps) {

    const navigate = useNavigate();

    function nextButtonHandler() {
        if (selectedOption !== undefined) {
            const response = updateScore(score, currentQuiz.questions[questionNumber], selectedOption)
            dispatch({ type: "RESET_SELECTED_OPTION"})
            dispatch({ type: "SET_SCORE", payload: response })
            if (questionNumber + 1 === currentQuiz.questions.length) {
                localStorage.setItem('score', JSON.stringify({ score: score }));
                navigate(`/quiz/${quizId}/result`)
            } else {
                dispatch({ type: "INCREASE_QUESTION_NUMBER" })
                dispatch({ type: "RESET_TIMER" })
            }
        }
    }


    return (
        <div className="px-7 pt-5 relative min-h-screen h-content md:w-3/5 xl:w-2/3 md:px-10 md:pt-10 xl:px-16">
            <header className="flex justify-between items-center pb-8 md:hidden">
                <svg className="w-5 h-5 text-white-100" viewBox="0 0 24 24"><path d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z" fill="currentColor"></path></svg>
                <div className="text-white-100 font-bold">{currentQuiz?.topic}</div>
                <div></div>
            </header>
            <div className="flex justify-between align-baseline md:block">
                <div className="text-white-100 font-medium xl:text-xl xl:font-light">
                    {`Question ${questionNumber+1} of ${currentQuiz?.questions.length}`}
                </div>
                <div className="text-white-100 font-light text-sm md:hidden">
                    {timer} secs
                </div>
            </div>
            <div className="mt-3 mb-8 xl:mb-12 h-0.5 w-full bg-gray-800">
                <div style={{width : `${((questionNumber+1)/currentQuiz?.questions.length)*100}%`}} className="bg-blue-700 h-full transition-all"></div>
            </div>
            <div className="bg-black-700 p-6 mb-10 text-sm font-light lg:text-lg lg:p-8 text-white-100 opacity-90">
                <span className="font-medium">Q.</span> {currentQuiz?.questions[questionNumber].question}
            </div>
            {
                currentQuiz?.questions[questionNumber].options.map((option, index) => {
                    return (
                        <div
                            onClick={() => dispatch({ type: "SET_SELECTED_OPTION", payload: option })}
                            key={option.id}
                            className={`${option.id === selectedOption?.id ? "bg-blue-700" : "bg-black-700"} px-6 py-5 mb-4 text-sm font-light lg:pl-10 lg:text-lg text-white-100 opacity-90 cursor-pointer transition-colors`}
                        >
                            <span className="font-medium">{index+1}.</span> {option.option}
                        </div>
                    )
                })
            }

            <div className="flex justify-between items-center mt-2 md:absolute md:bottom-10 md:right-10 md:left-10 lg:right-16 lg:left-16">
                <span className={`${score >= 0 ? `text-green-500` : `text-red-500`} font-medium lg:text-xl`}>Score : {score}</span>
                <button
                    onClick={nextButtonHandler}
                    disabled={selectedOption !== undefined ? false : true}
                    className="btn bg-blue-700 rounded-sm h-10 w-24 mt-2 min-w-0 md:w-36 md:h-12 md:font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    NEXT
                </button>   
            </div>
            </div>
    )
}

export default QuestionOptions
