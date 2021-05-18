import React, { useState } from 'react'
import Menu from '../../assets/svg/Menu'
import Sidebar from '../../Component/Sidebar/Sidebar'

function Dashboard() {

    const [showSidebar, setShowSidebar] = useState<boolean>(true)

    return (
        <div className="bg-black-800 w-screen min-h-screen">
            <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
            <header className="p-4 flex justify-between items-center">
                <span onClick={() => setShowSidebar(true)}><Menu /></span>
                <span className="text-white-100 font-semibold">DASHBOARD</span>
                <span></span>
            </header>
        </div>
    )
}

export default Dashboard
