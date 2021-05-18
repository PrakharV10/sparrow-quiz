import React from 'react'
import { NavLink } from 'react-router-dom'
import Exit from '../../assets/svg/exit'

function Sidebar({ setShowSidebar, showSidebar }: SidebarProps) {
    
    let activeStyle = {
        color: "#0173F7",
        fontWeight: "700"
    }

    return (
        <div className={`w-80 h-screen transition-all duration-300 fixed top-0 left-0 bg-black-700 ${!showSidebar ? "transform -translate-x-full opacity-0 md:-translate-x-0 md:opacity-100" : "transform translate-x-0 opacity-100"}`}>
            <span className="md:hidden" onClick = {() => setShowSidebar(false)}><Exit /></span>
            <div className="pt-8 flex flex-col items-center mb-9 md:pt-12">
                <img 
                    className="avatar-lg mb-4"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="avatar" 
                />
                <div className="text-lg text-white-100">
                    Alexander Fernandis
                </div>
            </div>

            <nav className="mb-16">
                <ul className="text-center text-white-100 text-lg">
                    <li className="p-6">
                        <NavLink to="/dashboard" className="w-full" activeStyle={activeStyle}>
                            HOME
                        </NavLink>
                    </li>
                    <li className="p-6">
                        <NavLink to="/learn">
                            LEARN
                        </NavLink>
                    </li>
                    <li className="p-6">
                        <NavLink to="/account">
                            ACCOUNT
                        </NavLink>
                    </li>
                    <li className="p-6"> 
                        <NavLink to="/leaderboard" className="p-6">
                            LEADERBOARD
                        </NavLink>
                    </li>
                </ul>

            </nav>
            <div className="text-center">
                <button className="btn bg-blue-700 min-w-0 w-28 h-10">SIGNOUT</button>
            </div>
        </div>
    )
}

export default Sidebar
