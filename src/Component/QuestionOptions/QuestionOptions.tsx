import React from 'react'

function QuestionOptions({questionNumber, currentQuiz, timer} : QuestionOptionsProps) {
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
                    <div className="bg-blue-700 h-full w-2/4"></div>
                </div>
                <div className="bg-black-700 p-6 mb-10 text-sm font-light lg:text-lg lg:p-8 text-white-100 opacity-90">
                    <span className="font-medium">Q.</span> {currentQuiz?.questions[questionNumber].question}
                </div>
                {
                    currentQuiz?.questions[questionNumber].options.map((option, index) => {
                        return (
                            <div key={index} className="bg-black-700 pl-6 py-5 mb-4 text-sm font-light lg:pl-10 lg:text-lg text-white-100 opacity-90 cursor-pointer">
                                <span className="font-medium">{index+1}.</span> {option.option}
                            </div>
                        )
                    })
                }
                <button className="btn bg-blue-700 rounded-sm h-10 w-24 mt-2 min-w-0 float-right md:w-36 md:h-12 md:font-bold lg:absolute lg:bottom-10 lg:right-16">
                    NEXT
                </button>
            </div>
    )
}

export default QuestionOptions
