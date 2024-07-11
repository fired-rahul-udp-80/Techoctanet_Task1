import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full bg-blue-950 px-5 py-20">
        <div className="max-w-[1240px] mx-auto md:flex space-y-6 justify-between items-center">
            <div className="">
                <h1 className="text-[40px] font-bold text-white">Want to learn latest I.T skills?</h1>
                <span className="text-white">
                    Sign up to our newsletter and stay up to date.
                </span>
            </div>
            <div className="">
                <input type="text" placeholder="Email" className="p-3 mb-4 w-[100%] md:w-[60%] rounded  mx-2 text-slate-600"/>
                <button className="bg-black text-white px-5 py-3 rounded-md">Get stated</button>
                <br />
                <p className="text-white">
                    We care bout the protection of your data. Read our <br /><a href=""
                    className="text-black ">
                        Privacy Policy
                    </a>
                </p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter