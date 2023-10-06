import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }


    const menus = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Destinations',
        link: '/'
      },
      {
        name: 'Reservations',
        link: '/'
      },
      {
        name: 'Amenties',
        link: '/'
      },
      {
        name: 'Rooms',
        link: '/'
      }
    ]
  
    return (
      <div className='absolute w-full flex justify-between
      p-4 items-center'>
        <h1 className='text-slate-600 font-bold
        text-2xl z-20'>Experiences</h1>
        <HiMenuAlt3 onClick={handleNav} size={25} className="z-30 text-slate-600 cursor-pointer " />
        <div 
            className={
                nav 
                ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7' 
        : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
          <ul className='flex flex-col
          fixed w-full items-center
          justify-center'>
            {menus.map((menu) => (
              <li key={menu.name} className='font-bold text-3xl p-8'>{menu.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

export default Navbar
