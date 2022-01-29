import React from 'react'

function PointsPill({type, value} : PointsPillProps) {
    return (
        <div className={`w-12 h-5 rounded-sm text-xs flex justify-center items-center ${type === "positive" ? "bg-green-500" : "bg-red-600"}`}>
            {type === "positive" ? `+${value} Pts` : `-${value} Pts`}
        </div>
    )
}

export default PointsPill
