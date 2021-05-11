import React from 'react'

function Login() {
    return (
        <div className = "min-w-screen min-h-screen flex flex-col sm:flex-row">
            <div className="bg-gradient-blue h-64 py-4 px-7 w-full flex flex-col justify-center items-center">
                <div className="logo w-full">sparrow</div>
                <div className="font-regular text-lg text-white-100 w-full  pt-7">
                    Get Started
                </div>
                <p className="text-sm font-light text-gray-300 pt-4 w-full">
                    Want to test your knowledge, in the field of Graphics Designing?<br />
                    Earn cool badges, and challenge your friends for a battle of knowledge! Get Started now!
                </p>
            </div>
            <div className="flex-1 bg-white h-full pt-12">
                <form className="text-center w-full px-7">
                    <input type="text" placeholder="Name" className="input-field w-full" />
                </form>
            </div>
        </div>
    )
}

export default Login
