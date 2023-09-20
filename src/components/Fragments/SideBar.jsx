import React, { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbFileInvoice} from 'react-icons/tb'
import {BsFillInboxesFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {BiLogOut} from 'react-icons/bi'

const SideBar = ({}) => {
    const activeLink = 'rounded-full p-1 flex text-cyan-800 bg-white'
    const normalLink = 'hover:bg-white hover:rounded-full hover:text-cyan-800 flex text-white p-1'

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleClose = () => {
        setNav(!nav)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
        localStorage.removeItem('password');
        window.location.href = "/";
    };

  return (
      <div className='flex-none'>
        <div className='hidden sm:h-screen sm:w-[70px] sm:bg-cyan-800 sm:block bg-fixed'>
            <div className='flex flex-col items-center pt-4'>
                    {/* <NavLink to='/user' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <CgProfile size={30} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold text-sm'>User</p> */}

                    <NavLink to='/kasir' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <GiReceiveMoney size={30} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold text-sm'>Kasir</p>

                    {/* <NavLink to='/invoice' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <TbFileInvoice size={30} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold text-sm'>Invoice</p> */}

                    <NavLink to='/stock' className={({ isActive }) => isActive ? activeLink: normalLink}>
                        <BsFillInboxesFill size={30} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold text-sm'>Stock</p>

                    <NavLink to='/' className={({ isActive }) => isActive ? activeLink: normalLink} onClick={handleLogout}>
                        <BiLogOut size={30} className='m-1'/>
                    </NavLink>
                    <p className='text-center pb-2 text-white font-semibold text-sm'>Log Out</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar