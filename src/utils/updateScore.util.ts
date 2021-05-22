function updateScore(currentScore: number, question: Question, option: Option): number {
	if (option.isRight) {
		return currentScore + question.pts;
	} else {
		return currentScore - question.negativePts;
	}
}

export default updateScore;
