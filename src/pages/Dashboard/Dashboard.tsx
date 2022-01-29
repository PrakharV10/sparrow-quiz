import React, { useEffect } from 'react';
import { useState } from 'react';
import Menu from '../../assets/svg/Menu';
import { QuizCard, Sidebar } from '../../Component';
import { useQuizzes } from '../../context';

function Dashboard({ showSidebar, setShowSidebar }: SidebarPassingProps) {
	const { allQuizzes } = useQuizzes();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (allQuizzes.length !== 0) {
			setIsLoading(false);
		}
	}, [allQuizzes]);

	return (
		<div className="bg-black-800 w-screen min-h-screen">
			<Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

			<main className="md:ml-80 md:pt-5">
				<header className="p-4 pb-8 flex justify-between items-center md:justify-center md:pb-10">
					<span className="md:hidden" onClick={() => setShowSidebar(true)}>
						<Menu />
					</span>
					<span className="text-white-100 font-semibold md:text-xl">DASHBOARD</span>
					<span></span>
				</header>

				{!isLoading && (
					<div className="flex justify-evenly flex-wrap w-4/5 m-auto">
						{allQuizzes.map((quiz) => {
							return (
								<div className="h-content" key={quiz._id}>
									<QuizCard quiz={quiz} />
								</div>
							);
						})}
					</div>
				)}
			</main>
		</div>
	);
}

export default Dashboard;
