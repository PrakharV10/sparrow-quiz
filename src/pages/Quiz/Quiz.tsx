import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import { QuestionSideBar, ConfirmModal, QuestionOptions } from '../../Component';
import { useQuizzes } from '../../context';
import { initialQuizState, quizReducer } from '../../reducer/quizReducer';

function Quiz() {
	const { quizId } = useParams();

	const [
		{ currentQuiz, currentQuestionNumber, questionTimer, score, selectedOption, isClicked },
		dispatch,
	] = useReducer(quizReducer, initialQuizState);

	const { allQuizzes } = useQuizzes();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let current = allQuizzes.find((quiz) => quiz._id === quizId);
		if (current) dispatch({ type: 'SET_CURRENT_QUIZ', payload: current });
	}, [quizId, allQuizzes]);

	useEffect(() => {
		const t = setTimeout(() => {
			if (questionTimer > 0) dispatch({ type: 'DECREASE_TIMER' });
			else if (questionTimer === 0) {
				dispatch({ type: 'RESET_REGISTERED_CLICK' });
				dispatch({ type: 'RESET_SELECTED_OPTION' });
				dispatch({ type: 'INCREASE_QUESTION_NUMBER' });
				dispatch({ type: 'RESET_TIMER' });
			}
		}, 1000);
		return () => clearTimeout(t);
	}, [questionTimer]);

	return (
		<div className="bg-black-800 w-screen h-content min-h-screen md:flex">
			{currentQuiz && (
				<QuestionSideBar
					topic={currentQuiz.topic}
					timer={questionTimer}
					setIsOpen={setIsOpen}
				/>
			)}
			{currentQuiz && <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} />}
			{currentQuiz && (
				<QuestionOptions
					selectedOption={selectedOption}
					dispatch={dispatch}
					currentQuiz={currentQuiz}
					timer={questionTimer}
					score={score}
					quizId={quizId}
					isClicked={isClicked}
					questionNumber={currentQuestionNumber}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	);
}

export default Quiz;
