import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import React, { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-blue-950 p-4">
        <div className="max-w-[1240px] flex justify-between py-[15px] items-center mx-auto">
            <div className=" text-2xl md:text-3xl font-bold text-white">
                Internship Offer
            </div>
            {
              toggle ?
              <IoClose 
            onClick={ () =>{setToggle(!toggle)}}
            className="text-white text-2xl md:hidden block" />
            :
            <MdOutlineMenu 
            onClick={ () =>{setToggle(!toggle)}} 
            className="text-white text-2xl md:hidden block" />
            }
            
            
            
            <ul className='md:flex hidden text-white gap-10'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* responsive menu */}
            <ul className={`md:hidden text-white gap-10 fixed bg-gray-900 top-[98px] left-0 h-screen w-full flex flex-col items-center duration-300 origin-top
              ${toggle ? `scale-y-100`: `scale-y-0`}
            `}>
                <li className="p-2">Home</li>
                <li className="p-2">Company</li>
                <li className="p-2">Resources</li>
                <li className="p-2">About</li>
                <li className="p-2">Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Header