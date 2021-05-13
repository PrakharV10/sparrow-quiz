import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router'
import QuestionSideBar from '../../Component/QuestionSideBar/QuestionSideBar'
import { quizzes } from '../../Data/quizQuestion';
import { initialQuizState, reducerFunction } from '../../reducer/quizReducer';

function Quiz() {

    const { quizId } = useParams();
    const [{currentQuiz}, dispatch] = useReducer(reducerFunction, initialQuizState)

    useEffect(() => {
        const current = quizzes.filter(quiz => quiz.id === quizId)
        dispatch({type : "SET_CURRENT_QUIZ", payload : current})
    }, [])

    return (
        <div className="bg-black-800 w-screen h-content min-h-screen md:flex">
            <QuestionSideBar />
            <div className="px-7 pt-5 relative min-h-screen h-content md:w-3/5 xl:w-2/3 md:px-10 md:pt-10 xl:px-16">
                <header className="flex justify-between items-center pb-8 md:hidden">
                    <svg className="w-5 h-5 text-white-100" viewBox="0 0 24 24"><path d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z" fill="currentColor"></path></svg>
                    <div className="text-white-100 font-bold">{currentQuiz && currentQuiz}</div>
                    <div></div>
                </header>
                <div className="flex justify-between align-baseline md:block">
                    <div className="text-white-100 font-medium xl:text-xl xl:font-light">
                        Question 7 of 10
                    </div>
                    <div className="text-white-100 font-light text-sm md:hidden">
                        0 : 26 secs
                    </div>
                </div>
                <div className="mt-3 mb-8 xl:mb-12 h-0.5 w-full bg-gray-800">
                    <div className="bg-blue-700 h-full w-2/4"></div>
                </div>
                <div className="bg-black-700 p-6 mb-10 text-sm font-light lg:text-lg lg:p-8 text-white-100 opacity-90">
                    <span className="font-medium">Q.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet magna scelerisque vitae et id neque sed?
                </div>
                <div className="bg-black-700 pl-10 py-5 mb-4 text-sm font-light lg:text-lg text-white-100 opacity-90 cursor-pointer">
                    <span className="font-medium">A.</span> Lorem Ipsum Blah Blah Option
                </div>
                <div className="bg-black-700 pl-10 py-5 mb-4 text-sm font-light lg:text-lg text-white-100 opacity-90 cursor-pointer">
                    <span className="font-medium">A.</span> Lorem Ipsum Blah Blah Option
                </div>
                <div className="bg-black-700 border-3 border-blue-700 pl-10 py-5 mb-4 text-sm font-light lg:text-lg text-white-100 opacity-90 cursor-pointer">
                    <span className="font-medium">A.</span> Lorem Ipsum Blah Blah Option
                </div>
                <div className="bg-black-700 pl-10 py-5 mb-4 text-sm font-light lg:text-lg text-white-100 opacity-90 cursor-pointer">
                    <span className="font-medium">A.</span> Lorem Ipsum Blah Blah Option
                </div>
                <button className="btn bg-blue-700 rounded-sm h-10 w-24 mt-2 min-w-0 float-right md:w-36 md:h-12 md:font-bold lg:absolute lg:bottom-10 lg:right-16">
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default Quiz
