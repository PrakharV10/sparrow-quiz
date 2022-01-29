type UserType = {
	username: string;
};

type Score = {
	_id: string;
	quizId: Quiz;
	userId: UserType;
	latestScore: number;
	attempts: number;
};

type ScoreCardProps = {
	score: Score;
	index: number;
};
