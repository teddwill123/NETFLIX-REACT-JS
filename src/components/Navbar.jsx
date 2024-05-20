import React from 'react';
import {Link} from "react-router-dom";
import { logout } from '../firebase';


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>

      <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      
      
      <div className='hidden md:flex'>
        <ul className='flex items-start gap-[20px] cursor-pointer text-gray-200'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Upcoming</li>
        </ul>
      </div>

        <div>
        <p 
            className='bg-red-600 px-4 py-2 cursor-pointer text-white rounded-md'
            onClick={() => {logout()}}
            >
            Logout
          </p>
        </div>


    </div>
  )
}

export default Navbar
