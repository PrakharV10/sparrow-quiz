import React, { useEffect, useState } from 'react';
import Trophy from '../../assets/images/Trophy png (1).png';
import Twitter from '../../assets/images/logos_twitter.png';
import Facebook from '../../assets/images/bi_facebook.png';
import Whatsapp from '../../assets/images/dashicons_whatsapp.png';
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';
import { useParams } from 'react-router';

function Result() {
	const [score, setScore] = useState<number>(0);
	const { quizId } = useParams();

	useEffect(() => {
		let memory = localStorage.getItem('result');
		if (typeof memory === 'string') {
			let memoryObj = JSON.parse(memory);
			if (memoryObj.quizId === quizId) setScore(memoryObj.score);
		}
	}, [quizId]);

	return (
		<div className="bg-black-800 w-screen min-h-screen h-full">
			<header className="h-14 w-full flex justify-center items-center mb-4 lg:pt-9 lg:mb-14">
				<div className="text-white-100 font-semibold text-xl md:text-2xl lg:text-3xl">
					RESULTS
				</div>
			</header>

			<main className="w-full">
				<section className="w-56 m-auto h-56 bg-black-700 flex flex-col justify-center items-center mb-16 lg:w-72 lg:h-72 lg:mb-12">
					<img src={Trophy} alt="trophy" className="w-20 h-20 mb-5 lg:w-28 lg:h-28" />
					<div className="text-center text-4xl font-semibold text-white-100 flex flex-col">
						<div>{score}</div>
						<span className="text-sm font-light">Points</span>
					</div>
				</section>

				<section className="w-4/5 max-w-xs text-center m-auto mb-16 lg:max-w-lg lg:mb-10">
					<p className="text-lg font-light text-white-100 lg:opacity-80">
						Congratulations on completing the Quiz!! Share your Victory with your
						friends, and challenge them to beat your score!!
					</p>
				</section>

				<section className="flex justify-between items-center w-56 m-auto mb-10 lg:mb-10">
					<TwitterShareButton
						title={`Hey Everyone! I just got ${score} points, in the friends quiz on sparrow. I challenge you all to beat my score!!\nLink -`}
						url="https://sparrow-store.netlify.app"
					>
						<img
							src={Twitter}
							alt="twitter-logo"
							className="outline-none"
							style={{ width: '42px', height: '34px' }}
						/>
					</TwitterShareButton>

					<FacebookShareButton
						quote={`Hey Everyone! I just got ${score} points, in the friends quiz on sparrow. I challenge you all to beat my score!!\n Try it out here-`}
						url="https://sparrow-store.netlify.app"
					>
						<img
							src={Facebook}
							alt="facebook-logo"
							style={{ width: '42px', height: '42px' }}
						/>
					</FacebookShareButton>

					<WhatsappShareButton
						url="https://sparrow-store.netlify.app"
						title={`Hey Everyone! I just got ${score} points, in the friends quiz on sparrow. I challenge you all to beat my score!!\nTry it out here -`}
					>
						<img
							src={Whatsapp}
							alt="facebook-logo"
							style={{ width: '44px', height: '44px' }}
						/>
					</WhatsappShareButton>
				</section>

				<section className="text-center">
					<button className="btn bg-blue-700 rounded-sm w-28 h-10 min-w-0 mb-4 lg:w-36 lg:h-12 lg:font-bold lg:text-lg">
						CONTINUE
					</button>
				</section>
			</main>
		</div>
	);
}

export default Result;
