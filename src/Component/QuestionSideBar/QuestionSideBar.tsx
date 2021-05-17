import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';


function QuestionSideBar({ topic, timer}: QuestionSideBarProps) {
    
    return (
        <div className="bg-black-700 pt-10 pb-9 flex-col justify-between items-center hidden md:flex md:w-2/5 xl:w-1/3 h-screen">
            <h1 className="text-2xl font-bold text-white-100">
                {topic}
            </h1>
            <div className="w-56 h-56">
                <CircularProgressbar
                    value={(timer/90)*100}
                    text={`${timer} Secs`}
                    strokeWidth={3}
                    styles={
                        buildStyles({
                            pathColor: "#0173F7",
                            textSize: "10px",
                            textColor: "#ffffff",
                            trailColor: "#4A4D51"
                        })
                    }
                />
            </div>
            <button className="bg-blue-700 w-36 h-12 rounded-sm font-bold text-lg text-white-100">
                LEAVE
            </button>
        </div>
    )
}

export default QuestionSideBar
