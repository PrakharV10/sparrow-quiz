import React from 'react';
import { useNavigate } from 'react-router';
import correct from '../../assets/svg/correct';
import updateScore from '../../utils/updateScore.util';

function QuestionOptions({
	questionNumber,
	currentQuiz,
	timer,
	score,
	selectedOption,
	dispatch,
	quizId,
	isClicked,
	setIsOpen,
}: QuestionOptionsProps) {
	const navigate = useNavigate();

	function calculateAndUpdateScore(option: Option) {
		const response = updateScore(score, currentQuiz.questions[questionNumber], option);
		dispatch({
			type: 'SET_SELECTED_OPTION_AND_SCORE',
			payload: { option, score: response },
		});
	}

	function nextButtonHandler() {
		dispatch({ type: 'RESET_SELECTED_OPTION' });
		dispatch({ type: 'RESET_REGISTERED_CLICK' });
		if (questionNumber + 1 === currentQuiz.questions.length) {
			localStorage.setItem('result', JSON.stringify({ quizId, score }));
			navigate(`/quiz/${quizId}/result`);
		} else {
			dispatch({ type: 'INCREASE_QUESTION_NUMBER' });
			dispatch({ type: 'RESET_TIMER' });
		}
	}

	function optionClickHandler(option: Option) {
		if (isClicked) return;
		calculateAndUpdateScore(option);
		dispatch({ type: 'REGISTER_CLICK_ONCE' });
	}

	function showCorrect(option: Option) {
		if (option.isRight && isClicked) return correct();
		else return null;
	}

	return (
		<div className="px-7 pt-5 relative min-h-screen h-content md:w-3/5 xl:w-2/3 md:px-10 md:pt-10 xl:px-16">
			<header className="flex justify-between items-center pb-8 md:hidden">
				<svg
					onClick={() => setIsOpen(true)}
					className="w-5 h-5 text-white-100"
					viewBox="0 0 24 24"
				>
					<path
						d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
						fill="currentColor"
					></path>
				</svg>
				<div className="text-white-100 font-bold">{currentQuiz?.topic}</div>
				<div></div>
			</header>
			<div className="flex justify-between align-baseline md:block">
				<div className="text-white-100 font-medium xl:text-xl xl:font-light">
					{`Question ${questionNumber + 1} of ${currentQuiz?.questions.length}`}
				</div>
				<div className="text-white-100 font-light text-sm md:hidden">{timer} secs</div>
			</div>
			<div className="mt-3 mb-8 xl:mb-12 h-0.5 w-full bg-gray-800">
				<div
					style={{
						width: `${((questionNumber + 1) / currentQuiz?.questions.length) * 100}%`,
					}}
					className="bg-blue-700 h-full transition-all"
				></div>
			</div>
			<div className="bg-black-700 p-6 mb-10 text-sm font-light lg:text-lg lg:p-8 text-white-100 opacity-90">
				<span className="font-medium">Q.</span>{' '}
				{currentQuiz?.questions[questionNumber].question}
			</div>
			{currentQuiz?.questions[questionNumber].options.map((option, index) => {
				return (
					<div
						onClick={() => optionClickHandler(option)}
						key={option.id}
						className={`${
							option.id === selectedOption?.id
								? 'border-blue-700'
								: 'border-black-700'
						} border-4 flex justify-between items-center bg-black-700 pr-6 pl-2 py-5 mb-4 text-sm font-light lg:pl-5 lg:text-lg text-white-100 opacity-90 cursor-pointer transition-colors`}
					>
						<div className="pl-4">
							<span className="font-medium">{index + 1}.</span> {option.option}
						</div>
						{showCorrect(option)}
					</div>
				);
			})}

			<div className="flex justify-between items-center mt-2 md:absolute md:bottom-10 md:right-10 md:left-10 lg:right-16 lg:left-16">
				<span
					className={`${
						score >= 0 ? `text-green-500` : `text-red-500`
					} font-medium lg:text-xl`}
				>
					Score : {score}
				</span>
				<button
					onClick={nextButtonHandler}
					disabled={selectedOption !== undefined ? false : true}
					className="btn bg-blue-700 text-blue-100 rounded-sm h-10 w-24 mt-2 min-w-0 text-sm font-medium md:text-lg md:w-36 md:h-12 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{questionNumber + 1 !== currentQuiz.questions.length ? `Next` : `Finish`}
				</button>
			</div>
		</div>
	);
}

export default QuestionOptions;
