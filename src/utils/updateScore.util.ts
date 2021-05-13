function updateScore(
    currentScore: number,
    question: Question,
    selectedOption:Option) : number {
    if (selectedOption.isRight) {
        return currentScore + question.pts
    } else {
        return currentScore - question.negativePts
    }
}

export default updateScore;