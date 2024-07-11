import React from 'react'
import { IoLogoDesignernews } from "react-icons/io";
const Footer = () => {
  return (
    <div className=" bg-blue-950">
        <div className=" py-3 flex justify-center items-center gap-x-2">
            <IoLogoDesignernews className="text-white text-2xl font-semibold" />
            <p className="text-white text-sm md:text-lg font-bold ">Designed by Rahul Kumar || all right reserved 2024</p>
        </div>
    </div>
  )
}

export default Footer