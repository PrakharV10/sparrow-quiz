import React from 'react';
import Menu from '../../assets/svg/Menu';
import Sidebar from '../../Component/Sidebar/Sidebar';

function Account({ showSidebar, setShowSidebar }: SidebarPassingProps) {
	return (
		<div className="bg-black-800 w-screen min-h-screen">
			<Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
			<main className="h-screen md:ml-80 md:pt-5 text-blue-100 text-lg">
				<header className="p-4 pb-8 flex justify-between items-center md:justify-center md:pb-10">
					<span className="md:hidden" onClick={() => setShowSidebar(true)}>
						<Menu />
					</span>
					<span className="text-white-100 font-semibold md:text-xl">IN PROGRESS</span>
					<span></span>
				</header>
			</main>
		</div>
	);
}

export default Account;
