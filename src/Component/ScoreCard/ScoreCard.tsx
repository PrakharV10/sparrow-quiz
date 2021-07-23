import React from 'react';

const ScoreCard = ({ score, index }: ScoreCardProps) => {
	return (
		<div className='bg-black-700 rounded mx-4 mt-8 p-4 h-20 shadow-md md:w-4/5 md:m-auto md:mb-8 md:h-24 flex justify-between items-center'>
			<div>{index + 1}</div>
			<div>{score.userId.username}</div>
			<div>{score.latestScore}</div>
		</div>
	);
};

export default ScoreCard;
