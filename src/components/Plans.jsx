import React from 'react'
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Plans() {
  return (
    <div className="py-[100px]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 ">
            <div className="shadow-xl h-[500px] hover:scale-105 duration-[400ms]
                flex flex-col justify-center items-center px-10 space-y-8">
                <FaPersonBreastfeeding className="text-6xl text-blue-950" />
                <p className="font-bold text-3xl">Web Development</p>
                <p className="font-semibold text-xl">$149</p>
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, aut.</p>
                <button className="bg-blue-950 px-5 py-3 rounded text-white font-bold ">Start Trial</button>
            </div>
            <div className="shadow-2xl h-[500px] bg-gray-100 hover:scale-105 duration-[400ms]
                flex flex-col justify-center items-center px-10 space-y-8">
                <FaReact className="text-6xl text-blue-950" />
                <p className="font-bold text-3xl">React Developer</p>
                <p className="font-semibold text-xl">$149</p>
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, aut.</p>
                <button className="bg-blue-950 px-5 py-3 rounded text-white font-bold ">Start Trial</button>
            </div>
            <div className="shadow-2xl h-[500px] hover:scale-105 duration-[400ms]
                flex flex-col justify-center items-center px-10 space-y-8">
                <SiMongodb className="text-6xl text-blue-950" />
                <p className="font-bold text-3xl">MongoDB</p>
                <p className="font-semibold text-xl">$149</p>
                <p className="text-xl">Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, aut.</p>
                <button className="bg-blue-950 px-5 py-3 rounded text-white font-bold ">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Plans