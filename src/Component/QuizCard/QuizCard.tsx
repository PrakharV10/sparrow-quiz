import React from 'react'
import { useNavigate } from 'react-router'
import PointsPill from '../PointsPill/PointsPill'

function QuizCard({ quiz }: QuizCardProps) {
    const naviagte = useNavigate();
    return (
        <div onClick={() => naviagte(`/quiz/${quiz.id}`)} className="h-32 w-96 max-w-sm bg-black-700 m-auto mb-10 rounded-md flex overflow-hidden cursor-pointer">
            <img className="w-32" src={quiz.image} alt="quiz-pic" />
            <div className="p-4">
                <div className="font-medium text-sm text-white-100 mb-2">{quiz.topic}</div>
                <div className="font-light text-sm text-white-100 mb-5 opacity-80">Max : {quiz.maximum} Points</div>
                <div className="flex w-28 justify-between">
                    <PointsPill type="positive" value={quiz.questions[0].pts} />
                    <PointsPill type="negative" value={quiz.questions[0].negativePts} />
                </div>
            </div>
        </div>
    )
}

export default QuizCard
