import React from 'react'
import computer from '../assets/computer.png'
const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto gap-x-6 px-2 md:grid grid-cols-3">
        <div className="  col-span-1">
            <img src={computer} alt="computer"  />
        </div>
        <div className="    col-span-2 flex flex-col justify-center ">
            <h1 className=" font-bold my-2 text-3xl">LEARN FROM EXPERTS</h1>
            <p className="my-2 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem ipsam, id placeat error illum nemo eaque distinctio dignissimos, quibusdam modi cum cumque fugit soluta corporis! Fugit libero assumenda sapiente.
            </p>
            <button className="my-2 w-[30%] bg-black text-white px-4 py-2 rounded-md">
                Get started
            </button>
        </div>



    </div>
  )
}

export default Experts