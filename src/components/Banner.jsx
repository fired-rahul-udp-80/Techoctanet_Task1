import React from 'react'
// import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className="bg-blue-950 w-full py-[100px]">
        <div className="max-w-[1240px] mx-auto my-[40px] text-center font-bold flex flex-col gap-y-8 items-center">
            <div className=" text-xl md:text-3xl">
                Learn with us
            </div>
            <h2 className="text-white text-3xl md:text-[60px] ">Grow with us.</h2>
            <div className=" text-[30px] md:text-[50px] text-white">
                Learn
                {/* <Typed
                 strings = {[ 'Web Development', 'Digital Marketing', 'Ethical Hacking']}
                 typeSpeed = {100}
                 loops = {true}
                /> */}
            </div>
            <button className="bg-black text-white md:w-[20%] px-4 py-3 rounded-md">Get stated</button>
        </div>
    </div>
  )
}

export default Banner