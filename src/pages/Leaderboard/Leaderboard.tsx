import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from '../../assets/svg/Menu';
import { Sidebar, ScoreCard } from '../../Component';
import { SERVER_URL } from '../../utils/api';
import { serverCallHandler } from '../../utils/serverCallHandler';

function Leaderboard({ showSidebar, setShowSidebar }: SidebarPassingProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [allScores, setAllScores] = useState([]);

	useEffect(() => {
		(async function () {
			const { response } = await serverCallHandler('GET', `${SERVER_URL}/scoreboard`);
			if (response.success) {
				setAllScores(response.data);
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<div className="bg-black-800 w-screen min-h-screen">
			<Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
			<main className="h-screen md:ml-80 md:pt-5 text-blue-100 text-lg">
				<header className="p-4 pb-8 flex justify-between items-center md:justify-center md:pb-10">
					<span className="md:hidden" onClick={() => setShowSidebar(true)}>
						<Menu />
					</span>
					<span className="text-white-100 font-semibold md:text-xl">SCOREBOARD</span>
					<span></span>
				</header>

				{!isLoading && (
					<div>
						{allScores.map((score: Score, index: number) => {
							return <ScoreCard key={score._id} score={score} index={index} />;
						})}
					</div>
				)}
			</main>
		</div>
	);
}

export default Leaderboard;
